angular.module('appRoutes', []).config(function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        .state('nerds', {
            url: '/nerds',
            templateUrl: 'views/nerd.html',
            controller: 'NerdController'
        })

        .state('geeks', {
            url: '/geeks',
            templateUrl: 'views/geek.html',
            controller: 'GeekController'
        })
});


//    ['$stateProvider', '$urlRouterProvider', function($routeProvider, $locationProvider) {
//
//	$routeProvider
//
//		// home page
//		.when('/', {
//			templateUrl: 'views/home.html',
//			controller: 'MainController'
//		})
//
//		.when('/nerds', {
//			templateUrl: 'views/nerd.html',
//			controller: 'NerdController'
//		})
//
//		.when('/geeks', {
//			templateUrl: 'views/geek.html',
//			controller: 'GeekController'
//		});
//
//	$locationProvider.html5Mode(true);
//
//}]);