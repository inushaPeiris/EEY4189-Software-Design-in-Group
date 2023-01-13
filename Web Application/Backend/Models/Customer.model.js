const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const customerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    requir: true,
  },
  password: {
    type: String,
    requir: true,
  },
});

const Customer = mongoose.model("customer", customerSchema);

module.exports = Customer;
