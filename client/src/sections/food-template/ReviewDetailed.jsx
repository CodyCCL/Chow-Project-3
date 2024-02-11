import React from "react";
import { Col, Container, Row } from "reactstrap";
import StarReview from "../../components/StarReview";

const styles = {
  root: {
    marginBottom: "32px",
  },
  h3: {
    fontSize: "22px",
    color: "#2A9DB8",
  },
  h5: {
    fontSize: "18px",
    fontWeight: "bold",
    marginTop: ".3rem",
    color: "#000000",
  },
  p: {
    fontSize: "16px",
    color: "#6C6C6C",
    textAlign: "left",
  },
  p1: {
    fontSize: "12px",
    color: "#6C6C6C",
    textAlign: "left",
  },
};

const ReviewDetailed = (props) => {
  return (
    <Container style={styles.root}>
      <Row>
        <Col xs="12" md={4}>
          <div>
            <img
              alt="user-one"
              src="/images/user-one.png"
              className="img-fluid float-start"
            />
            <h3 className="float-start mt-3">
              <span className="px-3" style={styles.h3}>
                {props.user}
              </span>
              <p className="px-3" style={styles.p1}>
                Verified Buyer
              </p>
            </h3>
          </div>
        </Col>
        <Col xs="12" md={8}>
          <Row>
            <Col className="mt-3" xs="12" md={2}>
              <StarReview />
            </Col>
            <Col className="mt-3" xs="12" md={10}>
              <h5 style={styles.h5}>{props.title}</h5>
            </Col>
          </Row>
          <p style={styles.p}>{props.description}</p>
        </Col>
      </Row>
    </Container>
  );
};

export default ReviewDetailed;
