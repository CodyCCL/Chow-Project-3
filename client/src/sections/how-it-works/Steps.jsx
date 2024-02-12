import React from "react";
import { Container, Col, Row, Button } from "reactstrap";
import { Link } from "react-router-dom";

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
    fontSize: "1.3rem",
    backgroundColor: "#FD6801",
    borderRadius: "25px",
    border: "none",
    padding: "10px auto",
    height: "50px",
  },
  img: {
    maxWidth: "100%",
    display: "block",
    margin: "0 auto",
    padding: "30px",
  },
  stepContainer: {
    marginBottom: "auto",
  },
};

const Steps = () => {
  return (
    <Container className="my-5" style={styles.root}>
      {/* Step One */}
      <Row className="align-items-center" style={styles.stepContainer}>
        <Col xs={12} md={6}>
          <h3>Step One</h3>
          <h1 style={styles.h1}>Pick Your Meals</h1>
          <div className="mt-4">
            <p style={styles.p}>
              Channel your inner foodie: Unleash your cravings and pick the
              perfect meals from our menu - we've got options to tantalize taste
              buds of all kinds, from adventurous to picky (don't worry, we
              won't judge)
            </p>
          </div>
          <div className="my-5">
            <Link to="/our-menu">
              <Button outline style={styles.button}>
                Explore Our Menu
              </Button>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <img
            alt="how-it-works-step-1"
            src="/images/step-one.png"
            style={styles.img}
            className="d-none d-md-block"
          />
        </Col>
      </Row>

      {/* Step Two */}
      <Row className="align-items-center" style={styles.stepContainer}>
        <Col xs={12} md={6} className="text-center ">
          <img
            alt="how-it-works-step-2"
            src="/images/step-two.png"
            style={styles.img}
            className="d-none d-md-block"
          />
        </Col>
        <Col xs={12} md={6}>
          <h3>Step Two</h3>
          <h1 style={styles.h1}>Cooked Fresh</h1>
          <div className="mt-4">
            <p style={styles.p}>
              Sit back, relax, and let our culinary wizards work their magic. We
              whip up your chosen dishes with fresh, high-quality ingredients,
              like a love song for your plate (minus one off-key warbling)
            </p>
          </div>
          <div className="my-5">
            <Link to="/our-menu">
              <Button outline style={styles.button}>
                Explore Our Menu
              </Button>
            </Link>
          </div>
        </Col>
      </Row>

      {/* Step Three */}
      <Row className="align-items-center" style={styles.stepContainer}>
        <Col xs={12} md={6}>
          <h3>Step Three</h3>
          <h1 style={styles.h1}>Deliver to your Door</h1>
          <div className="mt-4">
            <p style={styles.p}>
              Ding-dong! Your doorbell sings with the arrival of your feast;
              perfectly portioned, piping hot, and ready to devour. No muss, no
              fuss just pure gastronomic bliss.
            </p>
          </div>
          <div className="my-5">
            <Link to="/our-menu">
              <Button outline style={styles.button}>
                Explore Our Menu
              </Button>
            </Link>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <img
            alt="how-it-works-step-3"
            src="/images/step-three.png"
            style={styles.img}
            className="d-none d-md-block"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default Steps;
