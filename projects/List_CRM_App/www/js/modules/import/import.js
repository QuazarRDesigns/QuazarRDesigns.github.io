'use strict';

angular.module('myApp.import', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/import', {
                    templateUrl: 'js/modules/import/import.html',
                    controller: 'ImportCtrl'
                });
            }])

        .controller('ImportCtrl', ['authService', '$scope', '$cookies', 'Upload', '$timeout', function (authService, $scope, $cookies, Upload, $timeout) {

                $scope.uploadFiles = function (file) {
                    $scope.f = file;
                    if (file) {
                        file.upload = Upload.upload({
                            url: 'http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=upload/',
                            data: {file: file, user_id: $cookies.get("user_id")}
                        });

                        file.upload.then(function (response) {
                            $timeout(function () {
                                file.result = response.data;
                                console.log(file.result);
                            });
                        }, function (response) {
                            if (response.status > 0)
                                $scope.errorMsg = response.status + ': ' + response.data;
                            console.log($scope.errorMsg);
                        });
                    }
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