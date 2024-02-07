const { Schema, model } = require("mongoose");

const orderSchema = new Schema({
  purchaseDate: {
    type: Date,
    default: Date.now,
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
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

const Order = model("Order", orderSchema);

module.exports = Order;
