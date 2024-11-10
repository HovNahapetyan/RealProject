const postValidate = require("../validate/PostValidate.js")
const Errors = require("../Errors/Errors.js")

class PostsControllers {
    constructor(models){
        this.models = models
    }
    async createPost(req,res){
        try {
            const id = req.app.locals
            const body = await postValidate.validateasync(req.body)
            const post = await req.app.locals.services.posts.createPost(body, id)
            res.json(post)
        } catch (error) {
            return Errors.createError(res)
        }
    }
    async getPosts(req,res){
        try {
            const {tags} = req.query
            console.log(tags)
            if(tags){
                const posts = await req.app.locals.services.posts.getPosts(tags)
                res.json(posts)
            }else{
                const posts = await req.app.locals.services.posts.getPosts()
                res.json(posts)
            }
        } catch (error) {
            return Errors.getError(res)
        }
    }
    async getPostId(req,res){
        try {
            const post = await req.app.locals.services.posts.getPostId(req.params.tokenId)
            res.json(post)
        } catch (error) {
            return Errors.getPostIdError(res)
        }
    }

    async deletePost(req,res){
        try {
            const id = req.params.id
            const delId = await req.app.locals.services.posts.deletePost(id)
            res.json(delId)
        } catch (error) {
            return Errors.deletePostError(res)
        }
    }
}

module.exports = PostsControllers