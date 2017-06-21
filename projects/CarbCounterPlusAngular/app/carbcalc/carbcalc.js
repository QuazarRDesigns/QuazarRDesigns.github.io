'use strict';

angular.module('myApp.carbcalc', ['ngRoute'])

        .config(['$routeProvider', function ($routeProvider) {
            $routeProvider.when('/carbcalc', {
              templateUrl: 'carbcalc/carbcalc.html',
              controller: 'CarbcalcCtrl'
            });
          }])

        .controller('CarbcalcCtrl', ['$scope', '$rootScope', '$location', function ($scope, $rootScope, $location) {

//                ***Use these default values***

            $scope.carbUnit = {name: 'g', value: 1};

//                ***Except for If local storage exists***

            if (typeof (Storage) !== "undefined") {
              if (localStorage.carbUnitName) {
                $scope.carbUnit.name = localStorage.carbUnitName;
              }
              if (localStorage.carbUnitValue) {
                $scope.carbUnit.value = Number(localStorage.carbUnitValue);
              }
            }

//                ***Else if $rootScope has the values***

            else if ($rootScope.carbUnit) {
              $scope.carbUnit = $rootScope.carbUnit;
            }

            $scope.categories = [
              {name: 'Bread', carbs: [
                  {name: 'Multi-Grain Bread', carb: 43, amounts: [{key: '1 regular slice', value: 0.26}, {key: '1 large slice', value: 0.41}, {key: ' 100g', value: 1}]},
                  {name: 'White Bread', carb: 49, amounts: [{key: "1 thin slice (crust not eaten)", value: 0.09}, {key: '1 slice (crust not eaten)', value: 0.12}, {key: '1 very thin slice', value: 0.15}, {key: '1 thin slice', value: 0.20}, {key: '1 slice', value: 0.25}, {key: '1 large slice', value: 0.30}, {key: ' 100g', value: 1}]}
                ]},
              {name: 'Breakfast Cereals', carbs: [
                  {name: 'Oatbran', carb: 67, amounts: [{key: '1/4 cup', value: 0.30}, {key: ' 100g', value: 1}]},
                  {name: 'Porridge, made with milk', carb: 13, amounts: [{key: '1 cup', value: 2.60}, {key: ' 100g', value: 1}]},
                  {name: 'Porridge, made with water', carb: 8, amounts: [{key: '1 cup', value: 2.60}, {key: ' 100g', value: 1}]},
                  {name: 'Rolled Oats, raw', carb: 56, amounts: [{key: '1/2 cup', value: 0.45}, {key: ' 100g', value: 1}]}
                ]},
              {name: 'Fruit', carbs: [
                  {name: 'Apple', carb: 14, amounts: [{key: ' 100g', value: 1}, {key: '1 extra small', value: 1.01}, {key: '1 cup slices', value: 1.09}, {key: '1 cup chopped or quartered', value: 1.25}, {key: '1 small', value: 1.49}, {key: '1 medium', value: 1.82}, {key: '1 large', value: 2.23}]},
                  {name: 'Avacado', carb: 9, amounts: [{key: ' 100g', value: 1}, {key: '1 cup sliced', value: 1.46}, {key: '1 cup cubes', value: 1.50}, {key: '1 Whole', value: 2.01}, {key: '1 cup pureed', value: 2.3}]},
                  {name: 'Banana', carb: 23, amounts: [{key: ' 100g', value: 1}, {key: ' 1 small', value: 1.01}, {key: '1 medium', value: 1.18}, {key: '1 large', value: 1.36}, {key: '1 extra large', value: 1.52}]},
                  {name: 'Kiwifruit', carb: 15, amounts: [{key: "1 whole (5cm dia)", value: 0.69}, {key: ' 100g', value: 1}, {key: '1 cup sliced', value: 1.8}]},
                  {name: 'Mandarin', carb: 13, amounts: [{key: '1 small', value: 0.76}, {key: '1 medium', value: 0.88}, {key: ' 100g', value: 1}, {key: '1 large', value: 1.2}]}
                ]},
              {name: 'Grains', carbs: [
                  {name: 'Basmati Rice (Cooked)', variant: 'Rice', carb: 25.22, amounts: [{key: '1/2 cup', value: 0.79}, {key: ' 100g', value: 1}, {key: '1 cup', value: 1.58}]}
                ]},
              {name: 'Vegetables', carbs: [
                  {name: 'Beetroot, Fresh, canned, drained, sliced', carb: 10, amounts: [{key: '1 Slice', value: 0.30}, {key: ' 100g', value: 1}]},
                  {name: 'Broad Beans', carb: 8.8, amounts: [{key: ' 100g', value: 1},{key: '1 cup', value: 1.70}]},
                  {name: 'Carrots, Sliced, boiled, drained', carb: 5.7, amounts: [{key: ' 100g', value: 1},{key: '1 cup', value: 1.57}]},
                  {name: 'Potato', carb: 17, amounts: [{key: ' 1 cup diced', value: 0.75}, {key: ' 100g', value: 1}, {key: ' 1 small', value: 1.7}, {key: '1 medium', value: 2.13}, {key: '1 large', value: 3.69}]}
                ]}
            ];

            $scope.list = [];

            $scope.amounts = [];

            $scope.carbs = [];

            $scope.result = 0;

            $scope.updateResult = function () {
              var sum = 0;
              for (var m = 0; m < $scope.list.length; m++) {
                var add = $scope.list[m].carb * $scope.list[m].amounts.value;
              }
              $scope.result = Math.round(sum / $scope.carbUnit.value * 100) / 100;
            };

            $scope.getCarbs = function () {
              $scope.carbs = [];
              for (var n = 0; n < $scope.categories.length; n++) {
                if ($scope.categories[n].name === $scope.categoryselect.name) {
                  for (var o = 0; o < $scope.categories[n].carbs.length; o++) {
                    $scope.carbs.push($scope.categories[n].carbs[o]);
                  }
                }
              }
            };

            $scope.getAmounts = function () {
              $scope.amounts = [];
              for (var j = 0; j < $scope.carbs.length; j++) {
                if ($scope.carbs[j].name === $scope.carbselect.name) {
                  for (var k = 0; k < $scope.carbs[j].amounts.length; k++) {
                    $scope.amounts.push($scope.carbs[j].amounts[k]);
                  }
                }
              }
            };

            $scope.calculateDosage = function () {
              $rootScope.carbs = $scope.result;
              $location.path('/dosecalc');
            };

            $scope.selected = function () {
              for (var i = 0; i < $scope.carbs.length; i++) {
                if ($scope.carbs[i].name === $scope.carbselect.name) {
                  return $scope.carbs[i];
                }
              }
            };

            $scope.addToList = function () {
              if ($scope.categoryselect !== undefined && $scope.categoryselect !== null && $scope.carbamount !== undefined && $scope.carbamount !== null && $scope.carbselect !== undefined && $scope.carbselect !== null) {
                var temp = $.extend(true, {}, $scope.selected());
                temp.amounts = $scope.carbamount;
                $scope.list.push(temp);
                temp = "";
                $scope.updateResult();
              } else if ($scope.customcarb !== 0 && $scope.customcarb !== undefined && $scope.customcarb !== null) {
                var temp = $.extend(true, {}, []);
                temp.amounts = {
                  key: $scope.customcarb + $scope.carbUnit.name,
                  value: 1
                };
                temp.carb = $scope.customcarb;
                temp.name = $scope.customcarbname ? $scope.customcarbname : 'Custom Entry';
                $scope.list.push(temp);
                temp = "";
                $scope.updateResult();
              }
            };

            $scope.remove = function (item) {
              var index = $scope.list.indexOf(item);
              $scope.list.splice(index, 1);
              $scope.updateResult();
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