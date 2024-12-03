const express = require("express")
const router = express.Router()
const Comment = require("../controllers/comments_controller")

router.get("/", Comment.getAllComments)

router.post("/", Comment.createComment)

router.put("/:id", Comment.editCommentById)

router.delete("/:id", Comment.deleteComment)

module.exports = router