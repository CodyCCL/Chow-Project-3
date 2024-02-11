import React from "react";
import { Col, Container, Row, Button, Table } from "reactstrap";

// import componets
import StarReview from "../components/StarReview";

import RecommendedForYou from "../sections/food-template/RecommendedForYou";
import ReviewDetailed from "../sections/food-template/ReviewDetailed";
import TasteTheDifference from "../sections/home/TasteTheDifference";
import Partners from "../sections/home/Partners";
import ImageText from "../sections/food-template/ImageText";
import CartControls from "../components/CartControls";

const Food = () => {
  const styles = {
    root: {
      color: "#6C6C6C",
    },
    left: {
      backgroundImage: `url('/images/food-template-balsamic-glazed-pork.png')`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      minHeight: "70vh",
    },
    h1: {
      fontSize: "36px",
      fontWeight: "bold",
      color: "#2A9DB8",
    },
    h3: {
      fontSize: "24px",
      fontWeight: "bold",
      color: "#2A9DB8",
    },
    p: {
      fontSize: "20px",
    },
    p1: {
      fontSize: "10px",
    },
    price: {
      fontSize: "20px",
      fontWeight: "bold",
      color: "#000000",
    },
    input: {
      fontSize: "22px",
      height: "58px",
      textAlign: "center",
      border: "solid 1px #6C6C6C",
    },
    button: {
      fontSize: "22px",
      backgroundColor: "#FD6801",
      height: "58px",
    },
    tableDesc: {
      backgroundColor: "#D6F2F4",
      color: "#000000",
    },
    tableVal: {
      backgroundColor: "#2A9DB8",
      color: "#EFEFEF",
    },
  };

  const facts = [
    {
      id: 2,
      desc: "Protein",
      value: "41g",
    },
    {
      id: 3,
      desc: "Carbs",
      value: "70g",
    },
    {
      id: 4,
      desc: "Fat",
      value: "30g",
    },
    {
      id: 1,
      desc: "Calories",
      value: "600",
    },
  ];

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

  return (
    <>
      <Container style={styles.root}>
        <Row>
          <Col className="mt-3" xs={12} md={6} style={styles.left}></Col>
          <Col className="mt-3" xs={12} md={6}>
            <p style={styles.p}>Lunch Meal</p>
            <h1 style={styles.h1}>Balsamic Glazed Pork</h1>
            <StarReview />
            <div className="mt-2">
              <p style={styles.p}>
                Pork chops gone gourmet! Forget dry and bland - our Cherry
                Balsamic Glazed Pork Chops are a flavor fiesta! Imagine these
                juicy babies smothered in a sweet and tangy cherry-balsamic
                sauce, served alongside vibrant broccoli and aromatic
                thyme-roasted potatoes. It's a delicious and nutritious
                adventure for your taste buds!
              </p>
            </div>
            <div className="mt-3">
              <h1 style={styles.h3}>Ingredients</h1>
              <p style={styles.p}>
                Fingerling, Potatoes, Dried Thyme, Broccoli Florets, Cherry Jam,
                Shallot, Pork Chops, Balsamic Vinegar
              </p>
            </div>
            <div className="mt-3">
              <p style={styles.price}>$12.99</p>
            </div>
            <CartControls />
          </Col>
        </Row>
        <div className="mt-5 text-center">
          <h1 style={styles.h3}>Nutrition Facts</h1>
          <Row className="mt-4">
            {facts.map((fact, index) => {
              return (
                <Col key={fact.id}>
                  <Table>
                    <tbody>
                      <tr>
                        <td className="p-2" style={styles.tableDesc}>
                          {fact.desc}
                        </td>
                        <td className="p-2" style={styles.tableVal}>
                          {fact.value}
                        </td>
                      </tr>
                    </tbody>
                  </Table>
                </Col>
              );
            })}
          </Row>
        </div>
        <div className="my-5">
          <h1 className="text-center" style={styles.h3}>
            Reviews
          </h1>
          <br />
          <Row className="gx-5 justify-content-md-center">
            <Col xs={12} md={4}>
              <div className="float-end p-2">
                <StarReview />
                <p style={styles.p1}>Based on 30 Reviews</p>
              </div>
              <div className="float-end">
                <h1 style={styles.h1}>5</h1>
              </div>
            </Col>
            <Col xs={12} md={4}>
              <Button style={styles.button} className="w-100">
                Write a Review
              </Button>
            </Col>
          </Row>
          <hr />
          {reviews.map((review) => {
            return <ReviewDetailed key={review.id} {...review} />;
          })}
        </div>
      </Container>
      <ImageText />
      <RecommendedForYou />
      <TasteTheDifference />
      <Partners />
    </>
  );
};

export default Food;
