const express = require("express")
const router = express.Router()
const Comment = require("../controllers/comments_controller")

router.post("/", Comment.createComment)

module.exports = router