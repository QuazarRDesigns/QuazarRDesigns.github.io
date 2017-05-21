'use strict';

angular.module('myApp.export', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/export', {
                    templateUrl: 'js/modules/export/export.html',
                    controller: 'ExportCtrl'
                });
            }])

        .controller('ExportCtrl', ['authService', '$cookies', '$scope', '$http', function (authService, $cookies, $scope, $http) {

                /*Set input defaults*/
                $scope.what = 'calllist';
                $scope.status = 'not_contacted';
                $scope.to = 'csv';

                $scope.exportCsv = function () {
                    if ($scope.what !== 'calllist') {
                        $scope.status = null;
                    }
                    $http.get('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=export', {
                        params: {user_id: $cookies.get('user_id'), what: $scope.what, status: $scope.status, to: $scope.to}
                    }).then(function (response) {
                        if ($scope.to === 'csv') {
                            var hiddenElement = document.createElement('a');
                            hiddenElement.href = 'data:attachment/csv,' + encodeURI(response.data);
                            hiddenElement.target = '_blank';
                            hiddenElement.download = $scope.what + $scope.status + '.csv';
                            hiddenElement.click();
                        }
                    }, function (response) {
                        $scope.errorMsg = response.data;
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

            }]);