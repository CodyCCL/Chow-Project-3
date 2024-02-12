import React from "react";
import { Button, Col, Container, Row } from "reactstrap";
import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";
import { QUERY_MEALS } from "../../utils/queries";

import MenuCardUntitled from "../../components/MenuCardUntitled";

const styles = {
  root: {
    minHeight: "80vh",
  },
  h1: {
    color: "#2A9DB8",
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
  },
  h2: {
    color: "#2A9DB8",
    fontSize: "38px",
    fontWeight: "bold",
    textAlign: "left",
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
  btnColor: "FD6801",
};

const ExploreOurMenu = () => {
  const { loading, data } = useQuery(QUERY_MEALS);

  const meals = data?.meals || [];

  return (
    <div id="explore-the-menu" style={styles.root}>
      <Container>
        <h1 style={styles.h1}>Explore Our Menu</h1>
        <h2 style={styles.h2}>New</h2>

        {loading ? (
          <p>Loading</p>
        ) : (
          <Row className="text-center">
            {meals.map((meal) => (
              <Col key={meal._id} className="my-5" xs={12} md={3}>
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

export default ExploreOurMenu;
