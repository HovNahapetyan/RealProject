const { required } = require("joi");
const mongoose = require("mongoose");

const postModel = new mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    text : {
        type : String,
        required : true
    },
    tags : {
        type : Array,
        default : []
    },
    likeCount : {
        type : Number,
        default : 0
    },
    user : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "users",
        required : true
    },
    imageUrl : String
})

module.exports = mongoose.model("posts", postModel)