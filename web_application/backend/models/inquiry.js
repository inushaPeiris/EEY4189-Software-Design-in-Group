const mongoose = require('mongoose');

const inquirySchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    topic:{
        type:String,
        required:true
    },
    inquiry:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Inquiry", inquirySchema);