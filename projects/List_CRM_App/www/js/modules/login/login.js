'use strict';

angular.module('myApp.login', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/login', {
                    templateUrl: 'js/modules/login/login.html',
                    controller: 'LoginCtrl'
                });
            }])

        .controller('LoginCtrl', ['authService', '$scope', '$location', '$http', '$cookies', '$httpParamSerializerJQLike', function (authService, $scope, $location, $http, $cookies, $httpParamSerializerJQLike) {

                $scope.login = function () {
                    authService.login($scope.username, $scope.password).then(function (response) {
                        if (angular.isObject(response.data)) {
                            $cookies.put('user_id', response.data['id']);
                            $cookies.put('is_logged_in', true);
                            $location.path('/call-list');
                        } else {
                            $scope.error = response.data;
                        }
                    });
                };

                $scope.logout = function () {
                    authService.logout;
                };

                if ($cookies.get('is_logged_in')) {
                    $location.path('/call-list');
                }
            }]);