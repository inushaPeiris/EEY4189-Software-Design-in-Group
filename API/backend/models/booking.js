const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    packageName:{
        type:String,
        required:true
    },
    startDate:{
        type:String,
        required:true
    },
    participants:{
        type:String,
        required:true
    },
    requirements:{
        type:String,
        required:true
    },
    payMethod:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("bookings", bookingSchema);