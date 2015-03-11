var mongoose = require('mongoose');

var CommentSchema = mongoose.Schema({
    body: String,
    author: String,
    upvotes: {type:Number, default:0},
    posts: {type: mongoose.Schema.Types.ObjectId, ref:'Post'}
});

CommentSchema.methods.upvote = function(cb) {
    this.upvotes += 1;
    this.save(cb);
};

module.exports = mongoose.model('Comment', CommentSchema);