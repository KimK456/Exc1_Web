const express = require("express")
const router = express.Router()
const Post = require("../controllers/posts_controller")

router.get("/", Post.getAllPosts);

router.get("/post/:id", Post.getPostById);

router.get("/post", Post.getPostBySenderId);

router.post("/", Post.createPost);

router.put("/post/:id", Post.editPostById);

module.exports = router