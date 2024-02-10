import React from "react";
import { Col, Container, Row } from "reactstrap";

const styles = {
  root: {
    minHeight: "80vh",
    marginBottom: "96px",
  },
  row: {
    paddingTop: "56px",
  },
  col: {
    border: "2px solid #77C7CE",
    borderRadius: "20px",
    minHeight: "60vh",
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
    fontSize: "24px",
    fontWeight: "bold",
  },
  p: {
    fontSize: "20px",
    fontWeight: "500",
  },
  input: {
    fontSize: "22px",
    height: "74px",
  },
  button: {
    fontSize: "22px",
    backgroundColor: "#FD6801",
  },
};

const WhyRestaurantsLoveChow = () => {
  return (
    <div id="why-restaurants-love-chow" style={styles.root}>
      <Container style={styles.row}>
        <h1 style={styles.h1}>Why Restaurants Love Chow</h1>
        <br />
        <Row className="text-center g-5">
          <Col xs={12} md={4}>
            <div style={styles.col} className="p-4">
              <img
                className="img-fluid"
                alt="increase-operational-efficiency"
                src="/images/increase-operational-efficiency.png"
              />
              <div className="mt-4">
                <h3 style={styles.h3}>Increase Operational Efficiency</h3>
                <p style={styles.p}>
                  Chow features one menu item per day (with no customization!),
                  allowing your team to prepare orders 3x as fast.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div style={styles.col} className="p-4">
              <img
                className="img-fluid"
                alt="earn-profitable-revenue"
                src="/images/earn-profitable-revenue.png"
              />
              <div className="mt-4">
                <h3 style={styles.h3}>Earn Profitable Revenue</h3>
                <p style={styles.p}>
                  Forget commission cuts. Chow helps you keep more of what you
                  earn by streamlining operations and reducing labor costs.
                </p>
              </div>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <div style={styles.col} className="p-4">
              <img
                className="img-fluid"
                alt="the-meal-kit-only-model"
                src="/images/the-meal-kit-only-model.png"
              />
              <div className="mt-4">
                <h3 style={styles.h3}>The Meal Kit Only Model</h3>
                <p style={styles.p}>
                  Partner with us and tap into a new audience of home cooks
                  eager for your fresh creations. Chow takes care of your meal
                  kit from your kitchen to their doorstep.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default WhyRestaurantsLoveChow;
