angular.module('PostsCtrl', []).controller('PostsController', function($stateParams, posts) {
    var vm = this;

    // inject services/dependencies by hands
    this.$inject = ['$stateParams', 'posts'];

    vm.post = posts.posts[$stateParams.id];

    vm.newComment = {};

    vm.addComment = function() {
        if(vm.newComment.body === '') { return; }
        vm.post.comments.push(vm.newComment);
        vm.newComment = {};
    }

});