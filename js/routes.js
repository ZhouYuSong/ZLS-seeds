/**
 * Defines the main routes in the application.
 * The routes you see here will be anchors '#/' unless specifically configured otherwise.
 */
define(['./app'], function (app) {
    'use strict';
    return app.config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/login');
        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'partials/login.html',
                controller: 'loginCtrl'
            })
            .state('show_ground', {
                url: '/show_ground',
                views: {
                    '': {
                        templateUrl: 'partials/show_ground.html',
                        controller: 'showGroundCtrl'
                    },
                    'top@show_ground': {
                        templateUrl: 'partials/top.html'
                    },
                    'down@show_ground': {
                        templateUrl: 'partials/down.html'
                    }
                }
            })
            .state('show_dynamic', {
                url: '/show_dynamic',
                views: {
                    '': {
                        templateUrl: 'partials/show_dynamic.html',
                        controller: 'showDynamicCtrl'
                    },
                    'top@show_dynamic': {
                        templateUrl: 'partials/top.html'
                    },
                    'down@show_dynamic': {
                        templateUrl: 'partials/down.html'
                    }
                }
            })

        ;
    })
});