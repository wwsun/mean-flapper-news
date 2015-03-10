angular.module('PostsCtrl', []).controller('PostsController', function() {
    var vm = this;

    // inject by hands
    this.$inject = ['$stateParams', 'posts'];

    vm.tagline = 'Nothing beats a pocket protector!';

});