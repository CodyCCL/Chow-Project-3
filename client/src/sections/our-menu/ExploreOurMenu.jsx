import React, { useEffect } from "react";
import { Button, Col, Container, Row } from "reactstrap";
import MenuCardUntitled from "../../components/MenuCardUntitled";
import { Link } from "react-router-dom";

import { useStoreContext } from "../../utils/GlobalState";
import { useQuery } from "@apollo/client";
import { QUERY_MEALS } from "../../utils/queries";
import { UPDATE_MEALS } from "../../utils/actions";

const styles = {
  root: {
    minHeight: "80vh",
    backgroundColor: "#77C7CE",
    color: "#FFFFFF",
    padding: "10px"
  },
  h1: {
    fontSize: "48px",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: "2rem",
    paddingTop: "20px"
  },
  h2: {
    fontSize: "38px",
    fontWeight: "bold",
    textAlign: "left",
  },
  h3: {
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

const colors = {
  btnColor: "FD6801",
};

const ExploreOurMenu = () => {
  const [state, dispatch] = useStoreContext();
  const { loading, data } = useQuery(QUERY_MEALS);
  const meals = data?.meals.slice(0, 4) || [];

  useEffect(() => {
    if (meals && meals.length > 0) {
      dispatch({
        type: UPDATE_MEALS,
        meals: meals,
      });
    }
  }, []);

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
              <Col className="my-5" xs={12} md={3} key={meal._id}>
                <MenuCardUntitled {...meal} {...colors} />
              </Col>
            ))}
          </Row>
        )}
        <div className="text-center">
          <Link to="#our-full-menu">
          <Button className="btn btn-lg">
            View More
          </Button>
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ExploreOurMenu;
