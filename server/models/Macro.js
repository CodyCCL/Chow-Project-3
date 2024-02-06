const { Schema } = require("mongoose");

const macroSchema = new Schema({
  protein: {
    type: Number,
    required: true,
  },
  carbs: {
    type: Number,
    required: true,
  },
  fat: {
    type: Number,
    required: true,
  },
  calories: {
    type: Number,
    required: true,
  },
});

module.exports = macroSchema;
