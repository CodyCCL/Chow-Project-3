const { Schema, model } = require("mongoose");
const Meal = require("./Meal");
const User = require("./User"); 

const orderSchema = new Schema({
  orderId: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: Number,
    required: true,
  },
  totalItems: {
    type: Number,
    required: true,
  },
  meal: {
    type: Meal.schema, 
    required: true,
  },
  user: {
    type: User.schema,
    required: true,
  },
});

const Order = model("Order", orderSchema);

module.exports = Order;
