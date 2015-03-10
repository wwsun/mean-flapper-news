angular.module('appRoutes', []).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'MainController as mainCtrl'
        })

        .state('posts', {
            url: '/posts/:id',
            templateUrl: 'views/posts.html',
            controller: 'PostsController as postsCtrl'
        })

        .state('nerds', {
            url: '/nerds',
            templateUrl: 'views/nerd.html',
            controller: 'NerdController as nerdCtrl'
        })

        .state('geeks', {
            url: '/geeks',
            templateUrl: 'views/geek.html',
            controller: 'GeekController as geekCtrl'
        })
});