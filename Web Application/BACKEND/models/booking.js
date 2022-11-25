const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bookingSchema = new Schema({

    name : {
        type : String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    date:{
        type: String,
        required: true
    },
    participents:{
        type: Number,
        required: true
    },
    location:{
        type: String,
        required: true
    },
})

const booking = mongoose.model("booking", bookingSchema);

module.exports = booking;