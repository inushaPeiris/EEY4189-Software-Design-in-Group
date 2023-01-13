const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({

    topic : {
        type : String,
        required: true,    
    },
    name : {
        type : String,
        required: true
    },
    contact : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required: true
    },
    message : {
        type : String,
        requir: true
    },
    
})

const Feedback = mongoose.model("feedback", feedbackSchema);

module.exports = Feedback;