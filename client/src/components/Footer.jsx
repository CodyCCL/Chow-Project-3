import React from "react";
import { Input, InputGroup, Button, Row, Col, Container } from "reactstrap";
import { Link } from "react-router-dom";

const styles = {
  container: {
    position: "absolute",
    bottom: "0",
    height: "280px",
    lineHeight: "100px",
    textAlign: "center",
  },
  icon: {
    fontSize: "1.5rem",
    margin: "auto .5rem",
    color: "#FD6801",
  },
  input: {
    fontSize: "1.2rem",
    height: "50px", 
  },
  button: {
    fontSize: "1.2rem",
    backgroundColor: "#FD6801",
    height: "50px", 
    border: "none"
  },
};

const Form = () => {
  return (
    <Container fluid style={{ backgroundColor: "#77C7CE" }}>
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
              <Link to="/#discover-whats-near-you" style={{ textDecoration: "none" }}>
              <Button style={styles.button}>Browse Restaurants</Button>
              </Link>
            </InputGroup>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Form;
