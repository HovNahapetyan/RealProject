const joi = require('joi')

const postValidate = joi.object({
    title : joi.string().required(),
    text : joi.string().required(),
    tags : joi.string()
})

module.exports = postValidate