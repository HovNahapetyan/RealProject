const registerValidate = require('../validate/registerValidate')
const loginValidate = require('../validate/loginValidate')
const Errors = require('../Errors/Errors')

class AuthControllers {
    async createUser(req,res){
        try {
            const body = await registerValidate.validateAsync(req.body)
            const user = await req.app.locals.services.authoriztaion.createUser(body)
            res.json(user)
        } catch (error) {
            return Errors.createError(res)
        }
    }
    async loginUser(req,res){
        try {
            const body = await loginValidate.validateAsync(req.body)
            const user = await req.app.locals.services.authoriztaion.loginUser(body)
            res.json(user)
        } catch (error) {
            return Errors.loginError(res)
        }
    }
    async AuthMe(req,res){
        try {
            const user = await req.app.locals.services.authoriztaion.authMe(req.app.locals.id)
            res.json(user)
        } catch (error) {
            return Errors.authMeError(res)
        }
    }
}

module.exports = AuthControllers