import React from "react";
import { Container, Col, Row, Button } from "reactstrap";

const styles = {
  root: {
    color: "#FD6801",
    minHeight: "70vh",
  },
  h1: {
    color: "#2A9DB8",
    fontSize: "36px",
    fontWeight: "bold",
  },
  p: {
    fontSize: "24px",
    color: "#6C6C6C",
  },
  button: {
    color: "#FFFFFF",
    fontSize: "22px",
    backgroundColor: "#FD6801",
    height: "72px",
  },
};

const ImageText = () => {
  return (
    <Container className="my-5" style={styles.root}>
      <div style={{ height: "80px" }}></div>
      <Row>
        <Col xs={12} md={6}>
          <h1 style={styles.h1}>Delicious as they are Nutritious</h1>
          <div className="mt-4">
            <p style={styles.p}>
              Ditch the flavorless guilt trip and embrace Chow down! Our meals
              explode with deliciousness while packing a serious nutritional
              punch, proving that feeling good and enjoying amazing food go hand
              in hand.
            </p>
          </div>
          <div className="my-5">
            <Button className="px-5" outline style={styles.button}>
              Learn More
            </Button>
          </div>
        </Col>
        <Col xs={12} md={6} className="text-center">
          <img
            alt="how-it-works-step-2"
            src="/images/delicious-as-they-are-image.png"
            className="img img-responsive"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ImageText;
