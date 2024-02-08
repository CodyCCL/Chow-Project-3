import React from "react";

const styles = {
  h2: {
    color: "#2A9DB8",
    fontSize: "30px",
    fontWeight: "bold",
    marginBottom: "2rem",
  },
  p: {
    fontSize: "20px",
  },
  p1: {
    fontWeight: "bold",
    fontSize: "24px",
    color: "#2A9DB8",
  },
  card: {
    boxShadow: "0px 3px 11.2px 3px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },
};

const Review = (props) => {
  return (
    <div className="position-relative h-100" style={styles.card}>
      <div className="p-5">
        // TODO STAR RATING COMPONENT
        <h2 style={styles.h2}>{props.title}</h2>
        <p style={styles.p}>{props.description}</p>
        <p className="position-absolute bottom-0" style={styles.p1}>
          ~ {props.user}
        </p>
      </div>
    </div>
  );
};

export default Review;
