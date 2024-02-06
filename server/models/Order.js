const { Schema, model } = require("mongoose");

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
  meal: [{
    type: Schema.Types.ObjectId,
    ref: "Meal",
    required: true,
  }],
  user: [{
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  }],
});

const Order = model("Order", orderSchema);

module.exports = Order;
