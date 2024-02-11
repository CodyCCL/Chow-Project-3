import React from "react";
import { Container, Row, Col, Card, CardBody, CardImg } from "reactstrap";

import StarReview from "../components/StarReview";
import CartControls from "../components/CartControls";
import RecommendedForYou from "../sections/food-template/RecommendedForYou";

const Cart = () => {
  const styles = {
    root: {
      color: "#6C6C6C",
      paddingBottom: "96px",
    },
    left: {
      backgroundImage: `url('/images/food-template-balsamic-glazed-pork.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
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
  };

  // mock food menu
  const food = {
    store: "Army Navy",
    address: "6095, 60 Hwy Rush, Kentucky 41168",
    name: "Balsamic Glazed Pork",
    image: "/images/balsamic-glazed-pork.png",
    price: "10.50",
  };

  return (
    <>
      <Container style={styles.root}>
        <Row>
          <Col className="mt-3" xs={12} md={4}>
            <img
              className="img-thumbnail w-100"
              alt="cart-item"
              src={food.image}
            />
          </Col>
          <Col className="mt-3" xs={12} md={5}>
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
            <CartControls />
          </Col>
          <Col className="mt-3" xs={12} md={3}>
            <Card className="my-4">
              <CardBody>
                <CardImg src={food.image} />
                <div className="mt-2">
                  <p style={styles.h3}>{food.name}</p>
                  <p style={styles.price}>${food.price}</p>
                </div>
              </CardBody>
            </Card>
            <Card className="my-4">
              <CardBody>
                <CardImg src={food.image} />
                <div className="mt-2">
                  <p style={styles.h3}>{food.name}</p>
                  <p style={styles.price}>${food.price}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <RecommendedForYou />
    </>
  );
};

export default Cart;
