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
              {name: 'Bagels', category:'Bakery Products', carbs: [
                  {name: 'white, plain, toasted', carb: 49.7, amounts: [{key: '100g', value: 1}, {key: '1 bagel (3.3 x 9.6cm diameter)', value: 0.889}]}
              ]},
              {name: 'Biscuits', category:'Bakery Products', carbs: [
                  {name: 'Afghan', variant:'', carb: 64.9, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (1.3 x 5.5cm diameter)', value: 0.176}]},
                  {name: 'Arrowroot', variant:'', carb: 76.1, amounts: [{key: '100g', value: 1}, {key: '1 biscuit', value: 0.08}]},
                  {name: 'Chocolate Chip Fudge, Farmbake', variant:'Arnott\'s', carb: 68.9, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (1.0 x 5.8cm diameter)', value: 0.127}]},
                  {name: 'Chocolate Chip', variant:'Cookie Time', carb: 61.7, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (1.7 x 11.0cm diameter)', value: 0.961}]},
                  {name: 'Classic Dark, Tim Tam', variant:'Arnott\'s', carb: 63.7, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (6.2 x 3.2 x 1.3cm)', value: 0.19}]},
                  {name: 'Dark Chocolate, Digestive', variant:'Arnott\'s', carb: 61.9, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (0.7 x 7.5cm diameter)', value: 0.18}]},
                  {name: 'Dark Chocolate, Wheaten', variant:'Griffin\'s', carb: 55.6, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (0.5 x 5.4cm diameter)', value: 0.103}]},
                  {name: 'Double Deck Dark Chocolate Delight, Chit Chat', variant:'Griffin\'s', carb: 65, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (6.5 x 2.9 x 1.3cm)', value: 0.191}]},
                  {name: 'Gingernuts', variant:'', carb: 77.7, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (0.8 x 5.2cm diameter)', value: 0.09}, {key: '1 biscuit (0.9 x 5.4cm diameter)', value: 0.13}]},
                  {name: 'MallowPuffs', variant:'Griffin\'s', carb: 63.9, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (2.7 x 4.5cm diameter)', value: 0.215}]},
                  {name: 'Malt', variant:'', carb: 71.1, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (6.6 x 4.4 x 0.6cm)', value: 0.075}]},
                  {name: 'Milk Chocolate, Digestive', variant:'Arnott\'s', carb: 65.1, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (0.7 x 7.5cm diameter)', value: 0.176}]},
                  {name: 'White & Dark Chocolate, Farmbake', carb: 70, variant:'Arnott\'s', amounts: [{key: '100g', value: 1}, {key: '1 biscuit (1.0 x 5.2cm diameter)', value: 0.126}]},
                  {name: 'Milk Chocolate, Double Chocolate, Cookies', variant:'Ernest Adams', carb: 66.1, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (1.3 x 5.3cm diameter)', value: 13.3}]},
                  {name: 'Milk Chocolate, Double Coat, Tim Tam', variant:'Arnott\'s', carb: 68.5, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (6.2 x 3.3 x 1.5cm)', value: 0.228}]},
                  {name: 'Milk Chocolate, Original, Tim Tam', variant:'Arnott\'s', carb: 68.5, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (6.2 x 3.2 x 1.3cm)', value: 0.185}]},
                  {name: 'Milk Chocolate, Wheaten', variant:'Griffin\'s', carb: 60, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (0.8 x 5.5cm diameter)', value: 0.108}]},
                  {name: 'Peanut Brownie', variant:'', carb: 64.4, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (1.2 x 5.4cm diameter)', value: 0.12}, {key: '1 biscuit (1.6 x 5.5cm diameter)', value: 0.22}]},
                  {name: 'Shortbread', variant:'', carb: 59.7, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (1.1 x 5.0cm diameter)', value: 0.125}, {key: '1 biscuit (1.6 x 5.3cm diameter)', value: 0.205}]},
                  {name: 'Wafer, Raspberry, Cream Filled', variant:'', carb: 71, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (2.6 x 8.0 x 1.0cm)', value: 0.09}]},
                  {name: 'With coconut, Krispie',variant:'Griffin\'s', carb: 65.4, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (0.6 x 6.0cm diameter)', value: 0.088}]},
                  {name: 'With cream filling', variant:'', carb: 66, amounts: [{key: '100g', value: 1}, {key: '1 biscuit', value: 0.15}]}
                ]},
                {name: 'Bread Rolls or buns', category:'Bakery Products', carbs: [
                  {name: 'White, Fortified', variant:'', carb: 45.3, amounts: [{key: '100g', value: 1}, {key: '1 bun medium (8.1cm diameter)', value: 0.515}, {key: '1 bun large (11.6cm diameter)', value: 0.624}, {key: '1 long roll (14.1 x 5.5cm diameter)', value: 0.665}]},
                  {name: 'Wholemeal, Fortified', variant:'', carb: 37.6, amounts: [{key: '100g', value: 1}, {key: '1 bun medium (8.2cm diameter)', value: 0.544}, {key: '1 bun large (10.4cm diameter)', value: 0.777}, {key: '1 long roll (9.1 x 7.6cm diameter)', value: 0.628}]},
                  {name: 'Currant, Commercial', variant:'', carb: 57.3, amounts: [{key: '100g', value: 1}, {key: '1 slice (11.6 x 9.2 x 1.0cm)', value: 0.27}]},
              ]},
              {name: 'Bread', category:'Bakery Products', carbs: [
                {name: 'Grain & Seed Toast, Fortified vitamins E & Folate', variant:'Tip Top', carb: 35, amounts: [{key: '100g', value: 1}, {key: '1 slice (10.9 x 11.1 x 1.2cm)', value: 0.378}]},
                {name: 'Gluten Free Ancient Grain & Seeds', variant:'Burgen', carb: 33, amounts: [{key: '100g', value: 1}, {key: '1 slice (8.7 x 8.6 x 1.1cm)', value: 0.448}]},
                {name: 'Gluten Free White,', variant:'Burgen', carb: 44.1, amounts: [{key: '100g', value: 1}, {key: '1 slice (8.9 x 8.6 x 1.1cm)', value: 0.411}]},
                {name: 'Gluten free 6 Seed', variant:'Vogel\'s', carb: 30.8, amounts: [{key: '100g', value: 1}, {key: '1 slice (9.8 x 9.7 x 1.3cm)', value: 0.357}]},
                {name: 'Mixed Grain & Toasted Sesame Toast', variant:'Vogel\'s', carb: 30.1, amounts: [{key: '100g', value: 1}, {key: '1 slice toast (9.5 x 10.3 x 1.2cm)', value: 0.425}]},
                {name: 'Nature\'s Grain, fortified', variant:'River Mill', carb: 41.5, amounts: [{key: '100g', value: 1}, {key: '1 slice (10.5 x 11.9 x 1.2cm)', value: 0.333}]},
                {name: 'Salba Traditional European Rye,', variant:'Yarrows', carb: 32, amounts: [{key: '100g', value: 1}, {key: '1 slice (10.7 x 11.5 x 1.6cm)', value: 0.465}]},
                {name: 'Salba Traditional Wholegrain,', variant:'Yarrows', carb: 32.3, amounts: [{key: '100g', value: 1}, {key: '1 slice (10.7 x 11.7 x 1.6cm)', value: 0.149}]},
                {name: 'Soy & Linseed', variant:'Vogel\'s', carb: 30.4, amounts: [{key: '100g', value: 1}, {key: '1 slice (9.4 x 9.4 x 1.1cm)', value: 0.37}]},
                {name: 'Soy & Linseed', variant:'Burgen', carb: 30.4, amounts: [{key: '100g', value: 1}, {key: '1 slice (9.4 x 9.4 x 1.1cm)', value: 0.37}]},
                {name: 'Station Seed & Grain,', variant:'Mackenzie', carb: 31, amounts: [{key: '100g', value: 1}, {key: '1 slice (9.2 x 14.8 x 1.8cm)', value: 18.2}]},
                {name: 'Swiss Bake Grains Plus', variant:'Molenberg', carb: 35.2, amounts: [{key: '100g', value: 1}, {key: '1 slice toast (10.5 x 11.3 x 1.2cm)', value: 0.377}]},
                {name: 'Swiss Bake Grains Plus', variant:'Quality Bakers', carb: 35.2, amounts: [{key: '100g', value: 1}, {key: '1 slice toast (10.5 x 11.3 x 1.2cm)', value: 0.377}]},
                {name: 'Tuscan Mixed Grain', variant:'Freya\'s', carb: 39.1, amounts: [{key: '100g', value: 1}, {key: '1 slice (9.2 x 12.3 x 1.3cm)', value: 0.408}]},
                {name: 'Chapatti or Roti, Wholemeal', variant:'Restaurant', carb: 42.3, amounts: [{key: '100g', value: 1}, {key: '1 chapatti or roti (0.4 x 20cm diameter)', value: 0.988}]},
                {name: 'Gluten free, Mixed Grain, Sliced, Prepacked', variant:'', carb: 39.1, amounts: [{key: '100g', value: 1}, {key: '1 slice (8.6 x 7.8 x 1.1cm)', value: 0.425}]},
                {name: 'Gluten free, White, Sliced & Unsliced, Prepacked', variant:'', carb: 43.5, amounts: [{key: '100g', value: 1}, {key: '1 slice (8.8 x 7.7 x 1.0cm)', value: 0.348}]},
                {name: 'Mixed Grain, Ancient Grains', variant:'Vogel\'s', carb: 32.9, amounts: [{key: '100g', value: 1}, {key: '1 slice sandwich (10 x 8.7 x 0.8cm)', value: 0.347}, {key: '1 slice toast (10.0 x 9.0 x 1.0cm)', value: 0.436}]},
                {name: 'Mixed grain, Heavy, Sliced, Prepacked', variant:'', carb: 42.6, amounts: [{key: '100g', value: 1}, {key: '1 slice sandwich (10.1 x 8.6 x 0.9cm)', value: 0.373}, {key: '1 slice toast (10 x 8.9 x 0.9cm)', value: 0.417}]},
                {name: 'Mixed Grain, Light, Sliced, prepacked', variant:'', carb: 40.7, amounts: [{key: '100g', value: 1}, {key: '1 slice sandwich (11.4 x 10.3 x 1.1cm)', value: 0.317}, {key: '1 slice toast (11.1 x 10.5 x 1.3cm)', value: 0.383}]},
                {name: 'Naan, White, Plain', variant:'Restaurant', carb: 44.1, amounts: [{key: '100g', value: 1}, {key: '1 naan bread triangle (29 x 20 x 1cm)', value: 1.45}]},
                {name: 'Pita, White', variant:'', carb: 49.2, amounts: [{key: '100g', value: 1}, {key: '1 small pocket (11cm diameter)', value: 0.48}, {key: '1 large pocket (15cm diameter)', value: 0.82}]},
                {name: 'Plain, Panini, prepacked', variant:'', carb: 46.8, amounts: [{key: '100g', value: 1}, {key: '1 panini (2.1 x 9.9 x 17.1)', value: 0.92}]},
                {name: 'Wheatmeal, Sliced, Prepacked', variant:'', carb: 36.6, amounts: [{key: '100g', value: 1}, {key: '1 slice sandwich (11.5 x 10.3 x 1.0cm)', value: 0.305}, {key: '1 slice toast (11.4 x 10.0 x 1.2cm)', value: 0.375}]},
                {name: 'White, Sliced, Prepacked', variant:'', carb: 43.1, amounts: [{key: '100g', value: 1}, {key: '1 slice sandwich (11.2 x 10.8 x 1.0cm)', value: 0.32}, {key: '1 slice toast (11.1 x 10.8 x 1.4cm)', value: 0.385}, {key: '1 slice thick toast (11.1 x 11.2 x 1.6cm)', value: 0.465}]},
                {name: 'Wholemeal, Pita', variant:'', carb: 41.9, amounts: [{key: '100g', value: 1}, {key: '1 pita (1.1 x 15.7cm diameter)', value: 0.85}]}
              ]},
              {name: 'Buns', category:'Bakery Products', carbs: [
                {name: 'Currant', variant:'', carb: 49.3, amounts: [{key: '100g', value: 1}, {key: '1 bun', value: 0.80}]},
                {name: 'Iced', variant:'', carb: 63.2, amounts: [{key: '100g', value: 1}, {key: '1 bun', value: 0.80}]}
              ]},
              {name: 'Cake', category:'Bakery Products', carbs: [
                {name: 'Fruitcake', variant:'', carb: 55.6, amounts: [{key: '100g', value: 1}, {key: '1 slice (7.5 x 5.0 x 1.5cm)', value: 0.40}]}
              ]},
              {name: 'Crackers', category:'Bakery Products', carbs: [
                {name: 'Corn, Cruskits', variant:'Arnott\'s', carb: 73.3, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (12 x 5.6 x 0.5cm)', value: 0.064}]},
                {name: 'Mixed grain, Cruskits, Light', variant:'Arnott\'s', carb: 65.2, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (11.8 x 5.7 x 0.4cm)', value: 0.06}]},
                {name: 'Mixed grain, Litebread, Original Crispbread,', variant:'Huntley & Palmers', carb: 66.3, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (12 x 5.9 x 0.4cm)', value: 0.067}]},
                {name: 'Rice, Barbecue flavoured', variant:'', carb: 80.7, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (4.7cm diameter)', value: 0.019}]},
                {name: 'Rice, Plain', variant:'', carb: 75.7, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (4.7cm diameter)', value: 0.021}]},
                {name: 'Rice, Seaweed flavoured', variant:'Sakata', carb: 72.6, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (5.0cm diameter)', value: 0.02}]},
                {name: 'Rye, Crispbread', variant:'Ryvita', carb: 67.4, amounts: [{key: '100g', value: 1}, {key: '1 cracker', value: 0.10}]},
                {name: 'Wheat, Cream Crackers, Reduced Fat', variant:'Huntley & Palmers', carb: 66.2, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (6.4 x 6.0 x 0.3cm)', value: 0.79}]},
                {name: 'Wheat, Meal Mates', variant:'Griffin\'s', carb: 49.9, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (0.4 x 6.3cm diameter)', value: 0.58}]},
                {name: 'Wheat, Salada, Light, Original', variant:'Arnott\'s', carb: 66.3, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (10 x 8.7 x 0.4cm)', value: 0.148}]},
                {name: 'Wheat, Snax', variant:'Griffin\'s', carb: 54.6, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (0.5 x 5.0cm diameter)', value: 2}]},
                {name: 'Wheat, Water Cracker', variant:'Arnott\'s', carb: 73.7, amounts: [{key: '100g', value: 1}, {key: '1 biscuit (0.4 x 5.5cm diameter)', value: 0.032}]},
                {name: 'Wheat, Cheese flavoured', variant:'', carb: 58, amounts: [{key: '100g', value: 1}, {key: '1 biscuit Cheddar (4.4 x 2.6 x 0.4cm)', value: 0.023}, {key: '1 biscuit Cheds (6.9 x 5.3 x 0.5cm)', value: 0.083}]},
                {name: 'Wheat, Sesame', variant:'', carb: 54.6, amounts: [{key: '100g', value: 1}, {key: '1 biscuit Sesame Wheat (6.0 x 5.9 x 0.5cm)', value: 0.067}]}
              ]},
              {name: 'Garlic Bread', category:'Bakery Products', carbs: [
                {name: 'Garlic bread, made with butter', variant:'La Famiglia & Signature Range', carb: 41.5, amounts: [{key: '100g', value: 1}, {key: '1 slice', value: 0.25}, {key: '1 loaf (25.4 x 6 x 4.5cm)', value: 2.228}]},
                {name: 'Garlic bread, made with margarine,', variant:'Pams & Mamma Fiorelli\'s', carb: 41.5, amounts: [{key: '100g', value: 1}, {key: '1 slice', value: 0.25}, {key: '1 loaf (25.6 x 5.7 x 5.5cm)', value: 2.18}]}
              ]},
              {name: 'Muffins', category:'Bakery Products', carbs: [
                {name: 'Scone, white, plain', variant:'', carb: 45.6, amounts: [{key: '100g', value: 1}, {key: '1 scone (10.4 x 9.5 x 4.8cm)', value: 1.261}]},
                {name: 'Scone, white, with cheese', variant:'', carb: 34.6, amounts: [{key: '100g', value: 1}, {key: '1 scone (9.5 x 8.3 x 5.0cm)', value: 1.393}]},
                {name: 'Scone, white, with dates', variant:'', carb: 47.5, amounts: [{key: '100g', value: 1}, {key: '1 scone (8.8 x 7.1 x 5.0cm)', value: 0.343}]}
              ]},
              {name: 'Scones', category:'Bakery Products', carbs: [
                {name: 'blueberry', variant:'', carb: 45.8, amounts: [{key: '100g', value: 1}, {key: '1 muffin (6.0cm top diameter x 4.0cm height)', value: 0.60}]},
                {name: 'bran', variant:'', carb: 40.6, amounts: [{key: '100g', value: 1}, {key: '1 medium muffin (7.5cm top diameter x 6.0cm height)', value: 1.05}]},
                {name: 'chocolate', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 muffin (6.0cm top diameter x 4.0cm height)', value: 53.1}]}
              ]},
              {name: 'Other', category:'Bakery Products', carbs: [
              {name: 'Croissant, Plain', variant:'', carb: 38.6, amounts: [{key: '100g', value: 1}, {key: '1 small (7-12cm long)', value: 0.50}, {key: '1 large ( >15cm long)', value: 0.75}]},
              {name: 'Crumpet, White, Toasted', variant:'', carb: 34.3, amounts: [{key: '100g', value: 1}, {key: '1 crumpet round (1.4 x 9.2cm diameter)', value: 0.485}, {key: '1 crumpet square (10.9 x 10.5 x 1.5cm)', value: 0.698}]},
              {name: 'Doughnut, Sugar & Cinnamon', variant:'', carb: 43.8, amounts: [{key: '100g', value: 1}, {key: '1 doughnut (2.5 x 8.5cm diameter)', value: 0.42}]},
              {name: 'English muffin, Bread-like, Assorted flavours, Toasted', variant:'', carb: 40.6, amounts: [{key: '100g', value: 1}, {key: '1 muffin', value: 0.80}]},
              {name: 'Pizza base, no topping', variant:'', carb: 48.8, amounts: [{key: '100g', value: 1}, {key: '1 piece (1/8 of 22.0cm diameter)', value: 2.01}]},
              {name: 'Stuffing, from chicken, deli cooked', variant:'', carb: 25.8, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.077}, {key: '1 cup (250mL)', value: 0.376}]}
              ]},
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
                sum = sum + add;
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