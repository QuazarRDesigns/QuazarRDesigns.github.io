/* global Storage */

'use strict';

angular.module('myApp.settings', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
                $routeProvider.when('/settings', {
                    templateUrl: 'settings/settings.html',
                    controller: 'SettingsCtrl'
                });
            }])

        .controller('SettingsCtrl', ['$scope', '$rootScope', function ($scope, $rootScope) {

                $scope.carbUnits = [{name: 'BU', value: 12}, {name: 'CU', value: 15}, {name: 'g', value: 1}];
                
                $scope.carbUnit = $scope.carbUnits[2];

                $scope.BGUnits = [{name: 'mmol/l', value: 1}, {name: 'mg/dl', value: 18}];
                
                $scope.BGUnit = $scope.BGUnits[0];

                $scope.insulin = 1;

                $scope.carb = 10;
                
                $scope.target = 6.5;
                
                $scope.correctionNum = 100;
                
                $scope.correctionFactor = 2.0;
                
                if (typeof (Storage) !== "undefined") {
                    if (localStorage.insulin) {
                        $scope.insulin = Number(localStorage.insulin);
                    }
                    if (localStorage.carb) {
                        $scope.carb = Number(localStorage.carb);
                    }
                    if (localStorage.target) {
                        $scope.target = Number(localStorage.target);
                    }
                    if (localStorage.correctionFactor) {
                        $scope.correctionFactor = Number(localStorage.correctionFactor);
                    }
                    if (localStorage.BGUnitName) {
                        for (var i = 0; i < $scope.BGUnits.length; i++) {
                            if (localStorage.BGUnitName === $scope.BGUnits[i].name){
                                $scope.BGUnit = $scope.BGUnits[i];
                            }
                        }
                    }
                    if (localStorage.carbUnitName) {
                        for (var j = 0; j < $scope.carbUnits.length; j++) {
                            if (localStorage.carbUnitName === $scope.carbUnits[j].name){
                                $scope.carbUnit = $scope.carbUnits[j];
                            }
                        }
                    }
                }

                $scope.submit = function () {
                    if (typeof (Storage) !== "undefined") {
                        if ($scope.insulin > 0 && $scope.carb > 0) {
                            $scope.carbRatio = {value: $scope.carb / $scope.insulin, view: $scope.insulin + ":" + $scope.carb, insulin: $scope.insulin, carb: $scope.carb};
                            localStorage.insulin = $scope.carbRatio.insulin;
                            localStorage.carb = $scope.carbRatio.carb;
                        }
                        if ($scope.carbUnit !== "undefined") {
                            localStorage.carbUnitName = $scope.carbUnit.name;
                            localStorage.carbUnitValue = $scope.carbUnit.value;
                        }
                        if ($scope.BGUnit !== "undefined") {
                            localStorage.BGUnitName = $scope.BGUnit.name;
                            localStorage.BGUnitValue = $scope.BGUnit.value;
                        }
                        if ($scope.target !== "undefined" && $scope.target > 0) {
                            localStorage.target = $scope.target;
                        }
                        if ($scope.correctionFactor !== "undefined" && $scope.correctionFactor > 0) {
                            localStorage.correctionFactor = $scope.correctionFactor;
                        }
                    } else {
                        if ($scope.insulin > 0 && $scope.carb > 0) {
                            $rootScope.carbRatio = {value: $scope.carb / $scope.insulin, view: $scope.insulin + ":" + $scope.carb, insulin: $scope.insulin, carb: $scope.carb};
                        }
                        if ($scope.carbUnit !== "undefined") {
                            $rootScope.carbUnit = $scope.carbUnit;
                        }
                        if ($scope.BGUnit !== "undefined") {
                            $rootScope.BGUnit = $scope.BGUnit;
                        }
                        if ($scope.target !== "undefined" && $scope.target > 0) {
                            $rootScope.target = $scope.target;
                        }
                        if ($scope.correctionFactor !== "undefined" && $scope.correctionFactor > 0) {
                            $rootScope.correctionFactor = $scope.correctionFactor;
                        }
                    }
                };

                $scope.convertTarget = function () {
                    if ($scope.BGUnit.value === 18) {
                        $scope.target = $scope.target * 18;
                        $scope.correctionNum = $scope.correctionNum * 18;
                    } else {
                        if ($scope.target !== 6) {
                            $scope.target = $scope.target / 18;
                            $scope.correctionNum = $scope.correctionNum / 18;
                        }
                    }
                    $scope.target = Math.round($scope.target * 10) / 10;
                };

                $scope.convertCarbRatio = function () {
                    if (!$scope.lastCarbUnit) {
                        if (typeof (Storage) !== "undefined") {
                            if (localStorage.carbUnitName && localStorage.carbUnitValue) {
                                $scope.lastCarbUnit = {name: localStorage.carbUnitName, value: Number(localStorage.carbUnitValue)};
                            } else {
                                $scope.lastCarbUnit = {name: 'g', value: 1};
                            }
                        }
                    }
                    if ($scope.lastCarbUnit.value === 1) {
                        if ($scope.carbUnit.value === 12) {
                            $scope.carb = $scope.carb * 12;
                        } else {
                            $scope.carb = $scope.carb * 15;
                        }
                    } else if ($scope.lastCarbUnit.value === 12) {
                        if ($scope.carbUnit.value === 15) {
                            $scope.carb = ($scope.carb / 12) * 15;
                        } else {
                            $scope.carb = $scope.carb / 12;
                        }
                    } else {
                        if ($scope.carbUnit.value === 12) {
                            $scope.carb = ($scope.carb / 15) * 12;
                        } else {
                            $scope.carb = $scope.carb / 15;
                        }
                    }
                    $scope.lastCarbUnit = $scope.carbUnit;
                };

                $scope.toggleNav = function () {
                    $('.nav').filter(':not(:animated)').toggle(function () {
                        if ($('.nav').css('display') !== 'none')
                        {
                            $('.yellow').css('fill', '#e33663');
                        } else {
                            $('.yellow').css('fill', '');
                        }
                    });
                };
            }]);