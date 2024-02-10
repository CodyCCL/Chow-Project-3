import React from "react";
import { Col, Container, Row } from "reactstrap";

const styles = {
  root: {
    minHeight: "45vh",
    marginTop: "36px",
  },
  h1: {
    color: "#2A9DB8",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
  },
};

const Partners = () => {
  return (
    <div id="partners" style={styles.root}>
      <Container>
        <h1 style={styles.h1}>We Partner with The Best Local Restaurants</h1>
        <Row>
          <Col className="my-5 text-center" xs={12} md={2}>
            <img
              className="img-fluid"
              alt="naya-logo"
              src="/images/naya-logo.png"
            />
          </Col>
          <Col className="my-5 text-center" xs={12} md={2}>
            <img
              className="img-fluid"
              alt="roti-logo"
              src="/images/roti-logo.png"
            />
          </Col>
          <Col className="my-5 text-center" xs={12} md={2}>
            <img
              className="img-fluid"
              alt="pokebar-logo"
              src="/images/pokebar-logo.png"
            />
          </Col>
          <Col className="my-5 text-center" xs={12} md={2}>
            <img
              className="img-fluid"
              alt="just-salad-logo"
              src="/images/just-salad-logo.png"
            />
          </Col>
          <Col className="my-5 text-center" xs={12} md={2}>
            <img
              className="img-fluid"
              alt="sajj-logo"
              src="/images/sajj-logo.png"
            />
          </Col>
          <Col className="my-5 text-center" xs={12} md={2}>
            <img
              className="img-fluid"
              alt="chopt-logo"
              src="/images/chopt-logo.png"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Partners;
