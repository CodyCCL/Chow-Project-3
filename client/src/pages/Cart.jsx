import React, { useState, useEffect } from "react";
import { useMutation } from "@apollo/client";
import gql from "graphql-tag";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  Button,
  Input,
  InputGroup,
} from "reactstrap";

import StarReview from "../components/StarReview";

const styles = {
  root: {
    color: "#6C6C6C",
    paddingBottom: "96px",
  },
  h1: {
    fontSize: "36px",
    fontWeight: "bold",
    color: "#2A9DB8",
  },
  h3: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2A9DB8",
  },
  p: {
    fontSize: "20px",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#000000",
  },
  input: {
    textAlign: "center",
    border: "solid 1px #6C6C6C",
  },
  button: {
    color: "#FFFFFF",
    backgroundColor: "#2A9DB8",
  },
  cardFooter: {
    backgroundColor: "red",
    color: "#FFFFFF",
  },
};

const CREATE_PAYMENT_INTENT = gql`
  mutation CreatePaymentIntent($amount: Int!, $currency: String!) {
    createPaymentIntent(amount: $amount, currency: $currency) {
      clientSecret
    }
  }
`;

const Cart = () => {
  // get cart items
  const getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    return cartItems !== null ? cartItems : [];
  };

  const getTotalPurchase = () => {
    const meals = getCartItems();

    let total = 0;

    // compute for total
    for (let meal of meals) {
      const tmp = meal.price * meal.quantity;
      total += tmp;
    }

    return total;
  };

  const [meals, setMeals] = useState(getCartItems());
  const [preview, setPreview] = useState(meals[0]);
  const [total, setTotal] = useState(getTotalPurchase());

  // update preview meal
  const handleShowPreview = (meal) => {
    // get cart item
    const cartItemsTmp = getCartItems();
    const cartItems = cartItemsTmp.filter((e) => e._id === meal._id);

    setPreview(cartItems[0]);
  };

  const handleRemoveToCart = async (mealId) => {
    // get cart itmes
    const cartItemsTmp = await getCartItems();
    const cartItems = cartItemsTmp.filter((e) => e._id !== mealId);

    // store
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    setMeals(cartItems);

    let quantityHolder = 0;
    for (let cartItem of cartItems) {
      quantityHolder += cartItem.quantity;
    }

    document.getElementById("cartNotif").innerHTML =
      quantityHolder > 0 ? quantityHolder : "";

    if (data) {
      data.createPaymentIntent = undefined;
    }
  };

  // cart controls
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setCounter(preview ? preview.quantity : 1);
  }, [preview ? preview.quantity : undefined]);

  const add = () => {
    setCounter(parseInt(counter) + 1);
  };

  const deduct = () => {
    if (counter !== 1) {
      setCounter(parseInt(counter) - 1);
    }
  };

  const handleUpdateToCart = async () => {
    const cartItemsTmp = await getCartItems();
    const cartItems = cartItemsTmp.filter((e) => e._id !== preview._id);

    // update order quantity
    let order = {
      _id: preview._id,
      name: preview.name,
      description: preview.description,
      quantity: preview.quantity,
      price: preview.price,
      ingredients: preview.ingredients,
      image: preview.image,
    };

    order["quantity"] = parseInt(counter);

    cartItems.unshift(order);

    // update storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));

    // update badge
    let quantityHolder = 0;
    for (let cartItem of cartItems) {
      quantityHolder += cartItem.quantity;
    }

    document.getElementById("cartNotif").innerHTML =
      quantityHolder > 0 ? quantityHolder : "";

    setTotal(getTotalPurchase());

    if (data) {
      data.createPaymentIntent = undefined;
    }
  };

  // stripe related
  let [createPaymentIntent, { data, loading, error }] = useMutation(
    CREATE_PAYMENT_INTENT
  );

  const handleCreatePaymentIntent = async () => {
    const tmp = getTotalPurchase() * 100;
    try {
      await createPaymentIntent({
        variables: {
          amount: tmp, // Amount in cents
          currency: "usd",
        },
      });
    } catch (err) {
      console.error("Error creating payment intent:", err);
    } finally {
      setTotal(getTotalPurchase());
    }
  };

  // clear carts
  const handleStripePay = (e) => {
    e.preventDefault();
    document.getElementById("cartNotif").innerHTML = "";
    localStorage.setItem("cartItems", JSON.stringify([]));
    setMeals([]);
  };

  return (
    <>
      <Container style={styles.root}>
        <Row>
          {meals.length > 0 ? (
            <>
              <Col className="mt-3" xs={12} md={4}>
                <img
                  className="img-thumbnail w-100"
                  alt={`No image found - ${preview.image}`}
                  src={preview.image}
                />
              </Col>
              <Col className="mt-3" xs={12} md={5}>
                <p style={styles.p}>{preview.name}</p>
                <h1 style={styles.h1}>{preview.name}</h1>
                <StarReview />
                <div className="mt-2">
                  <p style={styles.p}>{preview.description}</p>
                </div>
                <div className="mt-3">
                  <h1 style={styles.h3}>Ingredients</h1>
                  <p style={styles.p}>
                    {preview.ingredients
                      ? preview.ingredients
                      : "No ingredients found for this meal."}
                  </p>
                </div>
                <div className="mt-3">
                  <p style={styles.price}>${preview.price}</p>
                </div>
                <Row>
                  <Col className="py-2" xs={12} md={6}>
                    <InputGroup className="w-50">
                      <Button
                        outline
                        style={{ borderRight: "none" }}
                        className="w-25"
                        onClick={deduct}
                      >
                        -
                      </Button>
                      <Input
                        type="text"
                        style={styles.input}
                        value={counter}
                        onChange={(e) => setCounter(e.target.value)}
                      />
                      <Button
                        outline
                        style={{ borderLeft: "none" }}
                        className="w-25"
                        onClick={add}
                      >
                        +
                      </Button>
                    </InputGroup>
                  </Col>
                  <Col className="py-2" xs={12} md={6}>
                    <Button
                      style={styles.button}
                      className="w-100"
                      onClick={handleUpdateToCart}
                    >
                      UPDATE
                    </Button>
                  </Col>
                </Row>
              </Col>
              <Col className="mt-3" xs={12} md={3}>
                {meals.map((meal) => {
                  return (
                    <Card
                      key={meal._id}
                      className="my-4"
                      onClick={() => handleShowPreview(meal)}
                    >
                      <CardBody>
                        <CardImg
                          alt={`Image not found - ${meal.image}`}
                          src={`${meal.image}`}
                        />
                        <div className="mt-2">
                          <p style={styles.h3}>{meal.name}</p>
                          <p style={styles.price}>${meal.price}</p>
                        </div>
                      </CardBody>
                      <CardFooter
                        tag={Button}
                        style={styles.cardFooter}
                        onClick={() => handleRemoveToCart(meal._id)}
                      >
                        Remove to Cart <i className="bi bi-trash"></i>
                      </CardFooter>
                    </Card>
                  );
                })}
                {data && data.createPaymentIntent ? (
                  <form id="payment-form">
                    <Button
                      onClick={(e) => handleStripePay(e)}
                      type="submit"
                      className="w-100"
                      size="lg"
                    >
                      Pay Total of ${total}
                    </Button>
                  </form>
                ) : (
                  <Button
                    className="w-100"
                    size="lg"
                    style={styles.button}
                    onClick={handleCreatePaymentIntent}
                    disabled={loading && true}
                  >
                    {loading ? "Processing" : "Get Total"}
                  </Button>
                )}
                {error && <div>Error: {error.message}</div>}
              </Col>
            </>
          ) : (
            <Container>
              <h1 style={styles.h1}>No items in your cart.</h1>
            </Container>
          )}
        </Row>
      </Container>
    </>
  );
};

export default Cart;
