'use strict';
angular.module('myApp.call-list', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/call-list', {
                    templateUrl: 'js/modules/call-list/call-list.html',
                    controller: 'Call-listCtrl'
                });
            }])

        .controller('Call-listCtrl', ['authService', '$location', '$scope', '$http', '$cookies', '$httpParamSerializerJQLike', function (authService, $location, $scope, $http, $cookies, $httpParamSerializerJQLike) {

                /*Set input defaults*/
                $scope.sortBy = 'status';
                $scope.region = 'All';
                $scope.order = 'DESC';

                $scope.setCompanyId = function (id) {
                    $cookies.put('companyId', id);
                };

                $scope.changeOrder = function () {
                    if ($scope.order === 'ASC') {
                        $scope.order = 'DESC';
                    } else {
                        $scope.order = "ASC";
                    }
                    $scope.getCallList();
                };
                $scope.changeStatus = function (status, id) {
                    $http.put('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=company/' + id,
                            {status: status}
                    ).then(function () {
                        $scope.getCallList();
                    });
                };

                $scope.getRegions = function () {
                    $http.get('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=address'
                            ).then(function (response) {
                        $scope.regions = response.data;
                        $scope.regions.unshift({region: 'All'});
                    });
                };

                $scope.getCallList = function () {
                    $http.get('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=company', {
                        params: {region: $scope.region, sortby: $scope.sortBy, order: $scope.order, user_id: $cookies.get('user_id')}
                    }).then(function (response) {
                        $scope.results = response.data;
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

//          Get list on page load.
                $scope.getCallList();
                $scope.getRegions();
            }]);