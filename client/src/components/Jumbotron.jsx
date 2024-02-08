import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";

const styles = {
  container: {
    backgroundColor: "#2C3485",
    color: "#FFFFFF",
    paddingTop: "40px",
  },
  header: {
    color: "#ECA39E",
    fontSize: "50px",
    fontWeight: "700",
  },
  subheader: {
    fontSize: "50px",
    fontWeight: "700",
  },
  p: {
    fontSize: "18px",
  },
  linkBtn: {
    color: "#2C3485",
    backgroundColor: "#ECA39E",
    fontWeight: "bold",
    paddingLeft: "2rem",
    paddingRight: "2rem",
  },
};

const Jumbotron = () => {
  return (
    <div style={styles.container}>
      <Container>
        <Row>
          <Col md={4}>
            <h1 style={styles.header}>Mind Matters:</h1>
            <h1 style={styles.subheader}>Navigating Mental Wellness</h1>
            <div className="my-5">
              <p style={styles.p}>
                Discover Support, Resources, and Community for Your Mental
                Well-being Journey.
              </p>
              <Button size="lg" style={styles.linkBtn} tag={Link} to="/">
                Get Started
              </Button>
            </div>
          </Col>
          <Col md={8}></Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;
