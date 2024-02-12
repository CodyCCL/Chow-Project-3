import React from "react";
import { Link } from "react-router-dom";
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
    border: "none",
    color: "#FFFFFF",
  },
  price: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2A9DB8",
  },
  cardHeader: {
    backgroundColor: "#FD6801",
  },
  cardTitle: {
    backgroundColor: "#FD6801",
    fontWeight: "bold",
    fontSize: "24px",
  },
  cardBody: {
    textAlign: "left",
    padding: "2rem",
  },
  cardFooter: {
    backgroundColor: "#E02415",
    fontWeight: "bold",
    fontSize: "20px",
    height: "60px",
  },
  buttonLink: {
    textDecoration: "none",
  },
};

const MenuCardTitled = (props) => {
  return (
    <Card style={styles.card}>
      <CardHeader style={styles.cardHeader}>
        <CardTitle style={styles.cardTitle}>{props.store}</CardTitle>
        <CardSubtitle>
          <i className="bi bi-geo-alt-fill"></i> {props.address}
        </CardSubtitle>
      </CardHeader>
      <CardBody>
        <img
          className="img img-fluid mt-4 mb-2"
          alt={props.name}
          src={props.image}
        />
        <div style={styles.cardBody}>
          <h3 style={styles.h3}>{props.name}</h3>
          <p style={styles.price}>
            <span className="text-secondary">Price </span>${props.price}
          </p>
        </div>
      </CardBody>
      <CardFooter style={styles.cardFooter}>
        <Link to="/our-menu" style={styles.buttonLink}>
          <Button
            style={{
              backgroundColor: "#E02415",
              color: "#FFFFFF",
              border: "none",
            }}
          >
            Order Here <i className="bi bi-chevron-right"></i>
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default MenuCardTitled;
