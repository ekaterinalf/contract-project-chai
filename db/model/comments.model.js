const mongoose = require('mongoose');

const commentsSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  postTea: { type: mongoose.Schema.Types.ObjectId, ref: "Tea" },
  region: String,
  content: String,
});

const Comment = mongoose.model('Comments', commentsSchema);
module.exports = Comment;
