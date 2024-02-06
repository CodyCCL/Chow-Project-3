const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  reviewId: {
    type: String,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
  ratingCount: {
    type: Number,
    required: true,
  },
  user: {
    type: userSchema, 
    required: true,
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
