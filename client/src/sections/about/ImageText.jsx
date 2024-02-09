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
};

const ImageText = () => {
  return (
    <Container className="my-5" style={styles.root}>
      <div style={{ height: "80px" }}></div>
      <Row>
        <Col xs={12} md={6}>
          <h1 style={styles.h1}>
            #ChowDown
            <br />
            #FreshMade
            <br />
            #ConnectOverFood
          </h1>
          <div className="mt-4">
            <p style={styles.p}>
              Our platform is the bridge, connecting you with these culinary
              artisans. We champion local mom & pop restaurants, connecting you
              directly with their culinary artistry. Browse love-letter menus,
              track your meal in real-time, and savor fresh, made-to-order bliss
              delivered. Support local, eat happy.
            </p>
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
    </Container>
  );
};

export default ImageText;
