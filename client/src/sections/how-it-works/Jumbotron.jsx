import React from "react";
import { Button, Col, Container, Input, InputGroup, Row } from "reactstrap";
import { Link } from "react-router-dom";

const backgroundImg = "/images/bento-boxes.png";

const styles = {
  root: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
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
    height: "60px",
    border: "none",
    borderRadius: "25px",
  },
};

const Jumbotron = () => {
  return (
    <div style={styles.root}>
      <Container>
        <Row style={styles.row}>
          <Col md={6}></Col>
          <Col md={6}>
            <h3 className="mt-md-2" style={styles.h3}>
              HOW IT WORKS
            </h3>
            <h1 className="mt-md-5" style={styles.h1}>
              Healthy meals delivered to your door. No shopping, no cooking -
              just heat and savor!
            </h1>
            <p className="mt-md-5" style={styles.p}>
              Your meals are freshly prepared in local restaurants for that
              delicious homemade taste.
            </p>
            <div className="my-5">
              <Link to="/our-menu">
                <Button style={styles.button}>Explore Our Menu</Button>
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;
