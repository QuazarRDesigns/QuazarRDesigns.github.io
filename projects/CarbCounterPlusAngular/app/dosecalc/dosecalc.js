'use strict';

angular.module('myApp.dosecalc', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/dosecalc', {
                    templateUrl: 'dosecalc/dosecalc.html',
                    controller: 'DosecalcCtrl'
                });
            }])

        .controller('DosecalcCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

//                ***Default Values***

                $scope.glucose = 0;

                $scope.carbs = 0;

                $scope.ratioResultOneDP = 0;

                $scope.ratioResult = 0;

                $scope.correctionResultOneDP = 0;

                $scope.correctionResult = 0;

                $scope.resultTotalOneDP = 0;

                $scope.resultTotal = 0;

//                ***Use these default values***

                $scope.carbRatio = {value: (10 / 1), view: 1 + ":" + 10, insulin: 1, carb: 10};

                $scope.carbUnit = {name: 'g', value: 1};

                $scope.BGUnit = {name: 'mmol/l', value: 1};

                $scope.target = 6.5;

                $scope.correctionFactor = 2;

//                ***Except for If local storage exists***

                if (typeof (Storage) !== "undefined") {
                    if (localStorage.insulin && localStorage.carb) {
                        $scope.insulin = Number(localStorage.insulin);
                        $scope.carb = Number(localStorage.carb);
                        $scope.carbRatio = {value: ($scope.carb / $scope.insulin), view: $scope.insulin + ":" + $scope.carb, insulin: $scope.insulin, carb: $scope.carb};
                    }
                    if (localStorage.carbUnitName) {
                        $scope.carbUnit.name = localStorage.carbUnitName;
                    }
                    if (localStorage.carbUnitValue) {
                        $scope.carbUnit.value = Number(localStorage.carbUnitValue);
                    }
                    if (localStorage.BGUnitName) {
                        $scope.BGUnit.name = localStorage.BGUnitName;
                    }
                    if (localStorage.BGUnitValue) {
                        $scope.BGUnit.value = Number(localStorage.BGUnitValue);
                    }
                    if (localStorage.target) {
                        $scope.target = Number(localStorage.target);
                    }
                    if (localStorage.correctionFactor) {
                        $scope.correctionFactor = Number(localStorage.correctionFactor);
                    }
                }

//                ***Else if $rootScope has the values***

                else if ($rootScope.carbRatio && $rootScope.carbUnit && $rootScope.BGUnit && $rootScope.target) {
                    $scope.carbRatio = $rootScope.carbRatio;
                    $scope.carbUnit = $rootScope.carbUnit;
                    $scope.BGUnit = $rootScope.BGUnit;
                    $scope.target = $rootScope.target;
                    $scope.correctionFactor = $rootScope.correctionFactor;
                }

//                ***Function to Check if any of the inputs are less than 0 or empty and change the results to 0 if true***
                function noNegative() {
                    if ($scope.correctionResultOneDP < 0) {
                        $scope.correctionResultOneDP = 0;
                        $scope.correctionResult = 0;
                    }
                    if ($scope.ratioResultOneDP < 0) {
                        $scope.ratioResultOneDP = 0;
                        $scope.ratioResult = 0;
                    }
                }
                
                function keepInRange() {
                    if ($scope.glucose > 50 * $scope.BGUnit.value) {
                        $scope.glucose = 50 * $scope.BGUnit.value;
                    }
                    if ($scope.carbs > 1000 * $scope.carbUnit.value) {
                        $scope.carbs = 1000 * $scope.carbUnit.value;
                    }
                }

//               ***When the inputs change, change the results***
                $scope.getResult = function () {
                    if (Number.isNaN($scope.carbs || $scope.glucose)) {
                        $scope.glucose = 0;
                        $scope.carbs = 0;
                    }
                    keepInRange();
                    var carbsum = ($scope.carbs / $scope.carbRatio.value);
                    var correctionsum = ($scope.glucose - $scope.target) / $scope.correctionFactor;
//                    ***Calculate Carb Insulin***
                    $scope.ratioResultOneDP = Math.round(carbsum * 10) / 10;
                    $scope.ratioResult = Math.round($scope.ratioResultOneDP);

//                    ***Calculate Correctional Insulin***
                    $scope.correctionResultOneDP = Math.round(correctionsum * 10) / 10;
                    $scope.correctionResult = Math.round($scope.correctionResultOneDP);
                    
                    noNegative();
                    
                    if (Number.isNaN($scope.correctionResultOneDP)) {
                        $scope.correctionResultOneDP = 0;
                        $scope.correctionResult = 0;
                    }
                    if (Number.isNaN($scope.ratioResultOneDP)) {
                        $scope.ratioResultOneDP = 0;
                        $scope.ratioResult = 0;
                    }
                    
                    var total = $scope.correctionResultOneDP + $scope.ratioResultOneDP;

//                    ***Calculate Total Insulin***
                    $scope.resultTotalOneDP = Math.round(total * 10) / 10;
                    $scope.resultTotal = Math.round($scope.resultTotalOneDP);
                };

//                ***Function for toggling the nav***

                $scope.toggleNav = function () {

//                    ***When the nav is not being animated***

                    $('.nav').filter(':not(:animated)').toggle(function () {

//                        ***If nav is being displayed***

                        if ($('.nav').css('display') !== 'none')
                        {
                            $('.yellow').css('fill', '#e33663');
                        } else {
                            $('.yellow').css('fill', '');
                        }
                    });
                };

            }]);