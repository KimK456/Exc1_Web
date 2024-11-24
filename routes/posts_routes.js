const express = require("express")
const router = express.Router()
const Post = require("../controllers/posts_controller")

router.post("/", Post.createPost)

module.exports = router