const express = require("express")
const router = express.Router()
const Comment = require("../controllers/comments_controller")

router.get("/", Comment.getAllComments)

router.get("/:id", Comment.getCommentsSpecificPost)

router.post("/", Comment.createComment)

module.exports = router