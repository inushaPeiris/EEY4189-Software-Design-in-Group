const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const feedbackSchema = new Schema({

    topic : {
        type : String,
        required: true
    },
    description:{
        type: String,
        required: true
    }
})

const feedback = mongoose.model("feedback", feedbackSchema);

module.exports = feedback;