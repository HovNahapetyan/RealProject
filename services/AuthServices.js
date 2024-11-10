const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

class AuthServices {
    constructor(models){
        this.models = models
    }
    async CreateUser(body){
        const document = await this.models.users(body)
        const user = await document.save()
        const token = jwt.sign({_id : user._id}, "101", {expiresIn : "2d"})
        const {password, __v ,...userData} = user._document
        return {...userData,token}
    }
    async loginUser(body){
        const user = await this.models.users.findOne({email : body.email})
        if(!user){
            return {"msg" : "invalid email or password"}
        }
        const passwordCompare = await bcrypt.compare(body.password, user.password)
        if(!passwordCompare){
            return {"msg" : "invalid email or password"}
        }
        
        const token = jwt.sign({_id : user._id}, "101", {expiresIn : "2d"})
        const {password, __v ,...userData} = user._doc
        return {...userData,token}
    }
    async authMe(id){
        const user = await this.models.users.findById(id)
        return user
    }
}

module.exports = AuthServices