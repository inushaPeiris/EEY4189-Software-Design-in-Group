const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const customerSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    age:{
        type: Number,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
})

const customer = mongoose.model("customer", customerSchema);

module.exports = customer;