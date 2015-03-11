angular.module('MainCtrl', []).controller('MainController', function(posts) {
    var vm = this;

    // inject services by hands
    vm.$inject = ['posts'];

	vm.tagline = 'Flapper News Home';
    vm.posts = posts.posts;
    vm.new = {};

    vm.addPost = function() {
        if(!vm.new.title || vm.new.title === '') { return; }

        posts.create(vm.new);
        vm.new = {};
    };

    vm.incrementUpvotes = function(post) {
        posts.upvote(post);
    }
});