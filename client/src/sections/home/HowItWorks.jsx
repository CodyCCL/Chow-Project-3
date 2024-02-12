import React from "react";
import { Col, Container, Row } from "reactstrap";

const styles = {
  root: {
    padding: "50px"
  },
  h1: {
    color: "#2A9DB8",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
  },
  h3: {
    color: "#2A9DB8",
    fontSize: "36px",
    fontWeight: "bold",
  },
  p: {
    fontSize: "20px",
    fontWeight: "500",
  },
};

const HowItWorks = () => {
  return (
    <div id="how-it-works" style={styles.root}>
      <Container>
        <h1 style={styles.h1}>How It Works</h1>
        <Row className="text-center">
          <Col className="my-5" xs={12} sm={6} md={4}>
            <img
              className="h-50"
              alt="how-it-works-img-1"
              src="/images/spoon-fork.png"
            />
            <div className="mt-4">
              <h3 style={styles.h3}>Pick Your Meals</h3>
              <p style={styles.p}>
                Choose from our selection of comforting classics of exciting
                flavors crafted by local passionate chefs.
              </p>
            </div>
          </Col>
          <Col className="my-5" xs={12} sm={6} md={4}>
            <img
              className="h-50"
              alt="how-it-works-img-1"
              src="/images/how-it-works-pot.png"
            />
            <div className="mt-4">
              <h3 style={styles.h3}>Cooked Fresh</h3>
              <p style={styles.p}>
                Savor the taste of fresh daily-made dishes prepared with fresh
                ingredients by our partnered local restaurants.
              </p>
            </div>
          </Col>
          <Col className="my-5" xs={12} sm={6} md={4}>
            <img
              className="h-50"
              alt="how-it-works-img-1"
              src="/images/motor-delivery.png"
            />
            <div className="mt-4">
              <h3 style={styles.h3}>Deliver to your door</h3>
              <p style={styles.p}>
                Enjoy the convenience of having delicious, home-cooked meals
                delivered to your home.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HowItWorks;
