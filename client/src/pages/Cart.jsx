import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardFooter,
  CardImg,
  Button,
} from "reactstrap";

import StarReview from "../components/StarReview";
import CartControls from "../components/CartControls";
import RecommendedForYou from "../sections/food-template/RecommendedForYou";

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
  button: {
    color: "#FFFFFF",
    backgroundColor: "#2A9DB8",
  },
  cardFooter: {
    backgroundColor: "red",
    color: "#FFFFFF",
  },
};

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
  };

  const handlePurchase = () => {
    console.log(getTotalPurchase());
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
                <CartControls btnText="UPDATE" {...preview} />
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
                <Button
                  className="w-100"
                  size="lg"
                  style={styles.button}
                  onClick={() => handlePurchase()}
                >
                  Purchase
                </Button>
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
