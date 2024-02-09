import React, { useState } from "react";
import {
  Col,
  Container,
  Row,
  InputGroup,
  Input,
  Button,
  Table,
} from "reactstrap";
import StarReview from "../components/StarReview";

const styles = {
  root: {
    color: "#6C6C6C",
  },
  left: {
    backgroundImage: `url('/images/food-template-balsamic-glazed-pork.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "70vh",
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
  tableDesc: {
    backgroundColor: "#D6F2F4",
    color: "#000000",
  },
  tableVal: {
    backgroundColor: "#2A9DB8",
    color: "#EFEFEF",
  },
};

const Food = () => {
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

  const facts = [
    {
      id: 1,
      desc: "Calories",
      value: "600",
    },
    {
      id: 2,
      desc: "Protein",
      value: "41g",
    },
    {
      id: 3,
      desc: "Carbs",
      value: "70g",
    },
    {
      id: 4,
      desc: "Fat",
      value: "30g",
    },
  ];

  return (
    <>
      <Container style={styles.root}>
        <Row>
          <Col className="mt-3" xs={12} md={6} style={styles.left}></Col>
          <Col className="mt-3" xs={12} md={6}>
            <p style={styles.p}>Lunch Meal</p>
            <h1 style={styles.h1}>Balsamic Glazed Pork</h1>
            <StarReview />
            <div className="mt-2">
              <p style={styles.p}>
                Pork chops gone gourmet! Forget dry and bland - our Cherry
                Balsamic Glazed Pork Chops are a flavor fiesta! Imagine these
                juicy babies smothered in a sweet and tangy cherry-balsamic
                sauce, served alongside vibrant broccoli and aromatic
                thyme-roasted potatoes. It's a delicious and nutritious
                adventure for your taste buds!
              </p>
            </div>
            <div className="mt-3">
              <h1 style={styles.h3}>Ingredients</h1>
              <p style={styles.p}>
                Fingerling, Potatoes, Dried Thyme, Broccoli Florets, Cherry Jam,
                Shallot, Pork Chops, Balsamic Vinegar
              </p>
            </div>
            <div className="mt-3">
              <p style={styles.price}>$12.99</p>
            </div>
            
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Food;
