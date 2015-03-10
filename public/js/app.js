angular.module('sampleApp',
    ['ui.router', 'appRoutes',
        'MainCtrl', 'HomeService',
        'PostsCtrl',
        'NerdCtrl', 'NerdService',
        'GeekCtrl', 'GeekService'
    ]);