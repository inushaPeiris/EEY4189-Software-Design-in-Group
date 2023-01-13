const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const paymentSchema = new Schema({
  cardType: {
    type: String,
    required: true,
  },
  number: {
    type: String,
    required: true,
  },
  expDate: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  code: {
    type: String,
    requir: true,
  },
  payment: {
    type: String,
    required: true,
  },
});

const Payment = mongoose.model("Payment", paymentSchema);

module.exports = Payment;
