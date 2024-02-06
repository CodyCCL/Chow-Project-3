const { Schema, model } = require("mongoose");

const ingredientsSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const Ingredients = model("Ingredients", ingredientsSchema);

module.exports = Ingredients;
