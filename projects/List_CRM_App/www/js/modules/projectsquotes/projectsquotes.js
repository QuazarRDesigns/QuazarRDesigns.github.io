'use strict';

angular.module('myApp.projectsquotes', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/projectsquotes', {
                    templateUrl: 'js/modules/projectsquotes/projectsquotes.html',
                    controller: 'ProjectsquotesCtrl'
                });
            }])

        .controller('ProjectsquotesCtrl', ['authService', '$filter', '$route', '$httpParamSerializerJQLike', '$scope', '$cookies', '$http', function (authService, $filter, $route, $httpParamSerializerJQLike, $scope, $cookies, $http) {

                var company_id = $cookies.get('companyId');

                $scope.getDetails = function () {
                    $http.get('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=company/' + company_id, {
                    }).then(function (response) {
                        $scope.details = response.data[0];
                    });
                };

                $scope.editcreate = function (projectsquotes_id) {
                    if (projectsquotes_id) {
                        $scope.editProjectsquotes(projectsquotes_id);
                    } else {
                        $scope.createProjectsquotes();
                    }
                };

                $scope.getProjectsquotes = function (projectsquotes_id) {
                    $http.get('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=projectsquotes/' + company_id, {
                        params: {projectsquotes_id: projectsquotes_id}
                    }).then(function (response) {
                        if (projectsquotes_id) {
                            $scope.inputbutton = 'Edit';
                            $scope.inputprojectsquotes = response.data;
                            $scope.inputprojectsquotes[0].date = new Date($scope.inputprojectsquotes[0].date);
                        } else {
                            $scope.projectsquotes = response.data;
                        }
                    });
                };

                $scope.editProjectsquotes = function (projectsquotes_id) {
                    if (!projectsquotes_id) {
                        $scope.inputprojectsquotes = [{}];
                        $scope.inputbutton = 'New';
                    } else {
                        var edittitle = $scope.inputprojectsquotes[0].title;
                        var editcontent = $scope.inputprojectsquotes[0].content;
                        var editdate = $filter('date')($scope.inputprojectsquotes[0].date, 'yyyy-MM-dd');
                        $http.put('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=projectsquotes/' + projectsquotes_id,
                                {title: edittitle, content: editcontent, date: editdate});
                        $route.reload();
                    }
                };

                $scope.createProjectsquotes = function () {
                    var newtitle = $scope.inputprojectsquotes[0].title;
                    var newcontent = $scope.inputprojectsquotes[0].content;
                    var newdate = $filter('date')($scope.inputprojectsquotes[0].date, 'yyyy-MM-dd');
                    $http({
                        method: 'POST',
                        url: 'http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=projectsquotes/' + company_id,
                        data: $httpParamSerializerJQLike({title: newtitle, content: newcontent, date: newdate}),
                        headers: {'Content-Type': 'application/x-www-form-urlencoded'}
                    });
                    $route.reload();
                };

                $scope.deleteProjectsquotes = function (projectsquotes_id) {
                    console.log(projectsquotes_id);
                    $http.delete('http://matthew.rayner.yoobee.net.nz/WE06/WE06_API/index.php?request=projectsquotes/' + projectsquotes_id);
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
                $scope.getProjectsquotes();
            }]);