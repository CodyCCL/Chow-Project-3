import React from "react";
import { Container, Col, Row, Button } from "reactstrap";

const styles = {
  root: {
    color: "#FD6801",
  },
  h1: {
    color: "#2A9DB8",
    fontSize: "48px",
    fontWeight: "bold",
  },
  h3: {
    fontSize: "24px",
    fontWeight: "600",
  },
  p: {
    fontSize: "20px",
    color: "#6C6C6C",
  },
  button: {
    color: "#FFFFFF",
    fontSize: "22px",
    backgroundColor: "#FD6801",
    height: "72px",
  },
};

const Steps = () => {
  return (
    <Container className="my-5" style={styles.root}>
      <Row>
        <Col xs={12} md={6} className="text-center">
          <img
            alt="how-it-works-step-1"
            src="/images/step-one.png"
            className="img img-responsive"
          />
        </Col>
        <Col xs={12} md={6}>
          <h3>Step One</h3>
          <h1 style={styles.h1}>Pick Your Meals</h1>
          <div className="mt-4">
            <p style={styles.p}>
              Channel your inner foodie: Unleash your cravings and pick the
              perfect meals from our menu - we've got options to tantilize taste
              buds of all kinds, from adventurous to picky (don't worry, we
              won't judge)
            </p>
          </div>
          <div className="my-5">
            <Button outline style={styles.button}>
              Explore Our Menu
            </Button>
          </div>
        </Col>
      </Row>
      <div style={{ height: "80px" }}></div>
      <Row>
        <Col xs={12} md={6}>
          <h3>Step Two</h3>
          <h1 style={styles.h1}>Cooked Fresh</h1>
          <div className="mt-4">
            <p style={styles.p}>
              Sit back, relax, and let our culinary wizards work their magic. We
              whip up your chosen dishes with fresh, highly quality ingredients,
              like a love song for your plate (minus one off-key warbling)
            </p>
          </div>
          <div className="my-5">
            <Button outline style={styles.button}>
              Explore Our Menu
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <img
            alt="how-it-works-step-2"
            src="/images/step-two.png"
            className="img img-responsive"
          />
        </Col>
      </Row>
      <div style={{ height: "80px" }}></div>
      <Row>
        <Col xs={12} md={6} className="text-center">
          <img
            alt="how-it-works-step-3"
            src="/images/step-three.png"
            className="img img-responsive"
          />
        </Col>
        <Col xs={12} md={6}>
          <h3>Step One</h3>
          <h1 style={styles.h1}>Deliver to your Door</h1>
          <div className="mt-4">
            <p style={styles.p}>
              Ding-dong! Your doorbell sings with the arrival of your feast;
              perfectly portioned, pipping hot, and ready to devour. No muss, no
              fuss just pure gastronomic bliss.
            </p>
          </div>
          <div className="my-5">
            <Button outline style={styles.button}>
              Explore Our Menu
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Steps;
