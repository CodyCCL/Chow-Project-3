import React, { useState } from "react";
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

const CartControls = () => {
  const [counter, setCounter] = useState(1);

  const add = () => {
    setCounter(parseInt(counter) + 1);
  };

  const deduct = () => {
    if (counter !== 1) {
      setCounter(parseInt(counter) - 1);
    }
  };

  const handleAddToCart = () => {
    console.log(parseInt(counter));
  };

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
