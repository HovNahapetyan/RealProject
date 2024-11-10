const mongoose = require("mongoose");

const regitserModel = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    age : {
        type : Number,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    confirmPassword : {
        type : String,
        required : true
    },
    imageUrl : String,
})

module.exports = mongoose.model("users", regitserModel)