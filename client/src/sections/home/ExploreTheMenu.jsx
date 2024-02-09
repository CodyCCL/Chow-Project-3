import React from "react";
import { Col, Container, Row } from "reactstrap";
import MenuCardUntitled from "../../components/MenuCardUntitled";
import { Link } from "react-router-dom";

const styles = {
  root: {
    minHeight: "80vh",
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

const ExploreTheMenu = () => {
  return (
    <div id="explore-the-menu" style={styles.root}>
      <Container style={styles.row}>
        <h1 style={styles.h1}>Explore The Menu</h1>
        <Row className="text-center">
          <Col className="my-5" xs={12} md={4}>
            <MenuCardUntitled {...food} />
          </Col>
          <Col className="my-5" xs={12} md={4}>
            <MenuCardUntitled {...food} />
          </Col>
          <Col className="my-5" xs={12} md={4}>
            <MenuCardUntitled {...food} />
          </Col>
        </Row>
        <div className="text-center">
          <Link style={styles.link} to="#">
            See All The Menu
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ExploreTheMenu;