const { Schema, model } = require("mongoose");

// Subdocument schema for macros
const macroSchema = new Schema({
  protein: {
    type: Number,
    required: true,
  },
  carbohydrates: {
    type: Number,
    required: true,
  },
  fats: {
    type: Number,
    required: true,
  },
});

// Define the meal schema
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
  macros: {
    type: macroSchema, // Reference the subdocument schema
    required: true,
  },
});

const Meal = model("Meal", mealSchema);

module.exports = Meal;
