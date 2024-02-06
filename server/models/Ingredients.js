const { Schema } = require("mongoose");

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

module.exports = ingredientsSchema;
