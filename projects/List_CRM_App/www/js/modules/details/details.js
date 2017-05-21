'use strict';

angular.module('myApp.details', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/details', {
                    templateUrl: 'js/modules/details/details.html',
                    controller: 'DetailsCtrl'
                });
            }])

        .controller('DetailsCtrl', ['authService', '$scope', '$cookies', '$http', function (authService, $scope, $cookies, $http) {
                var company_id = $cookies.get('companyId');

                $scope.getDetails = function () {
                    $http.get('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=company/' + company_id)
                            .then(function (response) {
                                $scope.details = response.data[0];
                            });
                };

                $scope.getContacts = function () {
                    $http.get('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=employees/' + company_id)
                            .then(function (response) {
                                $scope.contacts = response.data;
                            });
                };

                $scope.getNotes = function () {
                    $http.get('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=notes/' + company_id, {
                    }).then(function (response) {
                        $scope.notes = response.data;
                    });
                };

                $scope.getProjectsquotes = function () {
                    $http.get('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=projectsquotes/' + company_id, {
                    }).then(function (response) {
                        $scope.projectsquotes = response.data;
                    });
                };

                $scope.logout = function () {
                    authService.logout();
                };

                $scope.toggleSidebar = function () {
                    if (window.getComputedStyle(document.getElementById("sidebar")).getPropertyValue("left") === '0px') {
                        document.getElementById("sidebar").style.left = '-103%';
                    } else {
                        document.getElementById("sidebar").style.left = 0;
                    }
                };

//          Check if the user is logged in and redirect to login if not.
                authService.check();

                $scope.getDetails();
                $scope.getContacts();
                $scope.getNotes();
                $scope.getProjectsquotes();
            }]);