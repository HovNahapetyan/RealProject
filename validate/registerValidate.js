const joi = require('joi');

const registerValidate = joi.object({
    name : joi.string().min(2).required(),
    email : joi.string().email().required(),
    age : joi.string().min(18).max(88).required(),
    password : joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
    imageUrl : joi.string() 
})

module.exports = registerValidate