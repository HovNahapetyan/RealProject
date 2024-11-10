class Errors {
    //authorization
    static createError(res, message = "the authorization code is invalid or has expired!!!") {
        res.status(400).json(message)
    }
    static loginError(res, message = "invalid data!!!") {
        res.status(404).json(message)
    }
    static loginEmailPassError(res, message = "invalid email or password!!!") {
        res.status(404).json(message)
    }
    static authMeError(res, message = "You are not Authorizatione!!!") {
        res.status(401).json(message)
    }

    //posts

    static createPostError(res,message = 'Bad Request!!!'){
        res.status(400).json(message)
    }
    static getPostsError(res,message = 'Posts Empty!!!'){
        res.status(404).json(message)
    }
    static getPostIdError(res,message = 'Post not found'){
        res.status(404).json(message)
    }
    static deletePostError(res,message = 'Post not found and delete!!!'){
        res.status(404).json(message)
    }
}

module.exports = Errors