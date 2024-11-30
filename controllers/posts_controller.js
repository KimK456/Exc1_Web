const Posts = require("../models/posts_model")

const getAllPosts = async (req, res) => {
    try {
        const posts = await Posts.find();
        res.send(posts);
    } catch (error) {
        res.status(400).send(error.message);
    }
};

const getPostById = async (req, res) => {
    const postId = req.params.id;
  
    try {
      const post = await Posts.findById(postId);
      if (post != null) {
        res.send(post);
      } else {
        res.status(404).send("Post not found");
      }
    } catch (error) {
      res.status(400).send(error.message);
    }
};

const getPostBySenderId = async (req, res) => {
    const senderId = req.query.sender;
    console.log(senderId)
    try{
      if (!senderId) {
        return res.status(400).send("Sender ID is required");
      }
      const postsOfSender = await Posts.find({ owner: senderId });
      if (postsOfSender.length == 0) {
        return res.status(404).send("No posts found for the specified ID");
      } else {
        res.status(200).send(postsOfSender);
      }
    } catch (error) {
      res.status(400).send(error.message);
    }

}

const createPost = async (req, res) => {
    console.log(req.body)
    try {
        const post = await Posts.create(req.body)
        res.status(201).send(post)
    } catch (err) {
        res.status(400).send(err.message)
    }
}

const editPostById = async(req, res) => {
  const postId = req.params.id
  const newPostOwner = req.body.owner
  const newPostTitle = req.body.title
  const newPostContent = req.body.content
  try{
    const updatedPost = await Posts.findByIdAndUpdate(postId, { owner: newPostOwner, title: newPostTitle, content: newPostContent }, { new: true });
    res.status(201).send(updatedPost)
  } catch (err) {
    res.status(400).send(err.message)
  }
}

module.exports = {
    getAllPosts,
    getPostById,
    getPostBySenderId,
    createPost,
    editPostById
}