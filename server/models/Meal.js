const { Schema, model } = require("mongoose");
const Macros = require("./Macros");

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
  macros: Macros.schema,
});

const Meal = model("Meal", mealSchema);

module.exports = Meal;
