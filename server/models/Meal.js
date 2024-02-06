const { Schema, model } = require("mongoose");

const mealSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
    unique: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  macros: [{
    type: Schema.Types.ObjectId,
    ref: "Macros",
    required: true,
  }],
});

const Meal = model("Meal", mealSchema);

module.exports = Meal;
