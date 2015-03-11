angular.module('HomeService', []).factory('posts', ['$http', function($http) {

    var obj = {
        posts:[]
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

    return obj;
}]);