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

    return obj;
}]);