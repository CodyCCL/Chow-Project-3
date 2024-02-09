import React from "react";
import { Col, Container, Row } from "reactstrap";

const backgroundImg = "/images/about-our-story.png";

const styles = {
  root: {
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    color: "#2A9DB8",
    textAlign: "right",
  },
  row: {
    paddingTop: "96px",
  },
  h1: {
    fontSize: "48px",
    fontWeight: "bold",
  },
  p: {
    fontSize: "24px",
    color: "#6C6C6C",
  },
};

const OurStory = () => {
  return (
    <div style={styles.root}>
      <Container>
        <Row style={styles.row}>
          <Col md={3}></Col>
          <Col md={9}>
            <h1 style={styles.h1}>Our Story</h1>
            <br />
            <p style={styles.p}>
              Our story began with a simple "Ciao!" - Hello, in Italian. But
              instead of the usual greetings, We craved the warmth of family
              meals, the love poured into every bite, the flavors passed down
              through generations. Mom-and-pop restaurants, not faceless
              corporations, are the keepers of these culinary treasures. We, a
              group of passionate developers, yearned for fresh,
              restaurant-quality meals delivered with the same love and care
              found in those home-cooked dishes. But while convenience apps
              offered speed, the food often lacked the stories, the tradition,
              the love poured into every dish that made those meals special. So,
              we decided to write our own story, one delicious chapter at a
              time, starting with supporting local restaurants, the keepers of
              these special flavors and traditions.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default OurStory;
