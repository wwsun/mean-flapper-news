/**
 * Created by Weiwei on 2015/3/11.
 */

var mongoose = require('mongoose');

var PostSchema = mongoose.Schema({
    title: String,
    link: String,
    upvotes: {type: Number, default:0},
    comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Post', PostSchema);