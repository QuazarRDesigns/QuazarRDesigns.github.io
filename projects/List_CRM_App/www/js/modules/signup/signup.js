'use strict';

angular.module('myApp.signup', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/signup', {
                    templateUrl: 'js/modules/signup/signup.html',
                    controller: 'SignupCtrl'
                });
            }])

        .controller('SignupCtrl', ['authService', '$scope', '$location', '$http', '$cookies', '$httpParamSerializerJQLike', function (authService, $scope, $location, $http, $cookies, $httpParamSerializerJQLike) {

                $scope.signup = function () {
                    authService.signup($scope.username, $scope.password).then(function (response) {
                        authService.login(response.data['username'], response.data['password']).then(function (response) {
                            if (angular.isObject(response.data)) {
                                $cookies.put('user_id', response.data['id']);
                                $cookies.put('is_logged_in', true);
                                $location.path('/call-list');
                            } else {
                                $scope.error = response.data;
                            }
                        });
                    });
                };

                if ($cookies.get('is_logged_in')) {
                    $location.path('/call-list');
                }
            }]);