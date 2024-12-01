const Comments = require("../models/comments_model")
const Posts = require("../models/posts_model")

const getAllComments = async (req, res) => {
    try {
        const comments = await Comments.find();
        res.send(comments);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const createComment = async (req, res) => {
    const postId = req.body.postId
    try {
        const post = await Posts.findById(postId)
        if(post) {
            const comment = await Comments.create(req.body)
            res.status(201).send(comment)
            console.log("Created Successfully")
        } else {
            return res.status(404).send("Post Not Found")
        }       
    } catch (err) {
        res.status(400).send(err.message)
    }
}

module.exports = {
    getAllComments,
    createComment
}