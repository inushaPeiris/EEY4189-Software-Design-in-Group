const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const packageSchema = new Schema({

    name : {
        type : String,
        required: true,    
    },
    category : {
        type : String,
        required: true
    },
    price : {
        type : String,
        required: true
    },
    description : {
        type : String,
        required: true
    },
    rich_description : {
        type : String,
        requir: true
    },
    create_date : {
        type : String,
        required: true
    }
    

})

const Package = mongoose.model("Package", packageSchema);

module.exports = Package;
