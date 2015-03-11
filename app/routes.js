var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = function(app) {

	// server routes ===========================================================
	// handle things like api calls
	// authentication routes

	// frontend routes =========================================================
	// route to handle all angular requests
	app.get('/', function(req, res) {
		res.sendfile('./public/index.html');
	});


    app.route('/posts')

        .get(function(req, res, next) {
            Post.find(function(err, posts) {
                if(err) return next(err);
                res.json(posts);
            })
        })

        .post(function(req, res, next) {
            var post = new Post(req.body);
            post.save(function(err, post) {
                if(err) return next(err);
                res.json(next);
            })
        });
};