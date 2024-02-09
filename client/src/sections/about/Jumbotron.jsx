import React from "react";
import { Button, Col, Container, Input, InputGroup, Row } from "reactstrap";

const backgroundImg = "/images/about-jumbotron.png";

const styles = {
  root: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "70vh",
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
};

const Jumbotron = () => {
  return (
    <div style={styles.root}>
      <Container>
        <Row style={styles.row}>
          <Col md={6}>
            <h3 style={styles.h3}>BY CHOOSING FROM OUR MENU</h3>
            <h1 style={styles.h1}>
              You are supporting local businesses and enjoying fresher meals
            </h1>
          </Col>
          <Col md={6}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;
