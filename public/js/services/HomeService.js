angular.module('HomeService', []).factory('posts', ['$http', function($http) {

    var obj = {
        posts:[]
    };

    obj.get = function(id) {
        return $http.get('/posts/' + id).then(function(res) {
            return res.data;
        })
    };

    obj.getAll = function() {
        return $http.get('/posts').success(function(data) {
            angular.copy(data, obj.posts);
        })
    };

    obj.create = function(post) {
        return $http.post('/posts', post).success(function(data) {
            obj.posts.push(data);
        })
    };

    obj.upvote = function(post) {
        return $http.put('/posts/' + post._id + '/upvote')
            .success(function(data) {
                post.upvotes += 1;
            });
    };

    obj.addComment = function(id, comment) {
        return $http.post('/posts/' + id + '/comments', comment);
    };

    obj.upvoteComment = function(post, comment) {
        return $http.post('/posts/' + post._id + '/comments/' + comment._id + '/upvote')
            .success(function(data) {
                comment.upvotes += 1;
            })
    }

    return obj;
}]);