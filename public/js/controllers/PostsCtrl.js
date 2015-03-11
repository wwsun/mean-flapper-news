angular.module('PostsCtrl', []).controller('PostsController', function($stateParams, posts, post) {
    var vm = this;

    // inject services/dependencies by hands
    this.$inject = ['$stateParams', 'posts', 'post'];

    // vm.post = posts.posts[$stateParams.id];
    vm.post = post;

    vm.newComment = {};

    vm.addComment = function() {
        if(vm.newComment.body === '') { return; }

        posts.addComment(post._id, vm.newComment).success(function(comment) {
            vm.post.comments.push(comment);
        });
        vm.newComment = {};
    };

    vm.incrementUpvotes = function(comment) {
        posts.upvoteComment(post, comment);
    }

});