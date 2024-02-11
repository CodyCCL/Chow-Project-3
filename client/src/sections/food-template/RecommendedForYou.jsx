import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import MenuCardUntitled from "../../components/MenuCardUntitled";
import { Link } from "react-router-dom";

const styles = {
  root: {
    backgroundColor: "#77C7CE",
    minHeight: "80vh",
    paddingTop: "76px",
    paddingBottom: "76px",
  },
  h1: {
    color: "#FFFFFF",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
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

const colors = {
  btnColor: "FD6801",
};

const RecommendedForYou = () => {
  return (
    <Container fluid id="recommended-menu" style={styles.root}>
      <Container>
        <h1 style={styles.h1}>Recommended For You</h1>
        <Row className="text-center">
          <Col className="my-5" xs={12} md={4}>
            <MenuCardUntitled {...food} {...colors} />
          </Col>
          <Col className="my-5" xs={12} md={4}>
            <MenuCardUntitled {...food} {...colors} />
          </Col>
          <Col className="my-5" xs={12} md={4}>
            <MenuCardUntitled {...food} {...colors} />
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default RecommendedForYou;
