import React from "react";
import { Input, InputGroup, Button, Row, Col, Container } from "reactstrap";

const styles = {
  container: {
    position: "abosolute",
    bottom: "0",
    height: "280px",
    lineHeight: "100px",
    textAlign: "center",
    paddingTop: "48px",
  },
  icon: {
    fontSize: "1.5rem",
    margin: "auto .5rem",
    color: "#FD6801",
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

const Form = () => {
  return (
    <Container className="h-90" fluid style={{ backgroundColor: "#77C7CE" }}>
      <Container className="py-5">
        <Row>
          <Col className="py-2" xs={12} md={6}>
            <Input
              type="email"
              placeholder="Enter your email address"
              style={styles.input}
            />
          </Col>
          <Col className="py-2" xs={12} md={6}>
            <InputGroup>
              <Input type="text" placeholder="Zip Code" style={styles.input} />
              <Button style={styles.button}>Browse Restaurants</Button>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

const Footer = () => {
  return (
    <footer style={styles.container}>
      <Form />
      <div style={{ height: "100px" }}></div>
      <img
        alt="chow-logo"
        src="/images/chow-logo.png"
        className="img-fluid"
        style={{ height: "46px", width: "192px" }}
      />
      <div className="my-5">
        <a href="/#" style={styles.icon}>
          <i className="bi bi-linkedin"></i>
        </a>
        <a href="/#" style={styles.icon}>
          <i className="bi bi-facebook"></i>
        </a>
        <a href="/#" style={styles.icon}>
          <i className="bi bi-youtube"></i>
        </a>
        <a href="/#" style={styles.icon}>
          <i className="bi bi-twitter"></i>
        </a>
      </div>
      <div style={{ height: "1px" }}></div>
    </footer>
  );
};

export default Footer;
