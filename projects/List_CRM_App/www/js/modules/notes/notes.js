'use strict';

angular.module('myApp.notes', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/notes', {
                    templateUrl: 'js/modules/notes/notes.html',
                    controller: 'NotesCtrl'
                });
            }])

        .controller('NotesCtrl', ['authService', '$scope', '$cookies', '$route', '$filter', '$http', '$httpParamSerializerJQLike', function (authService, $scope, $cookies, $route, $filter, $http, $httpParamSerializerJQLike) {

                var company_id = $cookies.get('companyId');

                $scope.getDetails = function () {
                    $http.get('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=company/' + company_id, {
                    }).then(function (response) {
                        $scope.details = response.data[0];
                    });
                };

                $scope.editcreate = function (notes_id) {
                    if (notes_id) {
                        $scope.editNotes(notes_id);
                    } else {
                        $scope.createNotes();
                    }
                };

                $scope.getNotes = function (notes_id) {
                    $http.get('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=notes/' + company_id, {
                        params: {notes_id: notes_id}
                    }).then(function (response) {
                        if (notes_id) {
                            $scope.inputbutton = 'Edit';
                            $scope.inputnotes = response.data;
                            $scope.inputnotes[0].date = new Date($scope.inputnotes[0].date);
                        } else {
                            $scope.notes = response.data;
                        }
                    });
                };

                $scope.editNotes = function (notes_id) {
                    if (!notes_id) {
                        $scope.inputnotes = [{}];
                        $scope.inputbutton = 'New';
                    } else {
                        var edittitle = $scope.inputnotes[0].title;
                        var editcontent = $scope.inputnotes[0].content;
                        var editdate = $filter('date')($scope.inputnotes[0].date, 'yyyy-MM-dd');
                        $http.put('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=notes/' + notes_id,
                                {title: edittitle, content: editcontent, date: editdate});
                        $route.reload();
                    }
                };

                $scope.createNotes = function () {
                    var newtitle = $scope.inputnotes[0].title;
                    var newcontent = $scope.inputnotes[0].content;
                    var newdate = $filter('date')($scope.inputnotes[0].date, 'yyyy-MM-dd');
                    $http({
                        method: 'POST',
                        url: 'http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=notes/' + company_id,
                        data: $httpParamSerializerJQLike({title: newtitle, content: newcontent, date: newdate}),
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    });
                    $route.reload();
                };

                $scope.deleteNotes = function (notes_id) {
                    $http.delete('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=notes/' + notes_id);
                    $route.reload();
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
                $scope.getNotes();
            }]);