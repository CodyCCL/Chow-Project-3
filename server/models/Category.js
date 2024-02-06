const { Schema, model } = require("mongoose");

const categorySchema = new Schema({
  category: {
    type: String,
    required: true,
    unique: true,
  },
});

const category = model("Category", categorySchema);

module.exports = category;
