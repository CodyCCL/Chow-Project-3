import React from "react";
import { Button, Col, Container, Input, InputGroup, Row } from "reactstrap";

const backgroundImg =
  "/images/portion-fried-vegetables-gray-background-with-space-copying-healthy-food-top-view.png";

const styles = {
  root: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "80vh",
    color: "white",
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
    marginTop: "32px",
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

const Jumbotron = () => {
  return (
    <div style={styles.root}>
      <Container>
        <Row style={styles.row}>
          <Col md={6}></Col>
          <Col md={6}>
            <h1 style={styles.h1}>
              Enjoy Freshly-Made Meals
              <br />
              Delivered at Your Door.
            </h1>
            <h3 style={styles.h3}>
              Check out the available local restaurants near you!
            </h3>
            <div className="my-5">
              <Input
                type="email"
                placeholder="Enter your email address"
                style={styles.input}
              />
              <br />
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Zip Code"
                  style={styles.input}
                />
                <Button style={styles.button}>Browse Restaurants</Button>
              </InputGroup>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jumbotron;
