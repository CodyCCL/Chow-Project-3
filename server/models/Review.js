const { Schema, model } = require("mongoose");

const reviewSchema = new Schema({
  comment: {
    type: String,
    required: true,
  },
  ratingCount: {
    type: Number,
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId, 
    ref: "User", 
    required: true,
  },
});

const Review = model("Review", reviewSchema);

module.exports = Review;
