angular.module('PostsCtrl', []).controller('PostsController', function($stateParams, posts) {
    var vm = this;

    // inject services/dependencies by hands
    this.$inject = ['$stateParams', 'posts'];

    vm.post = posts.posts[$stateParams.id];

});