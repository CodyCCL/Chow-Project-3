import React, { useState, useEffect } from "react";
import { Col, Row, InputGroup, Input, Button } from "reactstrap";

const styles = {
  input: {
    fontSize: "22px",
    height: "58px",
    textAlign: "center",
    border: "solid 1px #6C6C6C",
  },
  button: {
    fontSize: "22px",
    backgroundColor: "#FD6801",
    height: "58px",
  },
};

const CartControls = (props) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    setCounter(props.quantity);
  }, [props.quantity]);

  const add = () => {
    setCounter(parseInt(counter) + 1);
  };

  const deduct = () => {
    if (counter !== 1) {
      setCounter(parseInt(counter) - 1);
    }
  };

  const getCartItems = () => {
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    return cartItems !== null ? cartItems : [];
  };

  const handleAddToCart = async () => {
    const cartItemsTmp = await getCartItems();
    const cartItems = cartItemsTmp.filter((e) => e._id !== props._id);

    // update order quantity
    let order = {
      ...props,
    };

    order["quantity"] = parseInt(counter);

    cartItems.unshift(order);

    // update storage
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  // check counter
  // console.log(counter, props.quantity, props.name);

  return (
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
          onClick={handleAddToCart}
        >
          ADD TO CART <i className="bi bi-cart4 mx-2"></i>
        </Button>
      </Col>
    </Row>
  );
};

export default CartControls;
