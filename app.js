const express = require("express")
const app = express();
const dotenv = require("dotenv").config();
const port = process.env.PORT

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', error=>{console.error.bind(console, 'connection error:')})
db.once('open', ()=>console.log('connected to mongo'))

const bodyParser = require("body-parser")
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

const posts_routes = require("./routes/posts_routes")
app.use("/", posts_routes)

app.listen(port, () => {
    console.log(`listening on http://loacalhost:${port}`)
});