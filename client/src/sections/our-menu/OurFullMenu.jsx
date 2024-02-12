import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MEALS } from "../../utils/queries";

import MenuCardUntitled from "../../components/MenuCardUntitled";

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

const colors = {
  btnColor: "2A9DB8",
};

const OurFullMenu = () => {
  const { loading, data } = useQuery(QUERY_MEALS);

  const meals = data?.meals || [];

  return (
    <div id="our-full-menu" style={styles.root}>
      <Container style={styles.row}>
        <h1 style={styles.h1}>Our Full Menu</h1>

        {loading ? (
          <p>Loading</p>
        ) : (
          <Row className="text-center">
            {meals.map((meal) => (
              <Col key={meal._id} className="my-5" xs={12} md={4}>
                <MenuCardUntitled {...meal} {...colors} key={meal._id} />
              </Col>
            ))}
          </Row>
        )}

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
