import React from "react";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardSubtitle,
  CardTitle,
} from "reactstrap";

const styles = {
  h3: {
    fontSize: "22px",
    fontWeight: "bold",
    color: "#2A9DB8",
  },
  card: {
    color: "#2A9DB8",
    textAlign: "left",
  },
  price: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#2A9DB8",
  },
  cardHeader: {
    backgroundColor: "#FD6801",
  },
  cardTitle: {
    fontWeight: "bold",
    fontSize: "24px",
  },
  cardFooter: {
    backgroundColor: "#2A9DB8",
    fontWeight: "bold",
    fontSize: "20px",
    height: "60px",
    color: "#FFFFFF",
  },
};

const MenuCardUntitled = (props) => {
  return (
    <Card style={styles.card}>
      <img
        className="img img-fluid mt-0 mb-2"
        alt={props.name}
        src={props.image}
      />
      <CardBody>
        <CardTitle style={styles.cardTitle}>{props.name}</CardTitle>
        <br />
        // TODO STAR RATING COMPONENT
        <p className="mt-3" style={styles.price}>
          ${props.price}
        </p>
      </CardBody>
      <CardFooter tag={Button} style={styles.cardFooter}>
        ADD TO CART <i className="bi bi-cart4 mx-2"></i>
      </CardFooter>
    </Card>
  );
};

export default MenuCardUntitled;
