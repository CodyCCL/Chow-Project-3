import React from "react";
import { Container, Col, Row } from "reactstrap";

const styles = {
  root: {
    backgroundColor: "#77C7CE",
    minHeight: "100vh",
    color: "#FFFFFF",
  },
  h1: {
    fontSize: "48px",
    fontWeight: "bold",
  },
  h3: {
    fontSize: "36px",
    fontWeight: "bold",
  },
  p: {
    fontSize: "24px",
  },
};

const OnlyTheGoodStuff = () => {
  return (
    <Container fluid className="mt-5" style={styles.root}>
      <div style={{ height: "80px" }}></div>
      <Container>
        <div className="text-center">
          <h1>Only the good stuff</h1>
          <div className="py-5">
            <p style={styles.p}>
              Every bite you take brings you one step closer to becoming the
              best version of yourself. So let's do this Jersey-style, and show
              the world what it means to eat clean and live mean!
            </p>
          </div>
        </div>
        <Row className="justify-content-center">
          <Col className="py-5" xs={12} md={5}>
            <h3 style={styles.h3}>Only the best Ingredients</h3>
            <ul className="mt-5" style={styles.p}>
              <li>
                <strong>NO</strong> Artificial Preservatives
              </li>
              <li>
                <strong>NO</strong> Added Sodium
              </li>
              <li>
                <strong>NO</strong> Artificial Ingredients
              </li>
              <li>
                <strong>NO</strong> Added Sugars
              </li>
            </ul>
          </Col>
          <Col className="py-5" xs={12} md={5}>
            <h3 style={styles.h3}>Made Fresh Every Day</h3>
            <ul className="mt-5" style={styles.p}>
              <li>Farm to Table Ingredients</li>
              <li>Antibiotic / Hormone Free Poultry</li>
              <li>Grass-Fed Beef</li>
              <li>Fresh Wild-Caught Seafood</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default OnlyTheGoodStuff;
