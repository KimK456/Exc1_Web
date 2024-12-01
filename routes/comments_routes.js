const express = require("express")
const router = express.Router()
const Comment = require("../controllers/comments_controller")

router.get("/", Comment.getAllComments)

router.post("/", Comment.createComment)

module.exports = router