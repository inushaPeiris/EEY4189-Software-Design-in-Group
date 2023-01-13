const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema({
  cusName: {
    type: String,
    requir: true,
  },
  order_item: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  placeStart: {
    type: String,
    required: true,
  },
  totalPrice: {
    type: String,
    requir: true,
  },
  orderDate: {
    type: String,
    requir: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const Order = mongoose.model("order", orderSchema);

module.exports = Order;
