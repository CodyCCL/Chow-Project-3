import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import MenuCardUntitled from "../../components/MenuCardUntitled";
import { Link } from "react-router-dom";

const styles = {
  root: {
    minHeight: "80vh",
    marginBottom: "46px",
  },
  row: {
    paddingTop: "96px",
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
  link: {
    fontSize: "24px",
    fontWeight: "bold",
    color: "#2A9DB8",
    textDecoration: "none",
  },
  button: {
    fontSize: "22px",
    backgroundColor: "#FD6801",
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
  btnColor: "2A9DB8",
};

const OurFullMenu = () => {
  return (
    <div id="our-full-menu" style={styles.root}>
      <Container style={styles.row}>
        <h1 style={styles.h1}>Our Full Menu</h1>
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
          <Col className="my-5" xs={12} md={4}>
            <MenuCardUntitled {...food} {...colors} />
          </Col>
          <Col className="my-5" xs={12} md={4}>
            <MenuCardUntitled {...food} {...colors} />
          </Col>
          <Col className="my-5" xs={12} md={4}>
            <MenuCardUntitled {...food} {...colors} />
          </Col>
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
        <div className="text-center">
          <Button className="btn btn-lg" outline tag={Link} to="#">
            View More
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default OurFullMenu;
