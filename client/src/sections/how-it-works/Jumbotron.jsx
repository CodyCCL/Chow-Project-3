import React from "react";
import { Button, Col, Container, Input, InputGroup, Row } from "reactstrap";

const backgroundImg = "/images/bento-boxes.png";

const styles = {
  root: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: "#2A9DB8",
  },
  row: {
    paddingTop: "96px",
  },
  h1: {
    fontSize: "48px",
    fontWeight: "bold",
  },
  h3: {
    fontSize: "24px",
    fontWeight: "600",
    marginBottom: "16px",
  },
  p: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#6C6C6C",
  },
  button: {
    fontSize: "22px",
    backgroundColor: "#FD6801",
    height: "72px",
  },
};

const Jumbotron = () => {
  return (
    <div style={styles.root}>
      <Container>
        <Row style={styles.row}>
          <Col md={6}></Col>
          <Col md={6}>
            <h3 style={styles.h3}>HOW IT WORKS</h3>
            <h1 style={styles.h1}>
              Healthy meals delivered to your door. No shopping, no cooking -
              just heat and savor!
            </h1>
            <p className="mt-5" style={styles.p}>
              Your meals are freshly prepared in local restaurants for that
              delicious homemade taste.
            </p>
            <div className="my-5">
              <Button style={styles.button}>Explore Our Menu</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;
