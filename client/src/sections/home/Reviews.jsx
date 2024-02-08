import React from "react";
import { Col, Container, Row } from "reactstrap";

import Review from "../../components/Review";

const styles = {
  root: {
    minHeight: "80vh",
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
};

// mock review
const reviews = [
  {
    id: 1,
    title: "A symphony of textures and flavors",
    description:
      "The Sausage Sunken Rigatoni was a revelation, each grain perfectly al dente, infused with earthy depth and creamy decadence. A culinary masterpiece!",
    user: "John Doe",
    rating: 5,
  },
  {
    id: 2,
    title: "Flavorful, Filling, and Budget Friendly Bliss",
    description:
      "The Spicy Sweet Fajitas was a revelation! Rich, savory lentils and flavorful vegetables created a hearty and satisfying dish. I didn't miss the meat one bit!",
    user: "Jane Doe",
    rating: 5,
  },
  {
    id: 3,
    title: "Flavorful, Filling, and Budget Friendly Bliss",
    description:
      "The Spicy Sweet Fajitas was a revelation! Rich, savory lentils and flavorful vegetables created a hearty and satisfying dish. I didn't miss the meat one bit!",
    user: "Jane Doe",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div id="reviews" style={styles.root}>
      <Container style={styles.row}>
        <h1 style={styles.h1}>Our Reviews</h1>
        <Row>
          {reviews.map((review) => {
            return (
              <Col key={review.id} className="my-5" xs={12} md={4}>
                <Review {...review} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default Reviews;
