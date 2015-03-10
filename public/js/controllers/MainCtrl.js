angular.module('MainCtrl', []).controller('MainController', function() {

    var vm = this;
	vm.tagline = 'Flapper News Home';

    vm.posts = [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 2},
        {title: 'post 3', upvotes: 15},
        {title: 'post 4', upvotes: 9},
        {title: 'post 5', upvotes: 4}
    ];

    vm.new = {};

    vm.addPost = function() {
        if(!vm.new.title || vm.new.title === '') { return; }

        vm.new.upvotes = 0;
        vm.posts.push(vm.new);
        vm.new = {};
    };

    vm.incrementUpvotes = function(post) {
        post.upvotes += 1;
    }
});