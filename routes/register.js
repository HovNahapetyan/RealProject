const express = require("express")
const router = express.Router()

const checkAuth = require('../middleware/checkAuth')
const AuthControllers = require("../controllers/AuthControllers")
const controllers = new AuthControllers()

router.post("/register", controllers.createUser)
router.post("/login", controllers.loginUser)
router.get("/me",[checkAuth], controllers.AuthMe)

module.exports = router