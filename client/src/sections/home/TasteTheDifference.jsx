import React from "react";
import { Col, Container, Row } from "reactstrap";

const styles = {
  root: {
    color: "#6C6C6C",
  },
  left: {
    backgroundColor: "#E8E2D6",
  },
  right: {
    backgroundImage: `url('/images/taste-the-difference-right.png')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  h1: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#2A9DB8",
  },
};

const TasteTheDifference = () => {
  return (
    <div id="taste-the-difference" style={styles.root}>
      <Container fluid>
        <Row>
          <Col  xs={12} md={8} style={styles.left}>
            <Row className="pb-2">
              <Col className="pt-5 text-center" xs={12} md={4}>
                <img
                  className="img-fluid h-100"
                  alt="peppering-pan"
                  src="/images/peppering-pan.png"
                />
              </Col>
              <Col className="pt-5" xs={12} md={8}>
                <Container>
                  <h1 style={styles.h1}>Taste The Difference</h1>
                  <p>
                    Each dish is a masterpiece, prepared with love by local mom
                    and pop restaurants sourcing fresh ingredients.
                  </p>
                </Container>
              </Col>
            </Row>
            <Row className="pb-2">
              <Col className="pt-5 text-center" xs={12} md={4}>
                <img
                  className="img-fluid h-100"
                  alt="flavor-like-no-other"
                  src="/images/flavor-like-no-other.png"
                />
              </Col>
              <Col className="pt-5" xs={12} md={8}>
                <Container>
                  <h1 style={styles.h1}>Flavor Like No Other</h1>
                  <p>
                    Feel good about what you eat! Explore a world of taste
                    beyond ordinary meals, made with passion by local heroes.
                  </p>
                </Container>
              </Col>
            </Row>
            <Row className="pb-2">
              <Col className="pt-5 text-center" xs={12} md={4}>
                <img
                  className="img-fluid h-100"
                  alt="pan-top-view"
                  src="/images/pan-top-view.png"
                />
              </Col>
              <Col className="pt-5" xs={12} md={8}>
                <Container>
                  <h1 style={styles.h1}>Healthy, nutritious meals</h1>
                  <p>
                    Feel the difference of balance, delicious meals that nourish
                    <br />
                    your body and mind.
                  </p>
                </Container>
              </Col>
            </Row>
            <Row className="pb-5">
              <Col className="pt-5 text-center" xs={12} md={4}>
                <img
                  className="img-fluid h-100"
                  alt="flavor-like-no-other"
                  src="/images/cart-delivery.png"
                />
              </Col>
              <Col className="pt-5" xs={12} md={8}>
                <Container>
                  <h1 style={styles.h1}>Healthy Made Easy</h1>
                  <p>
                    Conveniet, healthy meals that fit seamlessly into
                    <br />
                    your busy lifestyle.
                  </p>
                </Container>
              </Col>
            </Row>
          </Col>
          <Col  xs={12} md={4} style={styles.right}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default TasteTheDifference;
