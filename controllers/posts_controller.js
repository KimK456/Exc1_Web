const Posts = require("../models/posts_model")

const getAllPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
        res.send(posts);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const createPost = async (req, res) => {
    console.log(req.body)
    try {
        const post = await Posts.create(req.body)
        res.status(201).send(post)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports = {
    getAllPosts,
    createPost
}