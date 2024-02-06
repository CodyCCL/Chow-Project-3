const { Schema, model } = require("mongoose");

const macrosSchema = new Schema({
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

const Macros = model("Macros", macrosSchema);

module.exports = Macros;
