const express = require('express');
const mongoose = require('mongoose')
const app = express();
const port = 3000;

const registerRouter = require("./routes/register.js")
const indexRouter = require("./routes/index.js")
const AuthServices = require('./services/AuthServices.js')
const PostsServices = require('./services/PostsServices.js')
const models = require('./models/index.js')

mongoose.connect("mongodb://localhost:27017/Data")
    .then(() => console.log("DB connect"))
    .catch(() => console.log("DB Error"))

app.use(express.json())


app.locals.models = {
    users: models.users,
    posts: models.posts
}


app.locals.services = {
    authoriztaion: new AuthServices(app.locals.models),
    posts: new PostsServices(app.locals.models)
}

app.use("/auth", registerRouter)
app.use("/posts", indexRouter)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})