
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({

    author: String,
    title: String,
    body: String,
    date: Date,
    likes: Number,
    comments: Array
});

const Post = mongoose.model("Post", postSchema);

module.exports = Post;