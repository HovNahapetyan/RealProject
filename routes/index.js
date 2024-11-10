const express = require("express")
const router = express.Router()

const checkAuth = require('../middleware/checkAuth')
const PostsController = require("../controllers/PostsControllers")
const controllers = new PostsController()


router.post("/" ,[checkAuth],controllers.createPost)
router.get("/", controllers.getPosts)
router.get("/:id", controllers.getPostId)
router.delete("/:id",[checkAuth], controllers.deletePost)

module.exports = router