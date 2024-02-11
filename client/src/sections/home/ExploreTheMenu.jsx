import React from "react";
import { Col, Container, Row } from "reactstrap";
import MenuCardUntitled from "../../components/MenuCardUntitled";
import { Link } from "react-router-dom";
import { useStoreContext } from '../../utils/GlobalState';
import { useQuery } from '@apollo/client';
import { QUERY_MEALS } from '../../utils/queries';
import { useEffect } from 'react';
import { idbPromise } from '../../utils/helpers';
import { UPDATE_MEALS } from "../../utils/actions";

const styles = {
  root: {
    minHeight: "80vh",
    marginBottom: "60px",
  },
  row: {
    paddingTop: "56px",
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

const ExploreTheMenu = () => {
  const [state, dispatch] = useStoreContext();
  const { loading, data } = useQuery(QUERY_MEALS);
  const meals = data?.meals.slice(0, 3) || [];
  useEffect(() => {
    if (meals && meals.length > 0) {
      dispatch({
        type: UPDATE_MEALS,
        meals: meals,
      });
    }
  }, [meals, dispatch]);
  


  return (
    console.log(meals),
    <div id="explore-the-menu" style={styles.root}>
      <Container style={styles.row}>
        <h1 style={styles.h1}>Explore The Menu</h1>
        
        {loading ? (
          <p>Loading</p>
        ) : (
          <Row className="text-center">
          
        {meals.map((meal) => (
          <Col className="my-5" xs={12} md={4}>
            <MenuCardUntitled {...meal} {...colors} 
              key={meal._id}
            />
             </Col>
          ))}
          
          </Row>
        )}
        
        <div className="text-center">
          <Link style={styles.link} to="#">
            See All The Menu
          </Link>
        </div>
      </Container>
    </div>
  );
};

export default ExploreTheMenu;
