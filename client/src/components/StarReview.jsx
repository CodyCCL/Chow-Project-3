import React, { useState } from "react";

const styles = {
  button: {
    backgroundColor: "transparent",
    border: "none",
    outline: "none",
    cursor: "pointer",
    color: "#FD6801",
  },
};

const StarReview = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="star-rating mx-0">
      {[...Array(5)].map((e, index) => {
        index += 1;
        return (
          <button
            style={styles.button}
            type="button"
            key={index}
            className="p-0"
          >
            <h4>&#9733;</h4>
          </button>
        );
      })}
    </div>
  );
};

export default StarReview;
