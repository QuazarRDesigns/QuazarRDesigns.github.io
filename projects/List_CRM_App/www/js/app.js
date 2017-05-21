'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
    'ngRoute',
    'ngResource',
    'ngCookies',
    'ngFileUpload',
    'myApp.signup',
    'myApp.login',
    'myApp.notes',
    'myApp.projectsquotes',
    'myApp.details',
    'myApp.import',
    'myApp.export',
    'myApp.call-list',
    'myApp.version'
]).
        config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
                $locationProvider.hashPrefix('!/modules');

                $routeProvider.otherwise({redirectTo: '/login'});
            }]).
        factory('authService', function ($cookies, $location, $http, $httpParamSerializerJQLike) {
            var auth = {};
            auth = {
                check: function () {
                    if (!$cookies.get('is_logged_in')) {
                        $location.path('/login');
                    }
                },
                signup: function (username, password) {
                    return $http({
                        method: 'POST',
                        url: 'http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=user',
                        data: $httpParamSerializerJQLike({setpassword: password, setusername: username}),
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    });
                },
                login: function (username, password) {
                    return $http({
                        method: 'POST',
                        url: 'http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=user',
                        data: $httpParamSerializerJQLike({password: password, username: username}),
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    });
                },
                logout: function () {
                    $cookies.remove('is_logged_in');
                    $cookies.remove('user_id');
                    $location.path('/login');
                }
            };
            return auth;
        });
