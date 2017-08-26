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
              /** Bakery Products */
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
                  {name: 'Currant, Commercial', variant:'', carb: 57.3, amounts: [{key: '100g', value: 1}, {key: '1 slice (11.6 x 9.2 x 1.0cm)', value: 0.27}]}
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
                {name: 'Garlic bread, made with butter', variant:'La Famiglia, Signature Range', carb: 41.5, amounts: [{key: '100g', value: 1}, {key: '1 slice', value: 0.25}, {key: '1 loaf (25.4 x 6 x 4.5cm)', value: 2.228}]},
                {name: 'Garlic bread, made with margarine,', variant:'Pams, Mamma Fiorelli\'s', carb: 41.5, amounts: [{key: '100g', value: 1}, {key: '1 slice', value: 0.25}, {key: '1 loaf (25.6 x 5.7 x 5.5cm)', value: 2.18}]}
              ]},
              {name: 'Muffins', category:'Bakery Products', carbs: [
                {name: 'blueberry', variant:'', carb: 45.8, amounts: [{key: '100g', value: 1}, {key: '1 muffin (6.0cm top diameter x 4.0cm height)', value: 0.60}]},
                {name: 'bran', variant:'', carb: 40.6, amounts: [{key: '100g', value: 1}, {key: '1 medium muffin (7.5cm top diameter x 6.0cm height)', value: 1.05}]},
                {name: 'chocolate', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 muffin (6.0cm top diameter x 4.0cm height)', value: 53.1}]}
              ]},
              {name: 'Scones', category:'Bakery Products', carbs: [
                {name: 'Scone, white, plain', variant:'', carb: 45.6, amounts: [{key: '100g', value: 1}, {key: '1 scone (10.4 x 9.5 x 4.8cm)', value: 1.261}]},
                {name: 'Scone, white, with cheese', variant:'', carb: 34.6, amounts: [{key: '100g', value: 1}, {key: '1 scone (9.5 x 8.3 x 5.0cm)', value: 1.393}]},
                {name: 'Scone, white, with dates', variant:'', carb: 47.5, amounts: [{key: '100g', value: 1}, {key: '1 scone (8.8 x 7.1 x 5.0cm)', value: 0.343}]}
              ]},
              {name: 'Other', category:'Bakery Products', carbs: [
              {name: 'Croissant, Plain', variant:'', carb: 38.6, amounts: [{key: '100g', value: 1}, {key: '1 small (7-12cm long)', value: 0.50}, {key: '1 large ( >15cm long)', value: 0.75}]},
              {name: 'Crumpet, White, Toasted', variant:'', carb: 34.3, amounts: [{key: '100g', value: 1}, {key: '1 crumpet round (1.4 x 9.2cm diameter)', value: 0.485}, {key: '1 crumpet square (10.9 x 10.5 x 1.5cm)', value: 0.698}]},
              {name: 'Doughnut, Sugar & Cinnamon', variant:'', carb: 43.8, amounts: [{key: '100g', value: 1}, {key: '1 doughnut (2.5 x 8.5cm diameter)', value: 0.42}]},
              {name: 'English muffin, Bread-like, Assorted flavours, Toasted', variant:'', carb: 40.6, amounts: [{key: '100g', value: 1}, {key: '1 muffin', value: 0.80}]},
              {name: 'Pizza base, no topping', variant:'', carb: 48.8, amounts: [{key: '100g', value: 1}, {key: '1 piece (1/8 of 22.0cm diameter)', value: 2.01}]},
              {name: 'Stuffing, from chicken, deli cooked', variant:'', carb: 25.8, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.077}, {key: '1 cup (250mL)', value: 0.376}]}
              ]},
              /** Beverages, Alcoholic */
              {name: 'Beer', category:'Beverages, Alcoholic', carbs: [
                {name: 'full-strength (5% alcohol by volume)', variant:'', carb: 0.5, amounts: [{key: '100g', value: 1}, {key: '1 small glass (280mL, 1.0 standard drink)', value: 2.814}, {key: '1 regular bottle or can (330mL, 1.2 standard drink)', value: 3.317}, {key: '1 large can (440mL, 1.6 standard drink)', value: 4.422}, {key: '1 large glass (450mL, 1.7 standard drinks)', value: 4.523}, {key: '1 large bottle (500mL, 1.8 standard drink)', value: 5.025}]},
                {name: 'high-strength (>5% alcohol by volume)', variant:'', carb: 0.7, amounts: [{key: '100g', value: 1}, {key: '1 small glass (280mL, 1.3 standard drink)', value: 2.825}, {key: '1 regular bottle or can (330mL, 1.5 standard drink)', value: 3.33}, {key: '1 large can (440mL, 2.0 standard drink)', value: 4.44}, {key: '1 large glass (450mL, 2.1 standard drinks)', value: 4.541}, {key: '1 large bottle (500mL, 2.3 standard drink)', value: 5.045}]},
                {name: 'low alcohol', variant:'', carb: 0.6, amounts: [{key: '100g', value: 1}, {key: '1 small glass (280mL, 0.3 standard drinks)', value: 2.688}, {key: '1 regular bottle or can (330mL, 0.3 standard drinks)', value: 3.168}, {key: '1 large can (440mL, 0.4 standard drinks)', value: 4.224}, {key: '1 large glass (450mL, 0.4 standard drinks)', value: 4.32}, {key: '1 large bottle (500mL, 0.5 standard drinks)', value: 4.80}]},
                {name: 'low-strength (2.5% alcohol by volume)', variant:'', carb: 0.2, amounts: [{key: '100g', value: 1}, {key: '1 small glass (280mL, 0.6 standard drink)', value: 2.822}, {key: '1 regular bottle or can (330mL, 0.7 standard drink)', value: 3.326}, {key: '1 large can (440mL, 0.9 standard drink)', value: 4.435}, {key: '1 large glass (450mL, 0.9 standard drinks)', value: 4.536}, {key: '1 large bottle (500mL, 1.0 standard drink)', value: 5.04}]},
                {name: 'mid-strength (4% alcohol by volume)', variant:'', carb: 0.3, amounts: [{key: '100g', value: 1}, {key: '1 small glass (280mL, 0.9 standard drink)', value: 2.827}, {key: '1 regular bottle or can (330mL, 1.0 standard drink)', value: 3.32}, {key: '1 large can (440mL, 1.3 standard drink)', value: 4.426}, {key: '1 large glass (450mL, 1.4 standard drinks)', value: 4.527}, {key: '1 large bottle (500mL, 1.5 standard drink)', value: 5.03}]}
              ]},
              {name: 'Cider', category:'Beverages, Alcoholic', carbs: [
                {name: 'apple, (5% alcohol by volume)', variant:'', carb: 5.6, amounts: [{key: '100g', value: 1}, {key: '1 small glass (280mL, 1.1 standard drinks)', value: 2.836}, {key: '1 regular bottle (330mL, 1.3 standard drinks)', value: 3.343}, {key: '1 large glass (450mL, 1.8 standard drinks)', value: 4.559}, {key: '1 large bottle (500mL, 2.0 standard drinks)', value: 5.065}]},
                {name: 'sweet', variant:'', carb: 2.6, amounts: [{key: '100g', value: 1}, {key: '1 small glass (280mL, 1.0 standard drinks)', value: 2.828}, {key: '1 regular bottle (330mL, 1.2 standard drinks)', value: 3.333}, {key: '1 large glass (450mL, 1.7 standard drinks)', value: 4.545}, {key: '1 large bottle (500mL, 1.9 standard drinks)', value: 5.05}]}
              ]},
              {name: 'Wine', category:'Beverages, Alcoholic', carbs: [
                {name: 'Port, fortified', variant:'', carb: 12.3, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 1.6 standard drinks)', value: 1.03}, {key: '1 average glass (150mL, 2.5 standard drinks)', value: 1.545}]},
                {name: 'Sherry, dry', variant:'', carb: 1.3, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 1.6 standard drinks)', value: 0.99}, {key: '1 average glass (150mL, 2.3 standard drinks)', value: 1.485}]},
                {name: 'Sherry, sweet', variant:'', carb: 10.3, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 1.6 standard drinks)', value: 10.4}, {key: '1 average glass (150mL, 2.4 standard drinks)', value: 1.515}]},
                {name: 'Pinot Noir (13.5% alcohol by volume)', variant:'red', carb: 0.2, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 1.1 standard drinks)', value: 0.994}, {key: '1 average glass (150mL, 1.6 standard drinks)', value: 1.491}]},
                {name: 'Cabernet Sauvignon (14% alcohol by volume)', variant:'red', carb: 0.2, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 1.1 standard drinks)', value: 0.995}, {key: '1 average glass (150mL, 1.7 standard drinks)', value: 1.493}]},
                {name: 'Merlot (14% alcohol by volume)', variant:'red', carb: 0.4, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 1.1 standard drinks)', value: 0.995}, {key: '1 average glass (150mL, 1.6 standard drinks)', value: 1.493}]},
                {name: 'Shiraz (14% alcohol by volume)', variant:'red', carb: 0.2, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 1.1 standard drinks)', value: 0.994}, {key: '1 average glass (150mL, 1.7 standard drinks)', value: 1.491}]},
                {name: 'rose (12% alcohol by volume)', variant:'red', carb: 0.7, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 0.9 standard drinks)', value: 0.995}, {key: '1 average glass (150mL, 1.4 standard drinks)', value: 1.493}]},
                {name: 'Semillon (11% alcohol by volume)', variant:'white', carb: 0.2, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 0.9 standard drinks)', value: 0.993}, {key: '1 average glass (150mL, 1.4 standard drinks)', value: 1.493}]},
                {name: 'Sauvignon Blanc (12% alcohol by volume)', variant:'white', carb: 0.3, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 1.0 standard drinks)', value: 0.992}, {key: '1 average glass (150mL, 1.5 standard drinks)', value: 1.488}]},
                {name: 'Chardonnay (13% alcohol by volume)', variant:'white', carb: 0.3, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 1.0 standard drinks)', value: 0.992}, {key: '1 average glass (150mL, 1.5 standard drinks)', value: 1.488}]},
                {name: 'Riesling (12% alcohol by volume)', variant:'white', carb: 0.4, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 1.0 standard drinks)', value: 0.993}, {key: '1 average glass (150mL, 1.4 standard drinks)', value: 1.49}]},
                {name: 'Sparkling (12% alcohol by volume)', variant:'white', carb: 1, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 1.0 standard drinks)', value: 0.995}, {key: '1 average glass (150mL, 1.5 standard drinks)', value: 1.493}]},
                {name: 'sweet, dessert (11.5% alcohol by volume)', variant:'white', carb: 14.7, amounts: [{key: '100g', value: 1}, {key: '1 small glass (100mL, 0.9 standard drinks)', value: 1.066}, {key: '1 average glass (150mL, 1.4 standard drinks)', value: 1.599}]}
              ]},
              {name: 'Spirit', category:'Beverages, Alcoholic', carbs: [
                {name: '70 proof', variant:'', carb: 0.1, amounts: [{key: '100g', value: 1}, {key: '1 shot (30mL, 0.9 standard drinks)', value: 0.285}, {key: 'Double shot (60mL, 1.8 standard drinks)', value: 0.57}]},
                {name: 'gin, 90 proof', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 shot (30mL, 1.1 standard drinks)', value: 0.282}, {key: 'Double shot (60mL, 2.1 standard drinks)', value: 0.564}]},
                {name: 'rum, 80 proof', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 shot (30mL, 0.9 standard drinks)', value: 0.282}, {key: 'Double shot (60mL, 1.9 standard drinks)', value: 0.564}]},
                {name: 'vodka, 80 proof', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 shot (30mL, 0.9 standard drinks)', value: 0.282}, {key: 'Double shot (60mL, 1.9 standard drinks)', value: 0.564}]},
                {name: 'whiskey, 86 proof', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 shot (30mL, 0.9 standard drinks)', value: 0.282}, {key: 'Double shot (60mL, 1.9 standard drinks)', value: 0.564}]}
              ]},
              /** Beverages Non-Alcoholic */
              {name: 'Coffee', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'brewed from grounds, dripped prepared', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.55}]},
                {name: 'brewed from grounds, plunger prepared', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.55}]},
                {name: 'espresso', variant:'Cafe', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 shot (30mL)', value: 0.3}, {key: '2 shot (55mL)', value: 0.55}, {key: '1 cup short black cafe size (70mL)', value: 0.7}, {key: '1 cup short black takeaway size (90mL)', value: 0.9}]},
                {name: 'flat white, double shot & milk standard 3.3% fat', variant:'Cafe', carb: 3.5, amounts: [{key: '100g', value: 1}, {key: '1 cup regular takeaway size (285mL)', value: 2.449}]},
                {name: 'dry powder with water', variant:'Instant', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.50}]},
                {name: 'dry powder with water & milk standard 3.3% fat', variant:'Instant', carb: 0.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.50}]},
                {name: 'dry powder with water & milk standard 0.5% fat', variant:'Instant', carb: 0.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.50}]},
                {name: 'double shot & milk standard 3.3% fat', variant:'Cafe', carb: 3.4, amounts: [{key: '100g', value: 1}, {key: '1 cup large cafe size (300mL)', value: 2.194}]},
                {name: 'double shot & milk standard 0.5% fat', variant:'Cafe', carb: 3.7, amounts: [{key: '100g', value: 1}, {key: '1 cup large cafe size (300mL)', value: 2.194}]},
                {name: 'long black, double shot', variant:'Cafe', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup small cafe size (150mL)', value: 1.5}, {key: '1 cup regular takeaway size (285mL)', value: 2.85}]},
                {name: 'mochaccino, double shot & milk standard 3.3% fat', variant:'Cafe', carb: 3.6, amounts: [{key: '100g', value: 1}, {key: '1 cup large cafe size (300mL)', value: 2.239}]},
                {name: 'mochaccino, double shot & milk standard 0.5% fat', variant:'Cafe', carb: 3.9, amounts: [{key: '100g', value: 1}, {key: '1 cup large cafe size (300mL)', value: 2.239}]},
                {name: 'dry powder, Cafe Menu Cappuccino', variant:'Instant, Nescafe', carb: 35, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 2.3}]},
                {name: 'dry powder, decaffeinated', variant:'Instant', carb: 0.4, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.017}]},
                {name: 'dry powder', variant:'Instant', carb: 0.4, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.018}]}
              ]},
              {name: 'Drinking Chocolate', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'Baking Cocoa, Powder', variant:'Cadbury', carb: 12.4, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.019}]},
                {name: 'Nesquik, Chocolate', variant:'Nestle', carb: 88.3, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.027}]},
                {name: 'Chocolatte Frothy Classic & Extreme Choc', variant:'Jarrah', carb: 42.5, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.02}]},
                {name: 'Drinking Chocolate', variant:'Cadbury', carb: 85.1, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.031}]},
                {name: 'Milo', variant:'Nestle', carb: 87.7, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.022}]}
              ]},
              {name: 'Energy Drinks', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'V, assorted flavours', variant:'Frucor', carb: 10.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.582}]},
                {name: 'V, sugar free', variant:'Frucor', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.65}]}
              ]},
              {name: 'Flavored Drink', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'Vitafresh, assorted fruit flavours', variant:'', carb: 92.8, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.20}]},
                {name: 'Raro, assorted flavours', variant:'', carb: 92.8, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.135}]},
                {name: 'lemon & barley', variant:'', carb: 9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.59}]},
                {name: 'orange', variant:'', carb: 9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.59}]}
              ]},
              {name: 'Fruit Drink', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'orange, sweetened, fortified vitamin C', variant:'', carb: 6.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.574}]},
                {name: 'blackcurrant, sweetened, fortified vitamin C', variant:'', carb: 8.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.574}]},
                {name: 'cranberry, sweetened, fortified vitamin C', variant:'', carb: 9.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.577}]},
                {name: 'cranberry, unsweetened, fortified vitamin C', variant:'', carb: 0.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.48}]},
                {name: 'orange, unsweetened, fortified vitamin C', variant:'', carb: 3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.539}]}
              ]},
              {name: 'Juice Concentrate', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'Blackcurrant', variant:'Baker Halls', carb: 56.8, amounts: [{key: '100g', value: 1}, {key: '100mL', value: 1.12}]},
                {name: 'Lemon & Barley', variant:'Baker Halls', carb: 43.6, amounts: [{key: '100g', value: 1}, {key: '100mL', value: 1.12}]},
                {name: 'Blackcurrant, frozen', variant:'', carb: 33, amounts: [{key: '100g', value: 1}, {key: '100mL', value: 1.28}]},
                {name: 'orange', variant:'', carb: 34.1, amounts: [{key: '100g', value: 1}, {key: '100mL', value: 1.124}]}
              ]},
              {name: 'Juice', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'apple', variant:'Fresh Up', carb: 9.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.61}]},
                {name: 'grape', variant:'', carb: 11.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.66}]},
                {name: 'grapefruit, unsweetened', variant:'', carb: 7.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.56}]},
                {name: 'orange with apple base', variant:'Just Juice', carb: 10.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.62}]},
                {name: 'orange, sweetened, ready to drink', variant:'', carb: 7.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.577}]},
                {name: 'orange, unsweetened', variant:'', carb: 7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.553}]},
                {name: 'orange, unsweetened, shelf stable or refrigerated', variant:'Arano', carb: 5.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.567}]},
                {name: 'tomato', variant:'McCoy', carb: 4.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.57}]}
              ]},
              {name: 'Liquid Breakfast', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'Fast Start, assorted flavours', variant:'Anchor', carb: 14, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.68}]},
                {name: 'Up&Go, assorted flavours', variant:'Sanitarium', carb: 11.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.669}]}
              ]},
              {name: 'Rice Milk', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'Rice Milk', variant:'Get Natural', carb: 4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.75}]},
                {name: 'Organic Rice Lactose Free Drink Original', variant:'Signature Range', carb: 6.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.675}]},
                {name: 'Original Calcium Enriched', variant:'Vitasoy', carb: 8.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.70}]},
                {name: 'Original Lactose Free Beverage Low Fat & Natural', variant:'Rice Dream', carb: 5.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.62}]},
                {name: 'Protein and Calcium Enriched', variant:'Vitasoy', carb: 6.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.675}]},
                {name: 'Rice Drink Original', variant:'Rice Dream', carb: 5.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.70}]},
                {name: 'Rice Drink Vanilla', variant:'Rice Dream', carb: 5.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.70}]}
              ]},
              {name: 'Smoothie', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'Feijoa', variant: 'Simply Squeezed', carb: 11.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.725}]},
                {name: 'Berry', variant: 'Multiple Brands', carb: 10.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.75}]}
              ]},
              {name: 'Soft Drink', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'assorted fruit flavours, reduced sugar', variant: 'Homebrand, Budget', carb: 6.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.588}]},
                {name: 'assorted tea flavours, artificially-sweetened', variant: 'Lipton', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.518}]},
                {name: 'assorted tea flavours, reduced sugar', variant: 'Lipton', carb: 4.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.528}]},
                {name: 'assorted tea flavours, sugar-sweetened', variant: 'Teza, Arizona', carb: 7.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.57}]},
                {name: 'assorted fruit flavours, sugar-sweetened', variant: 'Fanta, Schweppes', carb: 9.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.588}]},
                {name: 'cola flavoured, artificially-sweetened, caffeinated', variant:'Coca-Cola (Zero, Diet), Pepsi (Max)', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.518}]},
                {name: 'cola flavour, artificially-sweetened, non-caffeinated', variant:'Coca-Cola (Diet)', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.503}]},
                {name: 'lemon flavour, artificially-sweetened', variant:'Sprite (Zero), Schweppes, Lift', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.515}]},
                {name: 'lemon flavour, sugarsweetened', variant:'Sprite, Schweppes, Signature Range, 7UP, L&P, Lift, Spree, Frank, Endeavour', carb: 9.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.568}]},
                {name: 'cola flavour, reduced sugar, caffeinated', variant:'Coca-Cola (Life), Pepsi (Next), Homebrand, Pams', carb: 6.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.573}]},
                {name: 'cola flavour, sugar-sweetened, caffeinated', variant:'Coca-Cola, Pepsi', carb: 7.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.535}]},
                {name: 'lemon flavour, reduced sugar', variant:'360 degrees, Homebrand, Budget, Charlies', carb: 7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.56}]},
                {name: 'soda water', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.50}]},
                {name: 'tonic water', variant:'', carb: 8.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.58}]}
              ]},
              {name: 'Soy Milk', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'So Good Essential', variant:'Sanitarium', carb: 4.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.60}]},
                {name: 'So Good Lite Soy Milk', variant:'Sanitarium', carb: 3.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.60}]},
                {name: 'So Good Regular Soy Milk', variant:'Sanitarium', carb: 4.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.55}]},
                {name: 'So Good, Vanilla Flavoured', variant:'Sanitarium', carb: 6.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.55}]}
              ]},
              {name: 'Sports Drink', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'assorted flavours, Isopower, Low Carb', variant:'Mizone', carb: 3.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.55}]},
                {name: 'assorted flavours, Isopower', variant:'Mizone', carb: 6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.566}]},
                {name: 'Lucozade', variant:'Lucozade', carb: 14, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.65}]},
                {name: 'Gatorade', variant:'Gatorade', carb: 6.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.56}]},
                {name: 'Powerade', variant:'Powerade', carb: 8.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.554}]},
                {name: 'assorted flavours', variant:'Mizone', carb: 2.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.60}]}
              ]},
              {name: 'Other', category:'Beverages, Non-Alcoholic', carbs: [
                {name: 'Kava', variant:'', carb: 0.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.443}]}
              ]},
              /** Breakfast Cereals */
              {name: 'Breakfast Cereals', category: 'Breakfast Cereals', carbs: [
                {name: 'All Bran Original', variant:'Kellogg\'s', carb: 62.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.789}]},
                {name: 'rice puffed, cocoa coated', variant:'Generic', carb: 80.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value:0.629}]},
                {name: 'Cluster Crisp, Manuka Honey with Roasted Cashew', variant:'Sanitarium', carb: 56.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.926}]},
                {name: 'Cluster Crisp', variant:'Sanitarium', carb: 56.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.928}]},
                {name: 'Cluster Crisp, Vanilla Almond', variant:'Sanitarium', carb: 56.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.929}]},
                {name: 'Coco Pops', variant:'Kellogg\'s', carb: 84.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.524}]},
                {name: 'Crunchy Nut Corn Flakes', variant:'Kellogg\'s', carb: 79.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.44}]},
                {name: 'Fruitful Breakfast', variant:'Hubbards', carb: 59.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.475}]},
                {name: 'Just Right', variant:'Kellogg\'s', carb: 76.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.531}]},
                {name: 'Light \'n\' Tasty, Apricot', variant:'Sanitarium', carb: 69.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.775}]},
                {name: 'Light \'n\' Tasty, Berry', variant:'Sanitarium', carb: 69.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.824}]},
                {name: 'Light \'n\' Tasty, Peach & Raspberry', variant:'Sanitarium', carb: 67.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.747}]},
                {name: 'Nutri-Grain', variant:'Kellogg\'s', carb: 67.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.368}]},
                {name: 'Porridge, prepared with water, salt added', variant:'', carb: 8.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.260}]},
                {name: 'Puffed Wheat', variant:'Sanitarium', carb: 77.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.30}]},
                {name: 'Rice Bubbles', variant:'Kellogg\'s', carb: 82.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.30}]},
                {name: 'Ricies', variant:'Sanitarium', carb: 77.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.32}]},
                {name: 'San Bran', variant:'Sanitarium', carb: 41.4, amounts: [{key: '100g', value: 1}]},
                {name: 'Simply Toasted Muesli Apricot', variant:'Hubbards', carb: 58.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.427}]},
                {name: 'Skippy Cornflakes', variant:'Sanitarium', carb: 76.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.334}]},
                {name: 'Special K, Forest Berries', variant:'Kellogg\'s', carb: 70.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.40}]},
                {name: 'Special K, Original', variant:'Kellogg\'s', carb: 64.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.415}]},
                {name: 'Sultana Bran', variant:'Kellogg\'s', carb: 63.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.45}]},
                {name: 'Sustain', variant:'Kellogg\'s', carb: 68.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.60}]},
                {name: 'Toasted Muesli Golden Oats & Fruit', variant:'Sanitarium', carb: 60, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.288}]},
                {name: 'Toasted Muesli Super Fruity', variant:'Sanitarium', carb: 64.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.334}]},
                {name: 'Toasted Strawberry and Rhubarb', variant:'Sanitarium', carb: 55.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.258}]},
                {name: 'Weet-Bix Oat Bran', variant:'Sanitarium', carb: 72.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.222}]},
                {name: 'Weet-Bix', variant:'Sanitarium', carb: 58.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.168}]},
                {name: 'Weeties', variant:'Sanitarium', carb: 61.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.515}]}
              ]},
              /** Cereals and Pseudo-Cereals */
              {name: 'Cereals', category: 'Cereals and Pseudo-Cereals', carbs: [
                {name: 'Barley, pearl, boiled', variant:'', carb: 25.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.65}]},
                {name: 'Bulgur, boiled', variant:'', carb: 17.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.923}]},
                {name: 'Cornmeal, wholegrain, yellow', variant:'', carb: 63.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.22}]},
                {name: 'Couscous, cooked in water, not drained', variant:'', carb: 32.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.432}]},
                {name: 'Couscous, dry', variant:'', carb: 67.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.112}]},
                {name: 'Custard, dry powder', variant:'', carb: 83.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.086}]},
                {name: 'Semolina, cooked', variant:'', carb: 6.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.45}]},
                {name: 'Wheat bran', variant:'', carb: 23.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.63}]},
                {name: 'Wheat germ', variant:'', carb: 36.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.98}]}
              ]},
              {name: 'Flour', category: 'Cereals and Pseudo-Cereals', carbs: [
                {name: 'chickpea, raw', variant:'', carb: 46.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.958}]},
                {name: 'corn', variant:'', carb: 83.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.075}]},
                {name: 'soy, full fat', variant:'', carb: 24.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.68}]},
                {name: 'wheat, white', variant:'', carb: 72.4, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.082}, {key: '1 cup (250mL)', value: 1.373}]},
                {name: 'wheat, wholemeal', variant:'', carb: 60.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.243}]}
              ]},
              {name: 'Frozen Meal', category: 'Cereals and Pseudo-Cereals', carbs: [
                {name: 'lasagne, baked', variant:'', carb: 14.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.50}]},
                {name: 'macaroni chese, baked', variant:'', carb: 14.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.325}]},
                {name: 'spaghetti bolognaise, baked', variant:'', carb: 13.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.225}]}
              ]},
              {name: 'Noodle', category: 'Cereals and Pseudo-Cereals', carbs: [
                {name: 'instant, boiled, drained', variant:'', carb: 24.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.50}]},
                {name: 'rice flour, dry, boiled, drained', variant:'', carb: 23.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.224}]},
                {name: 'Japanese udon noodles, shelf-fresh, boiled, drained', variant:'', carb: 20.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.864}]},
                {name: 'Japanese udon noodles, shelf-fresh, stir fried', variant:'', carb: 28.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.918}]},
                {name: 'wheat flour with egg, boiled, drained', variant:'', carb: 11.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.69}]},
                {name: 'wheat flour with egg, fried', variant:'', carb: 10.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.69}]},
                {name: '2 Minutes, wheat flour, assorted flavours, boiled, undrained', variant:'Maggi', carb: 12.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.85}, {key: '1 cake (11.5 x 8.0 x 2.6cm)', value: 3.963}]},
                {name: 'wheat, Shin Ramyun noodle soup Hot & Spicy, boiled, undrained', variant:'Nong Shim', carb: 9.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.84}, {key: '1 cake (11.5 x 8.0 x 2.6cm)', value: 7.32}]}
              ]},
              {name: 'Oats', category: 'Cereals and Pseudo-Cereals', carbs: [
                {name: 'Oat Bran', variant:'', carb: 54.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.20}]},
                {name: 'Oatmeal', variant:'', carb: 66.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 90}]},
                {name: 'Traditional Wholegrain Oats', variant:'Harraways', carb: 58.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.125}]},
                {name: 'rolled, raw', variant:'', carb: 56.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.90}]},
                {name: 'toasted, rolled oats', variant:'Harraways', carb: 61.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.019}]}
              ]},
              {name: 'Other', category: 'Cereals and Pseudo-Cereals', carbs: [
                {name: 'Taco shell, corn flour, baked, commercial', variant:'', carb: 58.5, amounts: [{key: '100g', value: 1}, {key: '1 shell small (13.2cm diameter)', value: 0.11}, {key: '1 shell standard', value: 0.14}, {key: '1 shell jumbo', value: 0.19}]},
                {name: 'Topper, lasagne, baked', variant:'', carb: 20.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.025}]}
              ]},
              {name: 'Pasta', category: 'Cereals and Pseudo-Cereals', carbs: [
                {name: 'Pasta & sauce, dry mix, assorted flavours, prepared with water, milk & butter, boiled', variant:'', carb: 19.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.812}]},
                {name: 'fresh, assorted type, cooked', variant:'', carb: 24.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.50}]},
                {name: 'fresh, fettuccine, herb & garlic, cooked', variant:'', carb: 21.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.48}]},
                {name: 'fresh, ravioli, beef & pork, cooked', variant:'', carb: 24, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.50}]},
                {name: 'wheat flour with egg, boiled, drained', variant:'', carb: 29, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.20}]},
                {name: 'wheat flour with vegetable flavours, boiled, drained', variant:'', carb: 30.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.14}]},
                {name: 'white wheat flour, assorted shapes, regular, boiled, drained, no salt added', variant:'', carb: 25.4, amounts: [{key: '100g', value: 1}, {key: '1 cup spirals (250mL)', value: 1.098}, {key: '1 cup macaroni elbow (250mL)', value: 1.129}, {key: '1 cup risoni (250mL)', value: 2.006}]},
                {name: 'wholemeal wheat flour, assorted shapes, boiled, drained, no salt added', variant:'', carb: 21.8, amounts: [{key: '100g', value: 1}, {key: '1 cup spirals or penne (250mL)', value: 1.112}]},
                {name: 'Spaghetti, canned in tomato sauce', variant:'', carb: 12.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.95}]}
              ]},
              {name: 'Psuedo-Cereals', category: 'Cereals and Pseudo-Cereals', carbs: [
                {name: 'Quinoa, cooked', variant:'', carb: 17.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.463}]},
                {name: 'Tapioca, pearl, dry', variant:'', carb: 86.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.60}]}
              ]},
              {name: 'Rice', category: 'Cereals and Pseudo-Cereals', carbs: [
                {name: 'brown, boiled', variant:'', carb: 29.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.06}]},
                {name: 'brown, creamed, canned', variant:'', carb: 18.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.578}]},
                {name: 'Basmati, white, boiled, undrained', variant:'', carb: 27.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.621}]},
                {name: 'Jasmine, white, boiled', variant:'', carb: 21.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.965}]},
                {name: 'wild, cooked', variant:'', carb: 19.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.733}]},
                {name: 'Whole grain rice wafer', variant:'', carb: 70.5, amounts: [{key: '100g', value: 1}, {key: '1 thin wafer (0.6 x 9.9cm diameter)', value: 0.073}, {key: '1 thick wafer (1.1 x 9.9cm diameter)', value: 0.131}]}
              ]},
              {name: 'Soy products', category: 'Cereals and Pseudo-Cereals', carbs: [
                {name: 'Tempeh', variant:'', carb: 7.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.625}]},
                {name: 'Tempeh fried in sunflower oil', variant:'', carb: 12.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.754}]},
                {name: 'Yoghurt, soy', variant:'', carb: 3.8, amounts: [{key: '100g', value: 1}]}
              ]},
              /** Dairy */
              {name: 'Butter', category: 'Dairy', carbs: [
                {name: 'salted', variant:'', carb: 0.4, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.046}, {key: '1 tablespoon (15mL)', value: 0.132}]},
                {name: 'semisoft', variant:'', carb: 0.3, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.046}, {key: '1 tablespoon (15mL)', value: 0.132}]},
                {name: 'unsalted', variant:'', carb: 0.5, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.046}, {key: '1 tablespoon (15mL)', value: 0.132}]}
              ]},
              {name: 'Cheese', category: 'Dairy', carbs: [
                {name: 'Cheese spread, light', variant:'Philadelphia', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.186}]},
                {name: 'Cream Cheese, reduced fat 16%', variant:'Country Goodness', carb: 15.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.54}]},
                {name: 'Blue vein', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cube (2cm)', value: 0.035}, {key: '1 wedge (9 x 5.5 x 1cm)', value: 0.22}]},
                {name: 'Camembert', variant:'', carb: 0.1, amounts: [{key: '100g', value: 1}, {key: '1 cube (2cm)', value: 0.035}, {key: '1 round (9 x 5.5 x 1cm)', value: 0.2}]},
                {name: 'Cheddar', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cube (2cm)', value: 0.08}, {key: '1 cup grated (250mL)', value: 1.18}]},
                {name: 'Cheddar, light', variant:'Mainland', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cube (2cm)', value: 0.08}, {key: '1 cup grated (250mL)', value: 1.194}]},
                {name: 'Cheddar, colby', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cube (2cm)', value: 0.08}, {key: '1 cup grated (250mL)', value: 1.194}]},
                {name: 'Cottage', variant:'', carb: 2, amounts: [{key: '100g', value: 1}, {key: '1 tablespooon (15mL)', value: 0.167}, {key: '1 cup (250mL)', value: 2.78}]},
                {name: 'Cottage, light, 1% fat', variant:'', carb: 2.4, amounts: [{key: '100g', value: 1}, {key: '1 tablespooon (15mL)', value: 0.161}, {key: '1 cup (250mL)', value: 2.687}]},
                {name: 'Cream Cheese', variant:'', carb: 6.4, amounts: [{key: '100g', value: 1}, {key: '1 tablespooon (15mL)', value: 0.144}]},
                {name: 'Edam', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cube (2cm)', value: 0.08}, {key: '1 cup grated (250mL)', value: 1.194}]},
                {name: 'Feta, from cow\'s milk, reduced fat', variant:'', carb: 1.3, amounts: [{key: '100g', value: 1}, {key: '1 cube (2.5cm)', value: 0.178}, {key: '1 block (9.8 x 7.0 x 2.5cm)', value: 2.002}]},
                {name: 'Feta, from cow\'s milk, traditional', variant:'', carb: 1.1, amounts: [{key: '100g', value: 1}, {key: '1 cube (2.5cm)', value: 0.178}, {key: '1 block (9.3 x 7.2 x 2.7cm)', value: 2.047}]},
                {name: 'Feta, from goat\'s milk', variant:'', carb: 0.9, amounts: [{key: '100g', value: 1}, {key: '1 cube (2.5cm)', value: 0.176}, {key: '1 cup (250mL)', value: 1.823}]},
                {name: 'Haloumi, from cow\'s milk', variant:'', carb: 1.5, amounts: [{key: '100g', value: 1}, {key: '1 cube (2.5cm)', value: 0.17}, {key: '1 cup (250mL)', value: 1.777}]},
                {name: 'Mozzarella', variant:'', carb: 0.1, amounts: [{key: '100g', value: 1}, {key: '1 cube (2cm)', value: 0.08}, {key: '1 cup grated (250mL)', value: 1.014}]},
                {name: 'Parmesan, from cow\'s milk, ungrated', variant:'', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup grated or shaved (250mL)', value: 0.824}]},
                {name: 'Parmesan, powder', variant:'', carb: 0.1, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.06}, {key: '1 cup (250mL)', value: 1.08}]},
                {name: 'Processed', variant:'', carb: 0.6, amounts: [{key: '100g', value: 1}, {key: '1 slice (8.4 x 8.4 x 0.25cm)', value: 0.207}]},
                {name: 'Processed, sliced, reduced fat', variant:'', carb: 4, amounts: [{key: '100g', value: 1}, {key: '1 slice (8.4 x 8.4 x 0.25cm)', value: 0.207}]},
                {name: 'Ricotta, from cow\'s milk', variant:'', carb: 3.3, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.16}, {key: '100mL', value: 1.065}]},
                {name: 'Fromage frais, assorted fruits & flavours', variant:'Fruche', carb: 14.7, amounts: [{key: '100g', value: 1}, {key: '100mL', value: 1.04}]},
                {name: 'Fromage frais, vanilla', variant:'Fruche', carb: 14.5, amounts: [{key: '100g', value: 1}, {key: '100mL', value: 1.05}]}
              ]},
              {name: 'Cream', category: 'Dairy', carbs: [
                {name: 'Reduced fat', variant:'', carb: 3.7, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.15}]},
                {name: 'Sour', variant:'', carb: 2.8, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.14}, {key: '1 cup (250mL)', value: 2.325}]},
                {name: 'Standard', variant:'', carb: 2.8, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.15}]},
                {name: 'Whipping, ultra-high-temperature processed', variant:'', carb: 2.9, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.152}, {key: '1 cup (250mL)', value: 2.533}]},
                {name: 'Creme fraiche', variant:'', carb: 2.5, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.144}]},
                {name: 'Creme fraiche, light', variant:'', carb: 3.3, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.15}]}
              ]},
              {name: 'Dessert', category: 'Dairy', carbs: [
                {name: 'vanilla, 99% fat free, frozen', variant:'Weight Watchers', carb: 18.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.38}]}
              ]},
              {name: 'Ice Cream', category: 'Dairy', carbs: [
                {name: 'Hokey pokey', variant:'', carb: 22.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.57}]},
                {name: 'Jelly Tip', variant:'Tip Top', carb: 25.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.006}]},
                {name: 'Chocolate', variant:'Paddle Pop', carb: 22.5, amounts: [{key: '100g', value: 1}, {key: '1 ice-block', value: 0.906}]},
                {name: 'Assorted berry flavours, standard', variant:'', carb: 26, amounts: [{key: '100g', value: 1}, {key: '1 scoop (22mL)', value: 0.216}, {key: '1 scoop (64mL)', value: 0.563}]},
                {name: 'Chocolate', variant:'', carb: 21, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.52}]},
                {name: 'Fruit Ripple, creamy', variant:'', carb: 22.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.69}]},
                {name: 'Soft serve', variant:'', carb: 20, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.40}]},
                {name: 'Vanilla, low fat', variant:'', carb: 20.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.33}]},
                {name: 'Vanilla, premium', variant:'', carb: 17.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.41}]},
                {name: 'Vanilla, standard', variant:'', carb: 19.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.43}]}
              ]},
              {name: 'Milk', category: 'Dairy', carbs: [
                {name: 'Condensed, sweetened, skim', variant:'', carb: 57.2, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.20}]},
                {name: 'Condensed, sweetened, whole', variant:'', carb: 54.7, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.19}]},
                {name: 'Cow, high calcium 0.1% fat, fluid', variant:'', carb: 4.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.59}]},
                {name: 'Cow, lite 1.5% fat, fluid', variant:'', carb: 4.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.59}]},
                {name: 'Cow, low fat 0.2% fat, fluid', variant: 'Sun Latte', carb: 3.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.58}]},
                {name: 'Cow, powder, instant, skim', variant:'', carb: 45.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.076}]},
                {name: 'Cow, powder, instant, whole', variant:'', carb: 33, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.081}]},
                {name: 'Cow, standard 3.3% fat, fluid', variant:'', carb: 4.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.58}]},
                {name: 'Cow, standard, fluid, ultra-high-temperature processed', variant:'', carb: 4.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.58}]},
                {name: 'Cow, trim 0.5% fat, fluid', variant:'', carb: 5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.59}]},
                {name: 'Cow, whole 4% fat, fluid, non-homogenised', variant:'', carb: 4.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.605}]},
                {name: 'Cow, whole, evaporated, fluid', variant:'', carb: 9.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.66}]},
                {name: 'Goat, whole, fluid', variant:'', carb: 4.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.58}]},
                {name: 'Human, transistional, fluid', variant:'', carb: 6.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.60}]}
              ]},
              {name: 'Protein powder', category: 'Dairy', carbs: [
                {name: 'whey & vanilla flavoured, 100% Whey Protein WPC/WPI, Balance', variant:'', carb: 4.2, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.053}, {key: '1 cup (250mL)', value: 0.875}]}
              ]},
              {name: 'Yoghurt', category: 'Dairy', carbs: [
                {name: 'Yoghurt dessert, greek style, chocolate, sweetened, premium', variant:'', carb: 8.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.609}]},
                {name: 'Yoghurt smoothie, assorted fruits, sweetened', variant:'', carb: 11.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.716}]},
                {name: 'Lite, assorted fruits, non-fat, sweetened, fortified', variant:'Fresh \'n Fruity', carb: 3.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.581}]},
                {name: 'Lite, assorted fruits, regular fat, sweetened, fortified', variant:'Fresh \'n Fruity', carb: 13, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.607}]},
                {name: 'Greek style, full-fat', variant:'', carb: 3.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.625}]},
                {name: 'Greek style, low fat', variant:'Fresh \'n Fruity', carb: 4.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.733}]},
                {name: 'Greek style, low fat', variant:'Cyclops', carb: 3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.603}]},
                {name: 'Live lite, assorted fruits, non-fat', variant:'Meadow Fresh', carb: 8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.595}]},
                {name: 'low fat, assorted fruits', variant:'Meadow Fresh', carb: 12.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.596}]},
                {name: 'Symbio Probalance, assorted fruits, low fat', variant:'Symbio', carb: 13, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.607}]},
                {name: 'Delite, assorted fruits, low fat', variant:'Yoplait', carb: 10.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.598}]},
                {name: 'assorted fruits, regular fat', variant:'Yoplait', carb: 10.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.61}]},
                {name: 'apricot, frozen', variant:'Tip Top', carb: 17.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.04}]},
                {name: 'plain, low fat, unsweetened', variant:'', carb: 4.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.57}]},
                {name: 'plain, unsweetened', variant:'', carb: 3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.41}]},
                {name: 'premium, assorted fruits', variant:'', carb: 13.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.611}]}
              ]},
              /** Eggs */
              {name: 'Eggs', category: 'Eggs', carbs: [
                {name: 'chicken, white & yolk, boiled', variant:'', carb: 0.6, amounts: [{key: '1 egg (size 5, 51.3g)', value: 0.442}, {key: '1 egg (size 5, 59.7g)', value: 0.535}, {key: '1 egg (size 7, 66.0g)', value: 0.583}]},
                {name: 'chicken, white & yolk, fried in butter', variant:'', carb: 0.01, amounts: [{key: '1 egg (size 5, 51.3g)', value: 0.412}, {key: '1 egg (size 7, 66.0g)', value: 0.437}, {key: '1 egg (size 6, 59.7g)', value: 0.442}]},
                {name: 'chicken, white & yolk, fried in vegetable oil', variant:'', carb: 0.6, amounts: [{key: '1 egg (size 5, 51.3g)', value: 0.399}, {key: '1 egg (size 6, 59.7g)', value: 0.455}, {key: '1 egg (size 7, 66.0g)', value: 0.525}]},
                {name: 'chicken, white & yolk, milk added, scrambled', variant:'', carb: 0.05, amounts: [{key: '1 cup (250mL)', value: 2.325}]},
                {name: 'chicken, white & yolk, poached', variant:'', carb: 0.6, amounts: [{key: '1 egg (size 5, 51.3g)', value: 0.47}, {key: '1 egg (size 6, 59.7g)', value: 0.524}, {key: '1 egg (size 7, 66.0g)', value: 0.595}]},
                {name: 'chicken, white & yolk, raw', variant:'', carb: 0.7, amounts: [{key: '1 egg (size 5, 51.3g)', value: 0.45}, {key: '1 egg (size 6, 59.7g)', value: 0.513}, {key: '1 egg (size 7, 66.0g)', value: 0.567}]},
                {name: 'chicken, white, raw', variant:'', carb: 0.4, amounts: [{key: '1 egg (size 5, 51.3g)', value: 0.315}, {key: '1 egg (size 6, 59.7g)', value: 0.343}, {key: '1 egg (size 7, 66.0g)', value: 0.402}, {key: '1 cup (250mL)', value: 2.225}]},
                {name: 'chicken, yolk, raw', variant:'', carb: 0.2, amounts: [{key: '1 egg (size 5, 51.3g)', value: 0.128}, {key: '1 egg (size 6, 59.7g)', value: 0.15}, {key: '1 egg (size 7, 66.0g)', value: 0.161}, {key: '1 cup (250mL)', value: 2.339}]}
              ]},
              /** Fast Food */
              {name: 'Asian', category: 'Fast Food', carbs: [
                {name: 'Fries, potato, Burger King', variant: 'Fries', carb: 36, amounts: [{key: '100g', value: 1}, {key: '10 fries', value: 0.69}]}
              ]},
              {name: 'Burger King', category: 'Fast Food', carbs: [
                {name: 'Fries, potato, Burger King', variant: 'Fries', carb: 36, amounts: [{key: '100g', value: 1}, {key: '10 fries', value: 0.69}]}
              ]},
              {name: 'Chinese', category: 'Fast Food', carbs: [
                {name: 'black bean, stir fry', variant:'Beef', carb: 2.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.47}]},
                {name: 'Chicken and cashew, stir fry', variant:'Chicken', carb: 2.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.05}]},
                {name: 'Chop suey, chicken, lean & fat, stir fried', variant:'Chicken', carb: 5.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.53}]},
                {name: 'Chop suey, pork', variant:'Pork', carb: 2.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.53}]},
                {name: 'Chow mein, beef, lean & fat, stir fried', variant: 'Beef', carb: 4.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.53}]},
                {name: 'Chow mein, chicken', variant: 'Chicken', carb: 13.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.325}]},
                {name: 'Chow mein, prawn', variant: 'Prawn', carb: 6.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.53}]},
                {name: 'Egg foo young with chicken, omelette, takeaway', variant: 'Omelette', carb: 1.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.46}]},
                {name: 'Fried rice, combination, Chinese, takeaway', variant: 'Fried rice', carb: 14.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.57}]},
                {name: 'Noodle, chow mein, combination, Chinese', variant: 'Noodle', carb: 1.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.94}]},
                {name: 'Pork, sweet & sour, Chinese, takeaway', variant: 'Pork', carb: 20.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.95}]},
                {name: 'Soup, chicken and sweet corn, Chinese, takeaway', variant: 'Soup', carb: 4.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.64}]}
              ]},
              {name: 'Fish', category: 'Fast Food', carbs: [
                {name: 'Fish, battered, deep fried, Independent Shops', variant: 'Battered', carb: 14.6, amounts: [{key: '100g', value: 1}, {key: '1 piece', value: 1.46}]},
                {name: 'Fish, cake, baked', variant: 'Fish Cake', carb: 19.2, amounts: [{key: '100g', value: 1}, {key: '1 cake', value: 0.76}]},
                {name: 'Fish, cake, deep fried in peanut oil', variant: 'Fish Cake', carb: 14.1, amounts: [{key: '100g', value: 1}, {key: '1 cake (1.5 x 7cm diameter)', value: 0.8}]},
                {name: 'Fish, fingers, baked', variant: 'Fish Fingers', carb: 20.3, amounts: [{key: '100g', value: 1}, {key: '1 finger (8.3 x 2.2 x 1.3cm)', value: 0.25}]},
                {name: 'Fish, fingers, deep fried in peanut oil', variant: 'Fish Fingers', carb: 23.1, amounts: [{key: '100g', value: 1}, {key: '1 finger (8.3 x 2.2 x 1.3cm)', value: 0.25}]}
              ]},
              {name: 'Frozen Foods', category: 'Fast Food', carbs: [
                {name: 'Fish, fillet, crumbed, frozen, fried', variant: 'Crumbed fish', carb: 12.2, amounts: [{key: '100g', value: 1}, {key: '1 fillet', value: 0.65}]},
                {name: 'Fish, fillet, crumbed, frozen, baked', variant: 'Crumbed fish', carb: 11.7, amounts: [{key: '100g', value: 1}, {key: '1 fillet', value: 0.7}]},
                {name: 'Pizza, frozen, Hawaiian & Combination, individual size, baked', variant: 'Pizza', carb: 30.1, amounts: [{key: '100g', value: 1}, {key: '1 pizza  (1.8 x 12.2cm diameter)', value: 1.16}]},
                {name: 'Pizza, frozen, Hawaiian & House special, premium, baked', variant: 'Pizza', carb: 24.6, amounts: [{key: '100g', value: 1}, {key: '1 pizza (2.5 x 24.6cm diameter)', value: 6.54}]},
                {name: 'Pizza, frozen, meat lovers, premium, baked', variant: 'Pizza', carb: 22.2, amounts: [{key: '100g', value: 1}, {key: '1 pizza (2.5 x 24.6cm diameter)', value: 6.75}]},
                {name: 'Spring roll, traditional with meat, baked, Highmark', variant: 'Highmark, Spring Rolls', carb: 22, amounts: [{key: '100g', value: 1}, {key: '1 roll (8.5 x 3 x 2.5cm)', value: 0.429}, {key: '1 roll (12.2 x 4.5 x 3cm)', value: 1.214}]},
                {name: 'Spring roll, traditional, with meat, deep fried, Highmark', variant: 'Highmark, Spring Rolls', carb: 22.3, amounts: [{key: '100g', value: 1}, {key: '1 roll (8.4 x 3.1 x 2.5cm)', value: 0.431}, {key: '1 roll (12.2 x 4.5 x 3cm)', value: 1.21}]},
                {name: 'Spring roll, vegetarian, baked, Highmark', variant: 'Highmark, Spring Rolls', carb: 19.2, amounts: [{key: '100g', value: 1}, {key: '1 roll (11.8 x 6 x 2.8cm)', value: 1.084}]}
              ]},
              {name: 'Indian', category: 'Fast Food', carbs: [
                {name: 'Beef korma, takeaway', variant: 'Curry', carb: 5.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.479}]},
                {name: 'Beef madras, takeaway', variant: 'Curry', carb: 4.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.521}]},
                {name: 'Butter chicken, takeaway', variant: 'Curry', carb: 5.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.582}]},
                {name: 'Chicken masala, takeaway', variant: 'Curry', carb: 5.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.488}]},
                {name: 'Dhal makani, Indian, takeaway', variant: 'Curry', carb: 8.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.596}]},
                {name: 'Rogan josh, Indian, takeaway', variant: 'Curry', carb: 3.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.669}]}
              ]},
              {name: 'Kentucky Fried Chicken', category: 'Fast Food', carbs: [
                {name: 'Chicken, crumbed, breast, deep fried', variant:'Chicken', carb: 6, amounts: [{key: '100g', value: 1}, {key: '1 piece', value: 0.89}]},
                {name: 'Chicken, crumbed, drumstick, deep fried', variant:'Chicken', carb: 8.3, amounts: [{key: '100g', value: 1}, {key: '1 piece', value: 0.775}]},
                {name: 'Chicken, crumbed, thigh, deep fried', variant:'Chicken', carb: 5.9, amounts: [{key: '100g', value: 1}, {key: '1 piece', value: 0.82}]},
                {name: 'Chicken, crumbed, wing, deep fried', variant:'Chicken', carb: 6.9, amounts: [{key: '100g', value: 1}, {key: '1 piece', value: 0.37}]},
                {name: 'Coleslaw, Kentucky Fried Chicken', variant: 'Coleslaw', carb: 13.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2}]},
                {name: 'Fries, potato, Kentucky Fried Chicken', variant: 'Fries', carb: 32, amounts: [{key: '100g', value: 1}, {key: '10 fries', value: 0.69}]},
                {name: 'Potato & gravy, Kentucky Fried Chicken', variant: 'name', carb: 12.1, amounts: [{key: '100g', value: 1}]}
              ]},
              {name: 'McDonald\'s', category: 'Fast Food', carbs: [
                {name: 'Big Mac', variant:'Burger', carb: 19.2, amounts: [{key: '100g', value: 1}, {key: '1 burger', value: 2.04}]},
                {name: 'Filet-o-Fish', variant:'Burger', carb: 24.7, amounts: [{key: '100g', value: 1}, {key: '1 burger', value: 1.36}]},
                {name: 'Quarter Pounder with cheese', variant:'Burger', carb: 16.8, amounts: [{key: '100g', value: 1}, {key: '1 burger', value: 1.85}]},
                {name: 'cheeseburger', variant:'Burger', carb: 25.1, amounts: [{key: '100g', value: 1}, {key: '1 burger', value: 1.37}]},
                {name: 'hamburger', variant:'Burger', carb: 27.3, amounts: [{key: '100g', value: 1}, {key: '1 burger', value: 0.98}]},
                {name: 'Chicken, nugget, deep fried', variant:'Burger', carb: 6, amounts: [{key: '100g', value: 1}, {key: '1 piece', value: 0.89}]},
                {name: 'Fries, potato, McDonald\'s', variant: 'Fries', carb: 37.5, amounts: [{key: '100g', value: 1}, {key: '10 fries', value: 0.69}]},
                {name: 'Pancake, McDonald\'s', variant: 'Breakfast', carb: 28.8, amounts: [{key: '100g', value: 1}, {key: '1 pancake', value: 0.49}]},
                {name: 'Pie, apple, McDonald\'s', variant: 'Pie', carb: 28.4, amounts: [{key: '100g', value: 1}, {key: '1 pie', value: 0.85}]},
                {name: 'Potato, hash brown, McDonald\'s', variant: 'Breakfast', carb: 25.2, amounts: [{key: '100g', value: 1}, {key: '1 piece', value: 0.68}]},
                {name: 'Sundae, ice cream, chocolate topping, McDonald\'s', variant: 'name', carb: 30.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.75}]}
              ]},
              {name: 'Meat Pies', category: 'Fast Food', carbs: [
                {name: 'Pie, mince, family size', variant: 'Mince', carb: 19.4, amounts: [{key: '100g', value: 1}, {key: '1 pie (4 x 18.5cm diameter)', value: 6.35}]},
                {name: 'Pie, savoury, chicken, individual size, ready to eat', variant: 'Chicken', carb: 20.4, amounts: [{key: '100g', value: 1}, {key: '1 pie (3.7 x bottom 9.2 x top 11.3cm diameters)', value: 2.29}]},
                {name: 'Pie, savoury, egg & bacon, individual size, ready to eat', variant: 'Bacon & Egg', carb: 19, amounts: [{key: '100g', value: 1}, {key: '1 pie (3.9 x bottom 8.9 x top 11.0cm diameters)', value: 1.954}]},
                {name: 'Pie, savoury, mince & cheese, individual size, ready to eat', variant: 'Mince & Cheese', carb: 19.1, amounts: [{key: '100g', value: 1}, {key: '1 pie (3.6 x bottom 8.9 x top 11.1cm diameters)', value: 2.208}]}
              ]},
              {name: 'Savouries', category: 'Fast Food', carbs: [
                {name: 'Sausage roll, individual size, microwaved', variant: 'Sausage Roll', carb: 28.4, amounts: [{key: '100g', value: 1}, {key: '1 sausage roll (9.5 x 4.5 x 2.9cm)', value: 1.096}]},
                {name: 'Sausage roll, party size, baked', variant: 'Sausage Roll', carb: 25.1, amounts: [{key: '100g', value: 1}, {key: '1 sausage roll (5.2 x 3.9 x 3.3cm)', value: 0.408}]},
                {name: 'Sausage roll, with cheese, baked', variant: 'Sausage Roll', carb: 24.7, amounts: [{key: '100g', value: 1}, {key: '1 sausage roll (5.1 x 4 x 3.6cm)', value: 0.368}]},
                {name: 'Savoury, bacon & egg, baked', variant: 'Savoury', carb: 17.9, amounts: [{key: '100g', value: 1}, {key: '1 savoury (2.3 x 5.3cm diameter)', value: 0.449}]},
                {name: 'Savoury, mince & cheese, heated', variant: 'Savoury', carb: 23.3, amounts: [{key: '100g', value: 1}, {key: '1 savoury (2.7 x 5.1cm diameter)', value: 0.594}]},
                {name: 'Savoury, mince, heated', variant: 'Savoury', carb: 22.9, amounts: [{key: '100g', value: 1}, {key: '1 savoury (2.6 x 5.6cm diameter)', value: 0.532}]},
                {name: 'Savoury, potato top, heated', variant: 'Savoury', carb: 21.3, amounts: [{key: '100g', value: 1}, {key: '1 savoury (2.8 x 5.6cm diameter)', value: 0.592}]}
              ]},
              {name: 'Pizza', category: 'Fast Food', carbs: [
                {name: 'Hawaiian, thick crust', variant: 'name', carb: 33.7, amounts: [{key: '100g', value: 1}, {key: '1 pizza (2.25 x 28.3cm diameter)', value: 7.42}]},
                {name: 'barbeque chicken, thick crust', variant: 'name', carb: 33.5, amounts: [{key: '100g', value: 1}, {key: '1 pizza (2.35 x 28.2cm diameter)', value: 7.15}]},
                {name: 'meat, thick crust', variant: 'name', carb: 33.3, amounts: [{key: '100g', value: 1}, {key: '1 pizza (2.35 x 27.8cm diameter)', value: 7}]},
                {name: 'supreme, thin crust, Pizza Hut', variant: 'name', carb: 22.9, amounts: [{key: '100g', value: 1}, {key: '1 pizza', value: 3.84}]}
              ]},
              {name: 'Thai', category: 'Fast Food', carbs: [
                {name: 'Beef salad, takeaway', variant:'Beef', carb: 7.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.14}]},
                {name: 'Chicken, green, Thai, takeaway', variant: 'Chicken Curries', carb: 5.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.49}]},
                {name: 'Noodle, pad thai with chicken & egg, Thai, takeaway', variant: 'Noodle', carb: 16, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.32}]},
                {name: 'Soup, tom yam gai, chicken, Thai, takeaway', variant: 'Soup', carb: 1.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.35}]}
              ]},
              {name: 'Other', category: 'Fast Food', carbs: [
                {name: 'cheeseburger', variant:'Burger', carb: 21.4, amounts: [{key: '100g', value: 1}, {key: '1 burger', value: 2.55}]},
                {name: 'hamburger', variant:'Burger', carb: 22.4, amounts: [{key: '100g', value: 1}, {key: '1 burger', value: 1.72}]},
                {name: 'Fries, potato, straight cut, Independent Shops', variant: 'Fries', carb: 26.7, amounts: [{key: '100g', value: 1}, {key: '10 fries', value: 0.69}]},
                {name: 'Saveloy, battered, fried, Independent Shops', variant: 'name', carb: 18.4, amounts: [{key: '100g', value: 1}, {key: '1 sausage', value: 1.38}]}
              ]},
              /** Fats and Oils */
              {name: 'Zero Carbs', category: 'Fats and Oils', carbs: [
                {name: 'Coconut oil', variant: 'name', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.138}]},
                {name: 'Dripping, beef, Farmland', variant: 'name', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.035}]},
                {name: 'Lard', variant: 'name', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.12}]},
                {name: 'Margarine, canola, monounsaturated, 50% fat', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.048}]},
                {name: 'Margarine, canola, monounsaturated, 70% fat', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.048}]},
                {name: 'Margarine, catering, Choice', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.048}]},
                {name: 'Margarine, light, Logical', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.049}]},
                {name: 'Margarine, light, monounsaturated, 55% fat, Olivani', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.047}]},
                {name: 'Margarine, light, polyunsaturated, 50% fat, Flora, fortified', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.048}]},
                {name: 'Margarine, monounsaturated, 75% fat, Olivani', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.047}]},
                {name: 'Margarine, original, Flora, fortified', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.045}]},
                {name: 'Margarine, polyunsaturated, 60% fat, Sunrise', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.048}]},
                {name: 'Margarine, polyunsaturated, 70% fat, fortified', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.048}]},
                {name: 'Margarine, polyunsaturated, 70% fat, reduced salt, fortified', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.048}]},
                {name: 'Margarine, rice bran, Alfa One', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.048}]},
                {name: 'Margarine, rice bran, light, Alfa One', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.048}]},
                {name: 'Margarine, summer gold, canola, monounsaturated, 70% fat, Pams', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.048}]},
                {name: 'Margarine, summer gold, lite, canola, monounsaturated, 50% fat, Pams', variant: 'Margarine', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.048}]},
                {name: 'Oil, avocado', variant: 'Oil', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.145}]},
                {name: 'Oil, canola', variant: 'Oil', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.141}]},
                {name: 'Oil, corn', variant: 'Oil', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.14}]},
                {name: 'Oil, flaxseed', variant: 'Oil', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.14}]},
                {name: 'Oil, rice bran', variant: 'Oil', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.14}]},
                {name: 'Oil, safflower', variant: 'Oil', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.14}]},
                {name: 'Oil, sesame', variant: 'Oil', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.143}]},
                {name: 'Oil, soya bean', variant: 'Oil', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.142}]},
                {name: 'Oil, sunflower', variant: 'Oil', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.139}]},
                {name: 'Oil, vegetable, blend', variant: 'Oil', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.14}]},
                {name: 'Shortening, Chefade', variant: 'Shortening', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.12}]},
                {name: 'Shortening, vegetable, Kremelta', variant: 'Shortening', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.042}]}
              ]},
              {name: 'Small amount of Carbs', category: 'Fats and Oils', carbs: [
                {name: 'Oil, olive', variant: 'Oil', carb: 0.2, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.14}]},
                {name: 'Semi soft butter, butter & canola oil, spreadable', variant: 'Spreadable butter', carb: 1.4, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.048}]},
                {name: 'Shortening, suet, Shreddo', variant: 'Shortening', carb: 11.4, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.026}]}
              ]},
              /** Fin Fishes */
              {name: 'Zero carbs', category: 'Fin Fishes', carbs: [
                {name: 'Basa, fillet, frozen, flesh, pan-fried with oil, no salt added', variant: 'Catfish', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 fillet (19.6 x 8.2 x 1cm)', value: 1.593}]},
                {name: 'Eel, smoked', variant: 'Eel', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup flaked (250mL)', value: 1.44}]},
                {name: 'Hoki, fillet, frozen, flesh, pan-fried with oil, no salt added', variant: 'Hoki', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 fillet (9.6 x 5.6 x 1.6cm)', value: 1.593}]},
                {name: 'Salmon, king, fillet, flesh, cold or hot  smoked, New Zealand', variant: 'Salmon', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup pieces (250mL)', value: 1.704}, {key: '1 cup flaked (250mL)', value: 1.963}, {key: '1 fillet (15.8 x 6.1 x 2.1cm)', value: 1.635}]},
                {name: 'Salmon, king, fillet, skin & bones removed, fresh, baked without fat, no salt added, New Zealand', variant: 'Salmon', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 fillet (14.7 x 6.6 x 2.8cm)', value: 1.992}]},
                {name: 'Salmon, king, fillet, skin & bones removed, fresh, pan-fried with oil, New Zealand', variant: 'Salmon', carb: 0.01, amounts: [{key: '100g', value: 1}, {key: '1 fillet (15.1 x 5.0 x 2.7cm)', value: 1.722}]},
                {name: 'Salmon, king, fillet, skin & bones removed, fresh, raw, New Zealand', variant: 'Salmon', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 fillet (18.2 x 7.0 x 2.8cm)', value: 1.882}]},
                {name: 'Salmon, king, fillet, skin & bones removed, fresh, steamed, New Zealand', variant: 'Salmon', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 fillet (15.2 x 5.1 x 2.9cm)', value: 1.447}]},
                {name: 'Salmon, pink or red, flesh, canned in spring water, drained', variant: 'Salmon', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.506}]},
                {name: 'Tuna, canned in assorted oil, plain, undrained', variant: 'Canned Tuna', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.284}]},
                {name: 'Tuna, canned in assorted oils, plain, drained', variant: 'Canned Tuna', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.544}]},
                {name: 'Tuna, canned in brine, plain, drained', variant: 'Canned Tuna', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.514}]},
                {name: 'Tuna, canned in spring water, plain, salt added, drained', variant: 'Canned Tuna', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.549}]},
                {name: 'Tuna, canned in spring water, plain, salt added, undrained', variant: 'Canned Tuna', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.495}]},
                {name: 'Tuna, in brine, plain, canned, undrained', variant: 'Canned Tuna', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.508}]}
              ]},
              {name: 'Small amount of carbs', category: 'Fin Fishes', carbs: [
                {name: 'Flounder, flesh, baked', variant: 'Flounder', carb: 0.3, amounts: [{key: '100g', value: 1}, {key: '1 cup flaked (250mL)', value: 1.44}]},
                {name: 'Hoki, flesh, baked', variant: 'Hoki', carb: 0.3, amounts: [{key: '100g', value: 1}, {key: '1 cup flaked (250mL)', value: 1.44}]},
                {name: 'Hoki, flesh, deep fried', variant: 'Hoki', carb: 0.2, amounts: [{key: '100g', value: 1}, {key: '1 cup flaked (250mL)', value: 1.44}]},
                {name: 'Kahawai, flesh, baked', variant: 'Kahawai', carb: 0.4, amounts: [{key: '100g', value: 1}, {key: '1 cup flaked (250mL)', value: 1.44}]},
                {name: 'Kahawai, flesh, deep fried', variant: 'Kahawai', carb: 0.3, amounts: [{key: '100g', value: 1}]},
                {name: 'Orange roughy, flesh, baked', variant: 'Orange roughy', carb: 0.3, amounts: [{key: '100g', value: 1}, {key: '1 cup flaked (250mL)', value: 1.44}]},
                {name: 'Orange roughy, flesh, deep fried', variant: 'Orange roughy', carb: 0.3, amounts: [{key: '100g', value: 1}, {key: '1 cup flaked (250mL)', value: 1.44}]},
                {name: 'Sardines, canned, drained', variant: 'Sardines', carb: 0.3, amounts: [{key: '100g', value: 1}, {key: '1 sardine', value: 0.12}, {key: '1 cup (250mL)', value: 2.012}]},
                {name: 'Snapper, flesh, baked', variant: 'Snapper', carb: 0.4, amounts: [{key: '100g', value: 1}, {key: '1 cup flaked (250mL)', value: 1.44}]},
                {name: 'Snapper, flesh, deep fried', variant: 'Snapper', carb: 0.3, amounts: [{key: '100g', value: 1}, {key: '1 cup flaked (250mL)', value: 1.44}]},
                {name: 'Snapper, flesh, microwaved', variant: 'Snapper', carb: 0.4, amounts: [{key: '100g', value: 1}, {key: '1 cup flaked (250mL)', value: 1.44}]},
                {name: 'Tarakihi, flesh, baked', variant: 'Tarakihi', carb: 0.3, amounts: [{key: '100g', value: 1}, {key: '1 cup flaked (250mL)', value: 1.44}]},
                {name: 'Tarakihi, flesh, deep fried', variant: 'Tarakihi', carb: 0.2, amounts: [{key: '100g', value: 1}, {key: '1 cup flaked (250mL)', value: 1.44}]}
              ]},
              {name: 'Noticeable amount of carbs', category: 'Fin Fishes', carbs: [
                {name: 'Tuna, canned in oil, assorted flavours, undrained', variant: 'Canned Tuna', carb: 2.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.542}]},
                {name: 'Tuna, canned in water, assorted flavours, undrained', variant: 'Canned Tuna', carb: 4.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.532}]},
                {name: 'Salmon, assorted flavours, canned, undrained', variant: 'Canned Salmon', carb: 1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.543}]}
              ]},
              /** Fruits */
              {name: 'Brined Fruit', category: 'Fruits', carbs: [
                {name: 'Olive, in brine', variant: 'Olive', carb: 1.8, amounts: [{key: '100g', value: 1}, {key: '1 olive', value: 0.028}]}
              ]},
              {name: 'Canned Fruit', category: 'Fruits', carbs: [
                {name: 'Apricot, canned in juice, undrained', variant: 'Apricot', carb: 9.4, amounts: [{key: '100g', value: 1}, {key: '1 cup halves (250mL)', value: 2.613}]},
                {name: 'Apricot, canned in syrup, drained', variant: 'Apricot', carb: 13.4, amounts: [{key: '100g', value: 1}, {key: '1 half', value: 0.123}, {key: '1 cup halves (250mL)', value: 2.547}]},
                {name: 'Apricot, canned in syrup, undrained', variant: 'Apricot', carb: 14.2, amounts: [{key: '100g', value: 1}, {key: '1 cup halves (250mL)', value: 2.635}]},
                {name: 'Fruit salad, canned in syrup, undrained', variant: 'Fruit salad', carb: 16.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.707}]},
                {name: 'Lychee, canned in syrup, undrained', variant: 'Lychee', carb: 17.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.67}]},
                {name: 'Mango, canned in syrup, undrained', variant: 'Mango', carb: 16.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.6}]},
                {name: 'Peach, canned in juice, undrained', variant: 'Peach', carb: 10.9, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 2.834}]},
                {name: 'Pear, canned in juice, undrained', variant: 'Pear', carb: 8.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.58}]},
                {name: 'Pineapple, canned in juice, drained', variant: 'Pineapple', carb: 12.3, amounts: [{key: '100g', value: 1}, {key: '1 cup chunk or pieces (250mL)', value: 2.176}, {key: '1 cup crushed (250mL)', value: 2.514}]},
                {name: 'Pineapple, canned in syrup, drained', variant: 'Pineapple', carb: 16.6, amounts: [{key: '100g', value: 1}, {key: '1 cup chunk or pieces (250mL)', value: 2.176}, {key: '1 slice (0.8 x 7.4cm diameter)', value: 0.349}, {key: '1 cup crushed (250mL)', value: 2.514}]},
                {name: 'Pineapple, canned in syrup, undrained', variant: 'Pineapple', carb: 16.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.767}]},
                {name: 'Plum, canned in syrup, drained', variant: 'Plum', carb: 29.9, amounts: [{key: '100g', value: 1}, {key: '1 plum', value: 0.49}, {key: '1 cup (250mL)', value: 1.69}]}
              ]},
              {name: 'Cooked Fruit', category: 'Fruits', carbs: [
                {name: 'Apple, cooking, flesh, stewed', variant: 'Apple', carb: 8.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.8}]},
                {name: 'Banana, cooking, boiled', variant: 'Banana', carb: 26.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.01}]},
                {name: 'Plum, cooking, stewed', variant: 'Plum', carb: 6.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.63}]},
                {name: 'Rhubarb, stewed with sugar', variant: 'Rhubarb', carb: 10.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.7}]},
                {name: 'Rhubarb, stewed without sugar', variant: 'Rhubarb', carb: 1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.65}]}
              ]},
              {name: 'Dried Fruit', category: 'Fruits', carbs: [
                {name: 'Apricot, dried, composite', variant: 'Apricot', carb: 35.8, amounts: [{key: '100g', value: 1}, {key: '5 halves', value: 0.383}, {key: '1 cup halves (250mL)', value: 2.291}]},
                {name: 'Cranberry, dried, sweetened', variant: 'Cranberry', carb: 65, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.281}]},
                {name: 'Currant, dried', variant: 'Currant', carb: 66.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.54}]},
                {name: 'Date, dried', variant: 'Date', carb: 67.9, amounts: [{key: '100g', value: 1}, {key: '10 dates pitted', value: 0.83}, {key: '1 cup (250mL)', value: 1.88}]},
                {name: 'Fig, dried', variant: 'Fig', carb: 54.5, amounts: [{key: '100g', value: 1}, {key: '1 fig', value: 0.16}, {key: '1 cup (250mL)', value: 2.1}]},
                {name: 'Prune, dried', variant: 'Prune', carb: 32.5, amounts: [{key: '100g', value: 1}, {key: '10 prunes', value: 0.84}]},
                {name: 'Prune, dried, stewed', variant: 'Prune', carb: 19.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.24}]},
                {name: 'Raisin, seedless', variant: 'Raisin', carb: 66.9, amounts: [{key: '100g', value: 1}, {key: '20 raisins', value: 0.087}, {key: '1 cup (250mL)', value: 1.373}]},
                {name: 'Sultana', carb: 75, variant: 'Sultana', amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.53}]}
              ]},
              {name: 'Frozen Berries', category: 'Fruits', carbs: [
                {name: 'Blackcurrant, Ben Ard, frozen', variant: 'Blackcurrant', carb: 8.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.57}]},
                {name: 'Blackcurrant, puree, frozen', variant: 'Blackcurrant', carb: 7.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.821}]},
                {name: 'Blueberry, frozen', variant: 'Blueberry', carb: 9.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.593}]},
                {name: 'Boysenberry, frozen', variant: 'Boysenberry', carb: 6.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.72}]},
                {name: 'Fruit mix, dried', variant: 'Fruit mix', carb: 67.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.74}]},
                {name: 'Raspberry, Meeker, frozen', variant: 'Raspberry', carb: 5.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.707}]},
                {name: 'Raspberry, Wakefield, frozen', variant: 'Raspberry', carb: 5.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.664}]}
              ]},
              {name: 'Fruit', category: 'Fruits', carbs: [
                {name: 'Apple, flesh & skin, raw, combined varieties', variant: 'Apple', carb: 10.7, amounts: [{key: '100g', value: 1}, {key: '1 fruit (7.0cm diameter)', value: 1.632}]},
                {name: 'Apple, flesh, raw, combined varieties', variant: 'Apple', carb: 10.4, amounts: [{key: '100g', value: 1}, {key: '1 fruit (7.0cm diameter)', value: 1.436}]},
                {name: 'Apricot, flesh & skin, raw', variant: 'Apricot', carb: 8.4, amounts: [{key: '100g', value: 1}, {key: '1 apricot', value: 0.54}]},
                {name: 'Apricot, flesh & skin, stewed', variant: 'Apricot', carb: 5.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.6}]},
                {name: 'Avocado, Hass, New Zealand', variant: 'Avocado', carb: 0.1, amounts: [{key: '100g', value: 1}, {key: '1 fruit small (7.8 x 5.7cm diameter)', value: 1.22}, {key: '1 fruit large', value: 1.731}, {key: '1 cup puree (250mL)', value: 2.477}]},
                {name: 'Banana, yellow, ripened, raw', variant: 'Banana', carb: 20.8, amounts: [{key: '100g', value: 1}, {key: '1 fruit medium (19-20cm long)', value: 1.108}]},
                {name: 'Blackberry, raw', variant: 'Blackberry', carb: 10.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.23}]},
                {name: 'Blackcurrant, raw', variant: 'Blackcurrant', carb: 14.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.18}]},
                {name: 'Blueberry, raw', variant: 'Blueberry', carb: 9.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.569}]},
                {name: 'Boysenberry, puree, seedless, frozen', variant: 'Boysenberry', carb: 7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.647}]},
                {name: 'Boysenberry, raw', variant: 'Boysenberry', carb: 7.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.33}]},
                {name: 'Cherry, flesh & skin, raw', variant: 'Cherry', carb: 14, amounts: [{key: '100g', value: 1}, {key: '10 cherries', value: 0.67}, {key: '1 cup (250mL)', value: 1.5}]},
                {name: 'Feijoa, flesh, raw', variant: 'Feijoa', carb: 8, amounts: [{key: '100g', value: 1}, {key: '1 feijoa (7.0 x 4.4cm diameter)', value: 0.422}, {key: '1 cup (250mL)', value: 2.6}]},
                {name: 'Gooseberry, flesh, skin & seeds, raw', variant: 'Gooseberry', carb: 9.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.58}]},
                {name: 'Grape, black, flesh, raw', variant: 'Grape', carb: 15.5, amounts: [{key: '100g', value: 1}, {key: '10 grapes', value: 0.54}, {key: '1 cup (250mL)', value: 1.72}]},
                {name: 'Grape, white, flesh & skin, raw', variant: 'Grape', carb: 16.1, amounts: [{key: '100g', value: 1}, {key: '10 grapes', value: 0.764}, {key: '1 cup (250mL)', value: 1.69}]},
                {name: 'Grape, red or green, seedless, raw, European type', variant: 'Grape', carb: 15.5, amounts: [{key: '100g', value: 1}, {key: '10 grapes', value: 0.5}]},
                {name: 'Grapefruit, flesh, raw', variant: 'Grapefruit', carb: 5, amounts: [{key: '100g', value: 1}, {key: '1 grapefruit (6.8cm diameter)', value: 2.36}]},
                {name: 'Juice, lemon, raw', variant: 'Juice', carb: 1.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.16}]},
                {name: 'Juice, orange, raw', variant: 'Juice', carb: 9.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.58}]},
                {name: 'Kiwifruit, Zespri Gold (Hort16A) Kiwifruit, Zespri, raw', variant: 'Kiwifruit', carb: 11.1, amounts: [{key: '100g', value: 1}, {key: '1 fruit large', value: 0.83}]},
                {name: 'Kiwifruit, Zespri Green (Hayward) Kiwifruit, Zespri, raw', variant: 'Kiwifruit', carb: 9.1, amounts: [{key: '100g', value: 1}, {key: '1 fruit large', value: 0.741}]},
                {name: 'Kiwifruit, Zespri Organic Green (Hayward) Kiwifruit, Zespri, raw', variant: 'Kiwifruit', carb: 10.6, amounts: [{key: '100g', value: 1}, {key: '1 kiwifruit', value: 0.79}]},
                {name: 'Kiwifruit, Zespri SunGold Kiwifruit (Gold3), Zespri, raw', variant: 'Kiwifruit', carb: 12.4, amounts: [{key: '100g', value: 1}, {key: '1 fruit large', value: 0.808}]},
                {name: 'Kiwifruit, Zespri Sweet Green Kiwifruit (Green14), Zespri, raw', variant: 'Kiwifruit', carb: 12.3, amounts: [{key: '100g', value: 1}, {key: '1 fruit large', value: 0.809}]},
                {name: 'Lemon, flesh, raw', variant: 'Lemon', carb: 2.1, amounts: [{key: '100g', value: 1}, {key: '1 lemon (4.7cm diameter)', value: 0.645}]},
                {name: 'Mandarin, flesh, raw', variant: 'Mandarin', carb: 9.9, amounts: [{key: '100g', value: 1}, {key: '1 mandarin (5-6 cm diameter)', value: 0.86}]},
                {name: 'Mango, flesh, raw', variant: 'Mango', carb: 14.6, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.76}, {key: '1 mango', value: 2.867}]},
                {name: 'Melon, Honeydew, flesh, raw', variant: 'Melon', carb: 9.8, amounts: [{key: '100g', value: 1}, {key: '1 cup diced (250mL)', value: 1.72}]},
                {name: 'Melon, rock, flesh, raw', variant: 'Melon', carb: 6.3, amounts: [{key: '100g', value: 1}, {key: '1 cup diced (250mL)', value: 1.68}]},
                {name: 'Nectarine, flesh & skin, raw', variant: 'Nectarine', carb: 7.8, amounts: [{key: '100g', value: 1}, {key: '1 fruit large', value: 1.43}]},
                {name: 'Orange, flesh, raw, USA', variant: 'Orange', carb: 8.5, amounts: [{key: '100g', value: 1}, {key: '1 fruit (7.3cm diameter)', value: 1.494}]},
                {name: 'Passion fruit, flesh & seed, raw', variant: 'Passion fruit', carb: 7.4, amounts: [{key: '100g', value: 1}, {key: '1 passionfruit', value: 0.18}]},
                {name: 'Peach, flesh & skin, raw', variant: 'Peach', carb: 7.3, amounts: [{key: '100g', value: 1}, {key: '1 fruit large', value: 1.38}]},
                {name: 'Pear, nashi, flesh, raw', variant: 'Pear', carb: 9.6, amounts: [{key: '100g', value: 1}, {key: '1 nashi pear (7cm diameter)', value: 2.033}]},
                {name: 'Pear, flesh & skin, raw', variant: 'Pear', carb: 10, amounts: [{key: '100g', value: 1}, {key: '1 fruit large', value: 1.22}]},
                {name: 'Persimmon, flesh, raw', variant: 'Persimmon', carb: 15.9, amounts: [{key: '100g', value: 1}, {key: '1 persimmon', value: 0.75}]},
                {name: 'Pineapple, flesh, raw', variant: 'Pineapple', carb: 11.4, amounts: [{key: '100g', value: 1}, {key: '1 slice (1.5 x 9.0cm diameter)', value: 1.1}, {key: '1 cup chopped (250mL)', value: 1.64}]},
                {name: 'Plum, Royal Star, flesh, raw', variant: 'Plum', carb: 10.3, amounts: [{key: '100g', value: 1}, {key: '1 fruit large', value: 0.951}]},
                {name: 'Plum, flesh & skin, raw', variant: 'Plum', carb: 13.9, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.74}]},
                {name: 'Strawberry, raw, New Zealand', variant: 'Strawberry', carb: 6.6, amounts: [{key: '100g', value: 1}, {key: '1 fruit large', value: 0.12}, {key: '1 cup (250mL)', value: 1.754}]},
                {name: 'Tamarillo, red, flesh & seed, raw', variant: 'Tamarillo', carb: 3.8, amounts: [{key: '100g', value: 1}, {key: '1 fruit large', value: 0.6}]},
                {name: 'Tangelo, flesh, raw', variant: 'Tangelo', carb: 7.8, amounts: [{key: '100g', value: 1}, {key: '1 fruit large', value: 0.9}]},
                {name: 'Tangerine, flesh, raw', variant: 'Tangerine', carb: 7.7, amounts: [{key: '100g', value: 1}, {key: '1 fruit large', value: 0.84}]},
                {name: 'Watermelon, flesh, raw', variant: 'Watermelon', carb: 7.6, amounts: [{key: '100g', value: 1}, {key: '1 cup cubed (250mL)', value: 2.011}, {key: '1 wedge (1/12 of fruit)', value: 2.668}]}
              ]},
              {name: 'Bacon & Pork', category: 'Meat Products', carbs: [
                {name: 'Bacon rasher, rindless, pan fried with no added fat, assorted types', variant: 'Bacon rasher', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 rasher (streaky bacon)', value: 0.085}, {key: '1 rasher (middle or shoulder bacon)', value: 0.238}]},
                {name: 'Ham, sliced', variant: 'Ham', carb: 1.8, amounts: [{key: '100g', value: 1}, {key: '1 slice (10.0 x 10.0 x 0.3cm)', value: 0.29}]}
              ]},
              {name: 'Beef', category: 'Meat Products', carbs: [
                {name: 'Beef, pastrami', variant: 'pastrami', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 slice', value: 0.28}]}
              ]},
              {name: 'Nugget', category: 'Meat Products', carbs: [
                {name: 'Chicken, nugget, crumbed, baked', variant: 'Chicken', carb: 16, amounts: [{key: '100g', value: 1}, {key: '1 piece', value: 0.206}]},
                {name: 'Chicken, nugget, crumbed, deep fried', variant: 'Chicken', carb: 14.5, amounts: [{key: '100g', value: 1}, {key: '1 nugget (5.5 x 3.6 x 1.5cm)', value: 0.175}]}
              ]},
              {name: 'Frozen Meal', category: 'Meat Products', carbs: [
                {name: 'roast beef with mashed potato & vegetables, microwaved, Wattie\'s', variant: 'Frozen meal', carb: 12.7, amounts: [{key: '100g', value: 1}, {key: '1 single meal', value: 4.253}]},
                {name: 'roast beef with roast potato & vegetables, microwaved', variant: 'Frozen meal', carb: 12.7, amounts: [{key: '100g', value: 1}, {key: '1 single meal', value: 3.953}]},
                {name: 'roast lamb with roast potato & vegetables, microwaved', variant: 'Frozen meal', carb: 8.8, amounts: [{key: '100g', value: 1}, {key: '1 single meal', value: 3.835}]},
                {name: 'roast pork with mashed potato & vegetables, microwaved, Wattie\'s', variant: 'Frozen meal', carb: 10.8, amounts: [{key: '100g', value: 1}, {key: '1 single meal', value: 4.402}]}
              ]},
              {name: 'Pate', category: 'Meat Products', carbs: [
                {name: 'chicken liver', variant: 'chicken liver', carb: 1.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.14}]},
                {name: 'pork liver', variant: 'pork liver', carb: 0.8, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.14}]}
              ]},
              {name: 'Pie', category: 'Meat Products', carbs: [
                {name: 'Cornish pasty', variant: 'Cornish pasty', carb: 28.4, amounts: [{key: '100g', value: 1}, {key: '1 pasty', value: 1.4}]},
                {name: 'pork', variant: 'Pie', carb: 22.9, amounts: [{key: '100g', value: 1}, {key: '1 pie (3 x 10cm diameter)', value: 1.9}]}
              ]},
              {name: 'Sausage', category: 'Meat Products', carbs: [
                {name: 'assorted meats & flavours, dry fried', variant: 'assorted meats & flavours', carb: 7.3, amounts: [{key: '100g', value: 1}, {key: '1 sausage (11.8 x 3.0cm)', value: 0.78}]},
                {name: 'assorted meats & flavours, grilled', variant: 'assorted meats & flavours', carb: 9, amounts: [{key: '100g', value: 1}, {key: '1 sausage', value: 0.78}]},
                {name: 'assorted meats & flavours, precooked, grilled', variant: 'assorted meats & flavours', carb: 9.3, amounts: [{key: '100g', value: 1}, {key: '1 sausage', value: 0.7}]},
                {name: 'beef, barbecued, with no added fat', variant: 'beef', carb: 2.8, amounts: [{key: '100g', value: 1}, {key: '1 sausage (8.3 x 2.2cm diameter)', value: 0.299}, {key: '1 sausage (10.1 x 2.8cm diameter)', value: 0.619}]},
                {name: 'beef, boiled, drained', variant: 'beef', carb: 2.5, amounts: [{key: '100g', value: 1}, {key: '1 sausage (8.8 x 1.9cm diameter)', value: 0.572}, {key: '1 sausage (10.3 x 3.1cm diameter)', value: 0.722}]},
                {name: 'beef, grilled, with no added fat', variant: 'beef', carb: 2.8, amounts: [{key: '100g', value: 1}, {key: '1 sausage (8.3 x 2.2cm diameter)', value: 0.299}, {key: '1 sausage (10.1 x 2.8cm diameter)', value: 0.619}]},
                {name: 'beef, pan fried, with no added fat', variant: 'beef', carb: 2.9, amounts: [{key: '100g', value: 1}, {key: '1 sausage (8.3 x 2.2cm diameter)', value: 0.299}, {key: '1 sausage (10.1 x 2.8cm diameter)', value: 0.619}]},
                {name: 'black pudding, fried', variant: 'black pudding', carb: 13.7, amounts: [{key: '100g', value: 1}, {key: '1 slice (4 x 2cm diameter)', value: 0.3}]},
                {name: 'chicken, barbecued, with no added fat', variant: 'chicken', carb: 5, amounts: [{key: '100g', value: 1}, {key: '1 sausage (8.4 x 1.7cm diameter)', value: 0.232}, {key: '1 sausage (12.2 x 2.6cm diameter)', value: 0.706}]},
                {name: 'chicken, boiled, drained', variant: 'chicken', carb: 4.5, amounts: [{key: '100g', value: 1}, {key: '1 sausage (8.5 x 1.9cm diameter)', value: 0.26}, {key: '1 sausage (12.1 x 2.7cm diameter)', value: 0.712}]},
                {name: 'chicken, grilled, with no added fat', variant: 'chicken', carb: 5.4, amounts: [{key: '100g', value: 1}, {key: '1 sausage (8.4 x 1.7cm diameter)', value: 0.232}, {key: '1 sausage (12.2 x 2.6cm diameter)', value: 0.706}]},
                {name: 'chicken, pan fried, with no added fat', variant: 'chicken', carb: 4.9, amounts: [{key: '100g', value: 1}, {key: '1 sausage (8.4 x 1.7cm diameter)', value: 0.232}, {key: '1 sausage (12.2 x 2.6cm diameter)', value: 0.706}]},
                {name: 'frankfurters, precooked', variant: 'frankfurters', carb: 2.7, amounts: [{key: '100g', value: 1}, {key: '1 frankfurter (12.5 x 2.5cm diameter)', value: 0.57}]},
                {name: 'lamb, barbecued, with no added fat', variant: 'lamb', carb: 2.5, amounts: [{key: '100g', value: 1}, {key: '1 sausage (11.3 x 2.8cm diameter)', value: 0.751}]},
                {name: 'lamb, boiled, drained', variant: 'lamb', carb: 2.2, amounts: [{key: '100g', value: 1}, {key: '1 sausage (11.3 x 3.0cm diameter)', value: 0.824}]},
                {name: 'lamb, grilled, with no added fat', variant: 'lamb', carb: 2.5, amounts: [{key: '100g', value: 1}, {key: '1 sausage (11.3 x 2.8cm diameter)', value: 0.751}]},
                {name: 'lamb, pan fried, with no added fat', variant: 'lamb', carb: 2.4, amounts: [{key: '100g', value: 1}, {key: '1 sausage (11.3 x 2.8cm diameter)', value: 0.751}]},
                {name: 'pork, barbecued, with no added fat', variant: 'pork', carb: 2.2, amounts: [{key: '100g', value: 1}, {key: '1 sausage (10.5 x 2.8cm diameter)', value: 0.696}]},
                {name: 'pork, boiled, drained', variant: 'pork', carb: 2, amounts: [{key: '100g', value: 1}, {key: '1 sausage (10.4 x 3.0cm diameter)', value: 0.756}]},
                {name: 'pork, grilled, with no added fat', variant: 'pork', carb: 2.2, amounts: [{key: '100g', value: 1}, {key: '1 sausage (10.5 x 2.8cm diameter)', value: 0.696}]},
                {name: 'pork, pan fried, with no added fat', variant: 'pork', carb: 2.2, amounts: [{key: '100g', value: 1}, {key: '1 sausage (10.5 x 2.8cm diameter)', value: 0.696}]},
                {name: 'salami assorted meats & flavours', variant: 'salami assorted meats & flavours', carb: 0.6, amounts: [{key: '100g', value: 1}, {key: '1 slice (0.2 x 7.4cm diameter)', value: 0.079}]},
                {name: 'salami assorted meats & flavours, acidulated, heat treated', variant: 'salami assorted meats & flavours', carb: 0.7, amounts: [{key: '100g', value: 1}, {key: '1 slice (0.2 x 7.8cm diameter)', value: 0.083}]},
                {name: 'saveloy, boiled', variant: 'saveloy', carb: 5, amounts: [{key: '100g', value: 1}, {key: '1 saveloy', value: 0.85}]}
              ]},
              {name: 'Miscellaneous', category: 'Miscellaneous', carbs: [
                {name: 'Coffee whitener, powder', variant: 'Coffee whitener', carb: 54.9, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.081}]},
                {name: 'Salt, table, iodised', variant: 'Salt', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.054}]},
                {name: 'Salt, table, uniodised', variant: 'Salt', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.054}]},
                {name: 'Seed, poppy', variant: 'Seed', carb: 3.2, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.03}]},
                {name: 'Spread, yeast extract, Marmite, Sanitarium, fortified', variant: 'Spread', carb: 14.5, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.058}]},
                {name: 'Spread, yeast extract, Vegemite, Kraft, fortified', variant: 'Spread', carb: 3.1, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.051}]},
                {name: 'Stock, Oxo cubes', variant: 'Stock', carb: 11.1, amounts: [{key: '100g', value: 1}, {key: '1 cube (2cm)', value: 0.063}]},
                {name: 'Vinegar', variant: 'Vinegar', carb: 0.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.153}]},
                {name: 'Vinegar, cider', variant: 'Vinegar', carb: 0.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.15}]},
                {name: 'Yeast, baker\'s, dried', variant: 'Yeast', carb: 3.2, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.041}]}
              ]},
              {name: 'Coconut', category: 'Nuts and Seeds', carbs: [
                {name: 'cream, premium', variant: 'cream', carb: 1.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.552}]},
                {name: 'desiccated', variant: 'desiccated', carb: 6.1, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.066}, {key: '1 cup (250mL)', value: 1.106}]},
                {name: 'flesh, raw', variant: 'flesh', carb: 3.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL) grated', value: 0.94}]},
                {name: 'milk, standard', variant: 'milk', carb: 1.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.502}]}
              ]},
              {name: 'Nuts', category: 'Nuts and Seeds', carbs: [
                {name: 'almond, dry roasted, salt added', variant: 'almond', carb: 5.3, amounts: [{key: '100g', value: 1}, {key: '10 almonds', value: 0.129}]},
                {name: 'almond, dry roasted, unblanched, no salt added', variant: 'almond', carb: 5.6, amounts: [{key: '100g', value: 1}, {key: '10 almonds', value: 0.118}]},
                {name: 'almond, kernels, dried, raw, unblanched', variant: 'almond', carb: 5.7, amounts: [{key: '100g', value: 1}, {key: '10 almonds', value: 0.112}]},
                {name: 'brazilnut, raw', variant: 'brazilnut', carb: 3.8, amounts: [{key: '100g', value: 1}, {key: '10 brazilnuts', value: 0.38}]},
                {name: 'cashew, raw', variant: 'cashew', carb: 16.8, amounts: [{key: '100g', value: 1}, {key: '10 nuts', value: 0.125}]},
                {name: 'cashew, roasted, no salt added', variant: 'cashew', carb: 26.3, amounts: [{key: '100g', value: 1}, {key: '10 nuts', value: 0.124}]},
                {name: 'cashew, roasted, salt added', variant: 'cashew', carb: 26.3, amounts: [{key: '100g', value: 1}, {key: '10 nuts', value: 0.125}]},
                {name: 'hazelnut, whole, skin on, raw', variant: 'hazelnut', carb: 4, amounts: [{key: '100g', value: 1}, {key: '10 kernels', value: 0.11}]},
                {name: 'macadamia, raw', variant: 'macadamia', carb: 4.5, amounts: [{key: '100g', value: 1}, {key: '10 nuts', value: 0.196}]},
                {name: 'macadamia, roasted with oil, salt added', variant: 'macadamia', carb: 10.6, amounts: [{key: '100g', value: 1}, {key: '10 nuts', value: 0.196}]},
                {name: 'mixed, salted', variant: 'mixed', carb: 10.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.5}]},
                {name: 'peanut, all types, dry roasted, no salt added', variant: 'peanut', carb: 13.9, amounts: [{key: '100g', value: 1}, {key: '10 peanuts', value: 0.065}]},
                {name: 'peanut, all types, roasted with oil, no salt added', variant: 'peanut', carb: 13.9, amounts: [{key: '100g', value: 1}, {key: '10 peanuts', value: 0.065}]},
                {name: 'pecan, dried, raw', variant: 'pecan', carb: 13.8, amounts: [{key: '100g', value: 1}, {key: '10 whole nuts', value: 0.211}]},
                {name: 'pine, raw', variant: 'pine', carb: 12.6, amounts: [{key: '100g', value: 1}, {key: '10 nuts', value: 0.016}, {key: '1 tablespoon (15mL)', value: 0.1}]},
                {name: 'pistachio, raw', variant: 'pistachio', carb: 7.7, amounts: [{key: '100g', value: 1}, {key: '10 kernels', value: 0.064}]},
                {name: 'walnut, kernel, halves & pieces, raw', variant: 'walnut', carb: 2.6, amounts: [{key: '100g', value: 1}, {key: '1 cup halves (250mL)', value: 1.148}, {key: '1 cup pieces (250mL)', value: 1.336}]},
                {name: 'almond, roasted with oil, unblanched, no salt added', variant: 'almond', carb: 5.1, amounts: [{key: '100g', value: 1}, {key: '10 almonds', value: 0.129}]}
              ]},
              {name: 'Peanut butter', category: 'Nuts and Seeds', carbs: [
                {name: 'smooth & crunchy, no sugar or salt added', variant: 'no sugar or salt added', carb: 10.8, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.064}, {key: '1 tablespoon (15mL)', value: 0.192}]},
                {name: 'smooth & crunchy, salt & sugar added', variant: 'salt & sugar added', carb: 16.4, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.062}, {key: '1 tablespoon (15mL)', value: 0.186}]},
                {name: 'smooth & crunchy, salt added, no sugar added', variant: 'salt added, no sugar added', carb: 10.7, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.061}]}
              ]},
              {name: 'Seeds', category: 'Nuts and Seeds', carbs: [
                {name: 'pumpkin & squash, kernel, dried', variant: 'pumpkin & squash', carb: 4.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.38}]},
                {name: 'sesame butter, tahini', variant: 'sesame butter', carb: 1.4, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.16}]},
                {name: 'sesame, dried, raw', variant: 'sesame', carb: 8.5, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.086}]},
                {name: 'sunflower, kernel, dried', variant: 'sunflower', carb: 10.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon ground (15mL)', value: 0.069}]}
              ]},
              {name: 'Recipes', category: 'Recipes', carbs: [
                {name: 'Cake, chocolate, baked, iced with butter icing', variant: 'Cake', carb: 54.7, amounts: [{key: '100g', value: 1}]},
                {name: 'Cake, sponge, fat added, baked', variant: 'Cake', carb: 46, amounts: [{key: '100g', value: 1}]},
                {name: 'Cake, sponge, no fat added, baked', variant: 'Cake', carb: 48.6, amounts: [{key: '100g', value: 1}]},
                {name: 'Custard square, baked', variant: 'Custard square', carb: 17.6, amounts: [{key: '100g', value: 1}]},
                {name: 'Dip, guacamole', variant: 'Dip', carb: 1.4, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.147}, {key: '1 cup (250mL)', value: 2.45}]},
                {name: 'Lemon curd, cooked', variant: 'Lemon curd', carb: 29.4, amounts: [{key: '100g', value: 1}]},
                {name: 'Meringue, baked', variant: 'Meringue', carb: 69.7, amounts: [{key: '100g', value: 1}, {key: '1 meringue (7.5cm diameter)', value: 0.3}]},
                {name: 'Mincemeat, fruit, Christmas', variant: 'Mincemeat', carb: 42.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.436}]},
                {name: 'Omelette, cheese, cooked', variant: 'Omelette', carb: 0.4, amounts: [{key: '100g', value: 1}, {key: '1 egg omelette', value: 0.78}, {key: '1 cup (250mL)', value: 2.56}]},
                {name: 'Omelette, plain, cooked', variant: 'Omelette', carb: 0.6, amounts: [{key: '100g', value: 1}, {key: '1 egg omelette', value: 0.64}]},
                {name: 'Pastry, short, butter, baked', variant: 'Pastry', carb: 47.6, amounts: [{key: '100g', value: 1}]},
                {name: 'Pie, lemon meringue, baked', variant: 'Pie', carb: 36.6, amounts: [{key: '100g', value: 1}]},
                {name: 'Pudding, rice, cocoa & coconut, cooked', variant: 'Pudding', carb: 20.8, amounts: [{key: '100g', value: 1}]},
                {name: 'Pudding, sponge, fruit, steamed', variant: 'Pudding', carb: 47.7, amounts: [{key: '100g', value: 1}]},
                {name: 'Quiche, spinach, baked', variant: 'Quiche', carb: 14.2, amounts: [{key: '100g', value: 1}]},
                {name: 'Scone, wholemeal, baked', variant: 'Scone', carb: 37.4, amounts: [{key: '100g', value: 1}, {key: 'whole', value: 0.5}]},
                {name: 'Shortbread, homemade, baked', variant: 'Shortbread', carb: 56.9, amounts: [{key: '100g', value: 1}, {key: '1 piece', value: 0.13}]},
                {name: 'Tart, jam, baked', variant: 'Tart', carb: 53.4, amounts: [{key: '100g', value: 1}]}
              ]},
              {name: 'Dip', category: 'Sauces & Condiments', carbs: [
                {name: 'sour cream, assorted flavours, 30% fat, La Bonne', variant: 'sour cream', carb: 5.8, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.142}]},
                {name: 'sour cream, lite, assorted flavours, 7% fat', variant: 'sour cream', carb: 7.3, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.158}]}
              ]},
              {name: 'Dressings', category: 'Sauces & Condiments', carbs: [
                {name: 'coleslaw, Lite, Eta', variant: 'coleslaw', carb: 20.4, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.152}]},
                {name: 'French, Kraft', variant: 'French', carb: 8, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.15}]},
                {name: 'Italian, Kraft', variant: 'Italian', carb: 5.9, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.147}]},
                {name: 'mayonnaise, commercial', variant: 'mayonnaise', carb: 18.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.147}]},
                {name: 'mayonnaise, reduced fat, commercial', variant: 'mayonnaise', carb: 23.2, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.138}]},
                {name: 'thousand island, Eta', variant: 'thousand island', carb: 15.4, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.156}]},
                {name: 'vinaigrette', variant: 'vinaigrette', carb: 10, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.16}]}
              ]},
              {name: 'Gravy', category: 'Sauces & Condiments', carbs: [
                {name: 'dry powder mix, assorted flavours, prepared with water', variant: 'dry powder mix', carb: 4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.514}]}
              ]},
              {name: 'Hummus', category: 'Sauces & Condiments', carbs: [
                {name: 'original, 6.5% fat', variant: 'original', carb: 11.3, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.156}]}
              ]},
              {name: 'Pickle', category: 'Sauces & Condiments', carbs: [
                {name: 'sweet', variant: 'sweet', carb: 34, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.17}]}
              ]},
              {name: 'Sauces', category: 'Sauces & Condiments', carbs: [
                {name: 'chilli', variant: 'chilli', carb: 17.7, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.17}]},
                {name: 'chilli, sweet, commercial', variant: 'chilli', carb: 45.5, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.184}]},
                {name: 'fish', variant: 'fish', carb: 4.4, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.182}]},
                {name: 'pasta, chunky vegetable, tomato based, heated', variant: 'pasta', carb: 10.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.734}]},
                {name: 'simmer, butter chicken, heated', variant: 'simmer', carb: 9.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.676}]},
                {name: 'simmer, korma, cream & coconut base', variant: 'simmer', carb: 6.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.662}]},
                {name: 'simmer, satay, heated', variant: 'simmer', carb: 12, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.71}]},
                {name: 'simmer, sweet & sour, heated', variant: 'simmer', carb: 27, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.827}]},
                {name: 'soy, commercial', variant: 'soy', carb: 4, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.176}]},
                {name: 'soy, reduced salt, commercial', variant: 'soy', carb: 3.2, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.172}]},
                {name: 'tartar, Eta', variant: 'tartar', carb: 7, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.146}]},
                {name: 'tomato', variant: 'tomato', carb: 24.9, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.165}]},
                {name: 'tomato, ketchup', variant: 'tomato', carb: 24.4, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.063}]},
                {name: 'Worcestershire', variant: 'Worcestershire', carb: 17.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.18}]}
              ]},
              {name: 'Shellfishes', category: 'Shellfishes', carbs: [
                {name: 'Cockle, boiled', variant: 'Cockle', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.5}]},
                {name: 'Crab, meat stick, surimi', variant: 'Crab', carb: 6, amounts: [{key: '100g', value: 1}, {key: '1 stick', value: 0.41}, {key: '1 cup chunks or flakes (250mL)', value: 1.33}]},
                {name: 'Kina, roe, raw', variant: 'Kina', carb: 0.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.14}]},
                {name: 'Mussel, green, meat, boiled', variant: 'Mussel', carb: 5.1, amounts: [{key: '100g', value: 1}, {key: '1 mussel', value: 0.152}, {key: '1 cup (250mL)', value: 2.16}]},
                {name: 'Mussel, green, meat, fresh, raw', variant: 'Mussel', carb: 3.7, amounts: [{key: '100g', value: 1}, {key: '1 mussel', value: 0.247}, {key: '1 cup (250mL)', value: 2.39}]},
                {name: 'Mussel, green, meat, marinated, assorted flavoured, drained, ready to eat, Sealord', variant: 'Mussel', carb: 8.5, amounts: [{key: '100g', value: 1}, {key: '1 mussel', value: 0.16}, {key: '1 cup (250mL)', value: 2.812}]},
                {name: 'Mussel, green, meat, marinated, drained, ready to eat, Talley\'s', variant: 'Mussel', carb: 6.7, amounts: [{key: '100g', value: 1}, {key: '1 mussel', value: 0.16}, {key: '1 cup (250mL)', value: 2.5}]},
                {name: 'Mussel, green, meat, smoked, flavoured, ready to eat, Garlic, Aqua Fresh', variant: 'Mussel', carb: 2.5, amounts: [{key: '100g', value: 1}, {key: '1 mussel', value: 0.096}, {key: '1 cup (250mL)', value: 2.793}]},
                {name: 'Mussel, green, meat, smoked, ready to eat, Natural, Aqua Fresh', variant: 'Mussel', carb: 2.5, amounts: [{key: '100g', value: 1}, {key: '1 mussel', value: 0.098}, {key: '1 cup (250mL)', value: 2.85}]},
                {name: 'Oyster, dredge, raw', variant: 'Oyster', carb: 1.2, amounts: [{key: '100g', value: 1}, {key: '1 oyster', value: 0.15}]},
                {name: 'Oyster, battered, deep fried in peanut oil', variant: 'Oyster', carb: 9.5, amounts: [{key: '100g', value: 1}, {key: '1 oyster', value: 0.23}]},
                {name: 'Paua, fritter, deep fried', variant: 'Paua', carb: 27.5, amounts: [{key: '100g', value: 1}, {key: '1 paua fritter', value: 1.84}]},
                {name: 'Pipi, flesh, raw', variant: 'Pipi', carb: 0.5, amounts: [{key: '100g', value: 1}, {key: '1 pipi', value: 0.05}]},
                {name: 'Prawn, king, flesh, cooked', variant: 'Prawn', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 prawn', value: 0.16}]},
                {name: 'Prawn, king, flesh, raw', variant: 'Prawn', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 prawn', value: 0.19}]},
                {name: 'Scallop, battered, deep fried', variant: 'Scallop', carb: 9.5, amounts: [{key: '100g', value: 1}, {key: '1 scallop', value: 0.24}, {key: '1 cup (250mL)', value: 1.42}]},
                {name: 'Scallop, raw', variant: 'Scallop', carb: 2.3, amounts: [{key: '100g', value: 1}, {key: '1 scallop', value: 0.14}]},
                {name: 'Shrimp, canned, drained', variant: 'Shrimp', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.35}]},
                {name: 'Squid, in flour, fried', variant: 'Squid', carb: 6.7, amounts: [{key: '100g', value: 1}, {key: '1 squid ring', value: 0.2}, {key: '1 cup (250mL)', value: 1.58}]}
                ]},
                {name: 'Snack Foods', category: 'Snack Foods', carbs: [
                  {name: 'Corn chip, assorted flavours, salted, fried in assorted oils', variant: 'Corn chip', carb: 58.7, amounts: [{key: '100g', value: 1}, {key: '10 chips or crisps', value: 0.252}]},
                  {name: 'Corn snack, extruded, assorted shapes, cheese flavour, salted', variant: 'Corn snack', carb: 49, amounts: [{key: '100g', value: 1}, {key: '10 chips or crisps', value: 0.144}]},
                  {name: 'Fruit bar, wholemeal, assorted flavours, Mother Earth', variant: 'Fruit bar', carb: 64.8, amounts: [{key: '100g', value: 1}, {key: '1 bar', value: 0.5}]},
                  {name: 'Fruit leather, apricot', variant: 'Fruit leather', carb: 58.1, amounts: [{key: '100g', value: 1}, {key: '1 leather', value: 0.4}]},
                  {name: 'Fruit roll, strawberry, Uncle Tobys', variant: 'Fruit roll', carb: 74.8, amounts: [{key: '100g', value: 1}, {key: '1 roll', value: 0.21}]},
                  {name: 'Muesli bar, chocolate chip', variant: 'Muesli bar', carb: 66, amounts: [{key: '100g', value: 1}, {key: '1 bar', value: 0.32}]},
                  {name: 'Muesli bar, chocolate coated, Snacker', variant: 'Muesli bar', carb: 65.2, amounts: [{key: '100g', value: 1}, {key: '1 bar', value: 0.33}]},
                  {name: 'Muesli bar, fruit & nut', variant: 'Muesli bar', carb: 53.5, amounts: [{key: '100g', value: 1}, {key: '1 bar', value: 0.45}]},
                  {name: 'Muesli bar, fruit filled, twisted, assorted flavours', variant: 'Muesli bar', carb: 69, amounts: [{key: '100g', value: 1}, {key: '1 bar (9.3 x 3.5 x 1.8cm)', value: 0.4}]},
                  {name: 'Muesli bar, fruit filled, wholemeal, assorted flavours', variant: 'Muesli bar', carb: 68.1, amounts: [{key: '100g', value: 1}, {key: '1 bar', value: 0.5}]},
                  {name: 'Muesli bar, yoghurt coated', variant: 'Muesli bar', carb: 67, amounts: [{key: '100g', value: 1}, {key: '1 bar', value: 0.33}]},
                  {name: 'Multigrain chip, assorted flavours, Grainwaves, Bluebird', variant: 'Multigrain chip', carb: 63.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.35}]},
                  {name: 'Nut bar, peanut & chocolate, Choc Peanut, Tasti', variant: 'Nut bar', carb: 33.1, amounts: [{key: '100g', value: 1}, {key: '1 bar (9.0 x 3.1 x 1.8cm)', value: 0.383}]},
                  {name: 'Nut bar, peanut & chocolate, Chocolate Nut Bar Original, Nice & Natural', variant: 'Nut bar', carb: 37.3, amounts: [{key: '100g', value: 1}, {key: '1 bar (8.8 x 3.3 x 1.4cm)', value: 0.326}]},
                  {name: 'Popcorn, air popped', variant: 'Popcorn', carb: 55.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.106}]},
                  {name: 'Popcorn, buttered, salted, Pop N Good', variant: 'Popcorn', carb: 50.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.1}]},
                  {name: 'Potato chip or crisp, assorted flavours, salted, fried in assorted oils', variant: 'Potato chip or crisp', carb: 42.8, amounts: [{key: '100g', value: 1}, {key: '10 chips or crisps', value: 0.236}]},
                  {name: 'Potato chip or crisp, plain, salted, fried in assorted oils', variant: 'Potato chip or crisp', carb: 44, amounts: [{key: '100g', value: 1}, {key: '10 chips or crisps', value: 0.223}]},
                  {name: 'Pretzels, wheat flour, salted, baked', variant: 'Pretzels', carb: 64.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.524}]},
                  {name: 'Snack, cassava crisps, plain or assorted flavours, salt added', variant: 'Snack', carb: 63.5, amounts: [{key: '100g', value: 1}, {key: '10 chips or crisps', value: 0.115}]},
                  {name: 'Snack, kumara chips, plain or assorted flavours', variant: 'Snack', carb: 48.5, amounts: [{key: '100g', value: 1}, {key: '10 chips or crisps', value: 0.251}]},
                  {name: 'Snack, popcorn, candied', variant: 'Snack', carb: 79.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.216}]}
                ]},
                {name: 'Soups', category: 'Soups', carbs: [
                  {name: 'beef, instant dry mix, prepared with water, Continental', variant: 'beef', carb: 8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.5}]},
                  {name: 'bone & vegetable broth', variant: 'bone & vegetable broth', carb: 1.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.54}]},
                  {name: 'chicken & corn, heated', variant: 'chicken & corn', carb: 3.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.707}]},
                  {name: 'chicken & corn, heated, Wattie\'s', variant: 'chicken & corn', carb: 3.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.517}]},
                  {name: 'chicken & vegetable, heated, Wattie\'s', variant: 'chicken & vegetable', carb: 3.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.706}]},
                  {name: 'chicken noodle, instant dry mix, prepared with water, Continental', variant: 'chicken noodle', carb: 9.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.75}]},
                  {name: 'chicken noodle, instant dry mix, prepared with water, Maggi', variant: 'chicken noodle', carb: 2.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.75}]},
                  {name: 'cream of chicken, canned', variant: 'cream of chicken', carb: 4.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.59}]},
                  {name: 'cream of mushroom, canned', variant: 'cream of mushroom', carb: 3.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.61}]},
                  {name: 'cream of tomato, canned', variant: 'cream of tomato', carb: 5.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.6}]},
                  {name: 'creme of chicken, instant dry mix, prepared with water, Maggi', variant: 'creme of chicken', carb: 3.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.65}]},
                  {name: 'creme of vegetable, instant dry mix, prepared with water, Maggi', variant: 'creme of vegetable', carb: 3.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.5}]},
                  {name: 'lentil & vegetables, heated, Wattie\'s', variant: 'lentil & vegetables', carb: 5.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.704}]},
                  {name: 'minestrone, instant dry mix, prepared with water', variant: 'minestrone', carb: 3.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.68}]},
                  {name: 'mushroom, instant dry mix, prepared with water, Maggi', variant: 'mushroom', carb: 3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.5}]},
                  {name: 'pumpkin, heated', variant: 'pumpkin', carb: 9.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.75}]},
                  {name: 'pumpkin, heated, Wattie\'s', variant: 'pumpkin', carb: 3.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.487}]},
                  {name: 'seafood chowder, heated', variant: 'seafood chowder', carb: 4.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.635}]},
                  {name: 'tomato, instant dry mix, prepared with water, Continental', variant: 'tomato', carb: 6.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.57}]},
                  {name: 'Tuscan tomato, heated, Wattie\'s', variant: 'Tuscan tomato', carb: 4.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.601}]},
                  {name: 'vegetable, canned', variant: 'vegetable', carb: 6.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.57}]}
                ]},
                {name: 'Chocolate', category: 'Sugars, Confectionaries and Sweet spreads', carbs: [
                  {name: 'bar & bite size, Moro, Cadbury', variant: 'Moro', carb: 58.1, amounts: [{key: '100g', value: 1}, {key: '1 treat size bar (4.5 x 2.2 x 1.6cm)', value: 0.181}, {key: '1 bar (11.4 x 3.1 x 1.9cm)', value: 0.651}]},
                  {name: 'bar & block, Dairy Milk Fruit & Nut, Cadbury', variant: 'Dairy Milk Fruit & Nut', carb: 52.2, amounts: [{key: '100g', value: 1}, {key: '1 bar (12.8 x 3.4 x 1.2cm)', value: 0.515}, {key: '1 block (20.5 x 9.5 x 1.0cm)', value: 2.057}]},
                  {name: 'bar & block, Dairy Milk with Crunchie, Cadbury', variant: 'Dairy Milk with Crunchie', carb: 59.7, amounts: [{key: '100g', value: 1}, {key: '1 block (20.4 x 9.5 x 0.9cm)', value: 1.981}, {key: '1 block (20.1 x 16.2 x 1.0cm)', value: 3.547}]},
                  {name: 'bar & block, Energy, Cadbury', variant: 'Energy', carb: 53.7, amounts: [{key: '100g', value: 1}, {key: '1 bar (12.5 x 3.1 x 1.1cm)', value: 0.512}, {key: '1 block (20.3 x 9.4 x 0.9cm)', value: 2.048}]},
                  {name: 'bar, Bounty, Mars', variant: 'Bounty', carb: 55.5, amounts: [{key: '100g', value: 1}, {key: '1 bar', value: 0.5}]},
                  {name: 'bar, Gold Totally Nuts Bar, Moro, Cadbury', variant: 'Gold Totally Nuts Bar', carb: 43.4, amounts: [{key: '100g', value: 1}, {key: '1 bar (10.9 x 2.7 x 2.2cm)', value: 0.628}]},
                  {name: 'bar, Mars', variant: 'Mars', carb: 63.3, amounts: [{key: '100g', value: 1}, {key: '1 bar', value: 0.6}]},
                  {name: 'bar, milk', variant: 'milk', carb: 56.5, amounts: [{key: '100g', value: 1}, {key: '1 small bar', value: 0.5}, {key: '1 large bar', value: 1.2}]},
                  {name: 'block & slab, Peanut, Whittaker\'s', variant: 'Peanut', carb: 45.6, amounts: [{key: '100g', value: 1}, {key: '1 slab (7.4 x 3.6 x 1.7cm)', value: 0.52}, {key: '1 block (19.9 x 10.6 x 1.1cm)', value: 2.594}]},
                  {name: 'compound', variant: 'compound', carb: 65.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.155}]},
                  {name: 'dark', variant: 'dark', carb: 62.8, amounts: [{key: '100g', value: 1}, {key: '1 cup grated (250mL)', value: 0.88}]},
                  {name: 'fancy & filled', variant: 'fancy & filled', carb: 69.8, amounts: [{key: '100g', value: 1}, {key: '1 chocolate', value: 0.05}]},
                  {name: 'white', variant: 'white', carb: 55.5, amounts: [{key: '100g', value: 1}, {key: '1 cup grated (250mL)', value: 0.88}]}
                ]},
                {name: 'Gum', category: 'Sugars, Confectionaries and Sweet spreads', carbs: [
                  {name: 'Fruit gum', variant: '', carb: 57.9, amounts: [{key: '100g', value: 1}, {key: '1 fruit gum', value: 0.02}]}
                ]},
                {name: 'Sweet Spreads', category: 'Sugars, Confectionaries and Sweet spreads', carbs: [
                  {name: 'Honey', variant: '', carb: 79.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.21}]},
                  {name: 'Jam, berry fruit', variant: 'berry fruit', carb: 69.7, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.156}]},
                  {name: 'Jam, stone fruit', variant: 'stone fruit', carb: 66.5, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.163}]},
                  {name: 'Marmalade', variant: '', carb: 67.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.2}]},
                  {name: 'Spread, hazelnut, Nutella, Ferrero', variant: 'hazelnut', carb: 56.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.14}]}
                ]},
                {name: 'Frozen Treats', category: 'Sugars, Confectionaries and Sweet spreads', carbs: [
                  {name: 'Ice block, frozen', variant: 'frozen', carb: 17.1, amounts: [{key: '100g', value: 1}, {key: '1 ice-block', value: 0.8}, {key: '1 cup (250mL)', value: 1.93}]}
                ]},
                {name: 'Lollies', category: 'Sugars, Confectionaries and Sweet spreads', carbs: [
                  {name: 'Jellybeans, Jaybees, Pascall', variant: 'Jaybees', carb: 91.8, amounts: [{key: '100g', value: 1}, {key: '1 jellybean', value: 0.02}]},
                  {name: 'Liquorice, allsorts', variant: 'allsorts', carb: 73.5, amounts: [{key: '100g', value: 1}, {key: '1 stick (1.5 x 1.6cm diameter)', value: 0.038}]},
                  {name: 'Liquorice, black', variant: 'black', carb: 75.7, amounts: [{key: '100g', value: 1}, {key: '1 piece', value: 0.02}]},
                  {name: 'Lollies, Minties, Pascall', variant: 'Minties', carb: 86.9, amounts: [{key: '100g', value: 1}, {key: '1 mintie', value: 0.07}]},
                  {name: 'Lollipop, assorted flavours, Chupa Chup', variant: 'assorted flavours', carb: 84.4, amounts: [{key: '100g', value: 1}, {key: '1 lollipop', value: 0.131}]},
                  {name: 'Marshmallow, pink & white', variant: 'pink & white', carb: 78.1, amounts: [{key: '100g', value: 1}, {key: '1 marshmallow', value: 0.04}, {key: '1 cup chopped (250mL)', value: 0.82}]},
                  {name: 'Sweet, hard, boiled', variant: 'hard', carb: 83.7, amounts: [{key: '100g', value: 1}, {key: '1 boiled sweet', value: 0.05}]},
                  {name: 'Sweet, peppermint', variant: 'peppermint', carb: 97, amounts: [{key: '100g', value: 1}, {key: '1 peppermint', value: 0.02}]},
                  {name: 'Toffees, mixed', variant: 'mixed', carb: 67.1, amounts: [{key: '100g', value: 1}, {key: '1 toffee', value: 0.05}]}
                ]},
                {name: 'Sauces & Syrups', category: 'Sugars, Confectionaries and Sweet spreads', carbs: [
                  {name: 'Sauce, chocolate', variant: 'chocolate', carb: 52.5, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.15}]},
                  {name: 'Syrup, golden', variant: 'golden', carb: 76.6, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.2}]}
                ]},
                {name: 'Sugar', category: 'Sugars, Confectionaries and Sweet spreads', carbs: [
                  {name: 'brown', variant: 'brown', carb: 95.1, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.037}, {key: '1 cup (250mL)', value: 1.855}]},
                  {name: 'raw', variant: 'raw', carb: 99.2, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.039}, {key: '1 cup (250mL)', value: 1.935}]},
                  {name: 'white', variant: 'white', carb: 100, amounts: [{key: '100g', value: 1}, {key: '1 teaspoon (5mL)', value: 0.049}, {key: '1 cup (250mL)', value: 2.468}]}
                ]},
                {name: 'Raw Vegetables', category: 'Vegetables & Pulses', carbs: [
                  {name: 'Asparagus, stalk, fresh, raw', variant: 'Asparagus', carb: 1.6, amounts: [{key: '100g', value: 1}, {key: '1 spear (16-20cm long)', value: 0.15}]},
                  {name: 'Bean, green runner or dwarf, seeds with pod, fresh, raw', variant: 'Bean', carb: 4.2, amounts: [{key: '100g', value: 1}, {key: '1 whole', value: 0.057}, {key: '1 cup sliced 2cm long (250mL)', value: 1.202}]},
                  {name: 'Broccoli, raw', variant: 'Broccoli', carb: 1.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.83}]},
                  {name: 'Cabbage, bok choy, raw', variant: 'Cabbage', carb: 1.7, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 0.774}]},
                  {name: 'Cabbage, choy sum, raw', variant: 'Cabbage', carb: 0.1, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 0.72}]},
                  {name: 'Cabbage, red', variant: 'Cabbage', carb: 3.4, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 0.9}]},
                  {name: 'Cabbage, tat soi, raw', variant: 'Cabbage', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.841}]},
                  {name: 'Cabbage, green drumhead, leaves, raw', variant: 'Cabbage', carb: 3.9, amounts: [{key: '100g', value: 1}, {key: '1 cup shredded (250mL)', value: 0.635}]},
                  {name: 'Capsicum, green, raw', variant: 'Capsicum', carb: 2.9, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 1.25}, {key: '1 capsicum', value: 1.315}]},
                  {name: 'Capsicum, red, raw', variant: 'Capsicum', carb: 5, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 1.3}, {key: '1 capsicum', value: 1.669}]},
                  {name: 'Carrot, flesh, fresh, raw', variant: 'Carrot', carb: 6.8, amounts: [{key: '100g', value: 1}, {key: '1 cup grated (250mL)', value: 0.944}, {key: '1 whole (15cm long)', value: 1.1}, {key: '1 cup stick 7cm long (250mL)', value: 1.116}, {key: '1 cup slices 1cm thick (250mL)', value: 1.279}]},
                  {name: 'Cauliflower, fresh, raw', variant: 'Cauliflower', carb: 1.9, amounts: [{key: '100g', value: 1}, {key: '1 floret (7.9cm length)', value: 0.733}, {key: '1 cup florets (250mL)', value: 1.518}]},
                  {name: 'Celery, American Green, stalk, raw', variant: 'Celery', carb: 1.3, amounts: [{key: '100g', value: 1}, {key: '1 strip (14.2 cm long)', value: 0.354}, {key: '1 stalk (24-32cm long)', value: 0.696}]},
                  {name: 'Courgette, green, unpeeled, raw', variant: 'Courgette', carb: 0.6, amounts: [{key: '100g', value: 1}, {key: '1 slice (3.9 x 3.2cm diameter)', value: 0.303}, {key: '1 cup chopped (250mL)', value: 1.275}]},
                  {name: 'Cucumber, lebanese, unpeeled, raw', variant: 'Cucumber', carb: 1.9, amounts: [{key: '100g', value: 1}, {key: '1 cucumber', value: 0.95}]},
                  {name: 'Cucumber, telegraph, raw, unpeeled', variant: 'Cucumber', carb: 1.9, amounts: [{key: '100g', value: 1}, {key: '1 slice (2.3 x 4.5cm diameter)', value: 0.376}, {key: '1 cup diced (250mL)', value: 1.475}]},
                  {name: 'Garlic, cloves, raw, peeled', variant: 'Garlic', carb: 10.3, amounts: [{key: '100g', value: 1}, {key: '1 clove', value: 0.03}]},
                  {name: 'Ginger, preserved', variant: 'Ginger', carb: 21, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.014}]},
                  {name: 'Kale, fresh, raw', variant: 'Kale', carb: 0.6, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 0.426}]},
                  {name: 'Kumara, Owairaka Red, flesh, raw', variant: 'Kumara', carb: 18.8, amounts: [{key: '100g', value: 1}, {key: '1 kumara', value: 2.172}]},
                  {name: 'Lettuce, hydroponic varieties, raw', variant: 'Lettuce', carb: 1.8, amounts: [{key: '100g', value: 1}, {key: '1 cup torn leaves (250mL)', value: 0.36}]},
                  {name: 'Lettuce, raw', variant: 'Lettuce', carb: 1.9, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 0.761}]},
                  {name: 'Mushroom, Portobello, whole, raw', variant: 'Mushroom', carb: 0.7, amounts: [{key: '100g', value: 1}, {key: '1 mushroom (7.5 -10.2cm diameter)', value: 0.621}, {key: '1 cup sliced (250mL)', value: 0.788}]},
                  {name: 'Mushroom, raw', variant: 'Mushroom', carb: 0.2, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 0.68}]},
                  {name: 'Onion, brown, flesh, fresh, raw', variant: 'Onion', carb: 5.1, amounts: [{key: '100g', value: 1}, {key: '1 onion (6.9cm diameter)', value: 1.74}]},
                  {name: 'Parsley, raw', variant: 'Parsley', carb: 0.8, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.037}, {key: '1 cup chopped (250mL)', value: 0.64}]},
                  {name: 'Pumpkin, Whangaparaoa crown, fresh, raw', variant: 'Pumpkin', carb: 6.7, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced 5 x 2 x 2cm (250mL)', value: 1.282}]},
                  {name: 'Puwha, leaves, raw, Prickly Sow Thistle', variant: 'Puwha', carb: 0.4, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 0.4}]},
                  {name: 'Radish, flesh & skin, raw', variant: 'Radish', carb: 2.6, amounts: [{key: '100g', value: 1}, {key: '1 radish', value: 0.15}]},
                  {name: 'Rocket, leaves, raw', variant: 'Rocket', carb: 0.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.375}]},
                  {name: 'Salad, Mesclun, leaves, raw', variant: 'Salad', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.375}]},
                  {name: 'Silverbeet, leaves & stems, fresh, raw', variant: 'Silverbeet', carb: 1.5, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 0.332}]},
                  {name: 'Spinach, English, raw', variant: 'Spinach', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 0.429}]},
                  {name: 'Spring onion, bulb and stalk, fresh, raw', variant: 'Spring onion', carb: 2.8, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.045}, {key: '1 cup chopped (250mL)', value: 0.695}]},
                  {name: 'Sprout, alfalfa, raw', variant: 'Sprout', carb: 0, amounts: [{key: '100g', value: 1}]},
                  {name: 'Sprout, mung bean, raw', variant: 'Sprout', carb: 1.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.04}]},
                  {name: 'Taro, corm, flesh, raw', variant: 'Taro', carb: 24.9, amounts: [{key: '100g', value: 1}, {key: '1 cube (3cm)', value: 0.3}]},
                  {name: 'Tomato, whole, raw', variant: 'Tomato', carb: 2.7, amounts: [{key: '100g', value: 1}, {key: '1 medium whole (6.6cm diameter)', value: 1.23}, {key: '1 cup chopped (250mL)', value: 1.675}]},
                  {name: 'Watercress, raw', variant: 'Watercress', carb: 0.2, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 0.35}]}
                ]},
                {name: 'Canned Vegetables', category: 'Vegetables & Pulses', carbs: [
                  {name: 'Asparagus, canned, drained', variant: 'Asparagus', carb: 2.2, amounts: [{key: '100g', value: 1}, {key: '1 cup spears (250mL)', value: 2.56}]},
                  {name: 'Baked beans, canned in tomato sauce', variant: 'Baked beans', carb: 12, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.684}]},
                  {name: 'Bean, mixed beans, canned in brine, drained', variant: 'Bean', carb: 8.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.169}]},
                  {name: 'Beetroot, canned in water, sliced, drained', variant: 'Beetroot', carb: 10.3, amounts: [{key: '100g', value: 1}, {key: '1 slice (0.5 x 4.6cm diameter)', value: 0.102}, {key: '1 cup sliced (250mL)', value: 1.764}]},
                  {name: 'Beetroot, peeled, fresh, raw', variant: 'Beetroot', carb: 5.1, amounts: [{key: '100g', value: 1}, {key: '1 cup grated (250mL)', value: 1.703}, {key: '1 cup sliced (250mL)', value: 1.652}, {key: '1 beetroot (7.4cm)', value: 1.958}]},
                  {name: 'Cannellini bean, canned in brine, drained', variant: 'Cannellini bean', carb: 8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.189}]},
                  {name: 'Chickpea, canned in brine, drained', variant: 'Chickpea', carb: 11.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.128}]},
                  {name: 'Chilli bean, canned in chilli sauce, undrained', variant: 'Chilli bean', carb: 12.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.74}]},
                  {name: 'Corn, baby sweet corn, canned, drained', variant: 'Corn', carb: 1.9, amounts: [{key: '100g', value: 1}]},
                  {name: 'Red kidney bean, canned in brine, drained', variant: 'Red kidney bean', carb: 8.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.149}]},
                  {name: 'Sweet corn, creamed, canned', variant: 'Sweet corn', carb: 12.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.673}]},
                  {name: 'Sweet corn, kernel, canned, drained', variant: 'Sweet corn', carb: 10.3, amounts: [{key: '100g', value: 1}, {key: '1 cup kernel (250mL)', value: 1.856}]},
                  {name: 'Tomato, canned in tomato juice, assorted flavours, canned, undrained, salt added', variant: 'Tomato', carb: 2.9, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.787}]},
                  {name: 'Tomato, canned in tomato juice, plain, undrained, no salt added', variant: 'Tomato', carb: 2.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.805}]},
                  {name: 'Tomato, canned in tomato juice, plain, undrained, salt added', variant: 'Tomato', carb: 2.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.749}]},
                  {name: 'Tomato, canned, drained', variant: 'Tomato', carb: 4.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.54}]},
                  {name: 'Tomato, paste, canned', variant: 'Tomato', carb: 10.5, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.151}]},
                  {name: 'Tomato, puree, canned, Wattie\'s', variant: 'Tomato', carb: 6.8, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.153}, {key: '1 cup (250mL)', value: 2.543}]}
                ]},
                {name: 'Cooked Vegetables', category: 'Vegetables & Pulses', carbs: [
                  {name: 'Artichoke, globe, boiled, drained, no salt added', variant: 'Artichoke', carb: 1.2, amounts: [{key: '100g', value: 1}, {key: '1 artichoke', value: 1.2}]},
                  {name: 'Asparagus, stalk, fresh, boiled, drained, no salt added', variant: 'Asparagus', carb: 1.7, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.363}]},
                  {name: 'Asparagus, stalk, fresh, steamed', variant: 'Asparagus', carb: 1.7, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.35}]},
                  {name: 'Bean, black, boiled, drained, no salt added', variant: 'Bean', carb: 14.7, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.82}]},
                  {name: 'Bean, broad, boiled, drained, no salt added', variant: 'Bean', carb: 8.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.7}]},
                  {name: 'Bean, haricot, boiled, drained', variant: 'Bean', carb: 15.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.8}]},
                  {name: 'Bean, red kidney, boiled, drained', variant: 'Bean', carb: 9.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.8}]},
                  {name: 'Bean, butterbean, seeds with pod, boiled, drained, no salt added', variant: 'Bean', carb: 2.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.36}]},
                  {name: 'Bean, green runner or dwarf, seeds with pod, fresh, boiled, drained, no salt added', variant: 'Bean', carb: 4.1, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.214}]},
                  {name: 'Bean, green runner or dwarf, seeds with pod, fresh, steamed', variant: 'Bean', carb: 4.4, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.228}]},
                  {name: 'Beetroot, peeled, fresh, roasted, no salt added', variant: 'Beetroot', carb: 6.4, amounts: [{key: '100g', value: 1}, {key: '1 beetroot (7.4cm)', value: 1.656}]},
                  {name: 'Broccoli, boiled, drained, no salt added', variant: 'Broccoli', carb: 1.8, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.64}]},
                  {name: 'Brussels sprout, boiled, drained, no salt added', variant: 'Brussels sprout', carb: 5.9, amounts: [{key: '100g', value: 1}, {key: '1 cup quartered (250mL)', value: 1.302}]},
                  {name: 'Brussels sprout, steamed', variant: 'Brussels sprout', carb: 6, amounts: [{key: '100g', value: 1}, {key: '1 cup quartered (250mL)', value: 1.275}]},
                  {name: 'Cabbage, Chinese, cooked', variant: 'Cabbage', carb: 1.2, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 1.45}]},
                  {name: 'Cabbage, green drumhead, leaves, boiled, drained, no salt added', variant: 'Cabbage', carb: 3.7, amounts: [{key: '100g', value: 1}, {key: '1 cup shredded (250mL)', value: 1.044}]},
                  {name: 'Cabbage, green drumhead, leaves, steamed', variant: 'Cabbage', carb: 3.8, amounts: [{key: '100g', value: 1}, {key: '1 cup shredded (250mL)', value: 0.983}]},
                  {name: 'Carrot, flesh, fresh, baked with oil', variant: 'Carrot', carb: 10.8, amounts: [{key: '100g', value: 1}, {key: '1 cup slices 5cm thick (250mL)', value: 1.227}]},
                  {name: 'Carrot, flesh, fresh, boiled, drained, no salt added', variant: 'Carrot', carb: 7.3, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced 1cm thick (250mL)', value: 1.456}]},
                  {name: 'Carrot, flesh, fresh, steamed', variant: 'Carrot', carb: 7.6, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced 0.5cm thick (250mL)', value: 1.357}]},
                  {name: 'Carrot, flesh, fresh, stir fried', variant: 'Carrot', carb: 8.5, amounts: [{key: '100g', value: 1}, {key: '1 cup stick 7 cm long (250mL)', value: 1.165}]},
                  {name: 'Cassava, baked in traditional Papua New Guinea oven', variant: 'Cassava', carb: 36.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2.27}]},
                  {name: 'Cassava, boiled, peeled, drained, no salt added', variant: 'Cassava', carb: 33.5, amounts: [{key: '100g', value: 1}, {key: '1 cup diced (250mL)', value: 1.39}]},
                  {name: 'Cauliflower, boiled, drained, no salt added', variant: 'Cauliflower', carb: 1.9, amounts: [{key: '100g', value: 1}, {key: '1 floret (7.9cm length)', value: 0.734}, {key: '1 cup florets (250mL)', value: 1.576}]},
                  {name: 'Celery, American Green, stalk, stir fried', variant: 'Celery', carb: 1.6, amounts: [{key: '100g', value: 1}, {key: '1 cup diced (250mL)', value: 2.233}]},
                  {name: 'Chickpea, cooked', variant: 'Chickpea', carb: 9.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.73}]},
                  {name: 'Choko, flesh, cooked', variant: 'Choko', carb: 4.1, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.4}]},
                  {name: 'Eggplant, baked with oil,', variant: 'Eggplant', carb: 5.3, amounts: [{key: '100g', value: 1}, {key: '1 slice (1.2 x 6.4cm diameter)', value: 0.215}, {key: '1 cup sliced (250mL)', value: 1.43}]},
                  {name: 'Eggplant, boiled, drained, no salt added', variant: 'Eggplant', carb: 2.7, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.883}]},
                  {name: 'Eggplant, fried with oil', variant: 'Eggplant', carb: 3.7, amounts: [{key: '100g', value: 1}, {key: '1 slice (1.2 x 6.4cm diameter)', value: 0.299}, {key: '1 cup sliced (250mL)', value: 1.85}]},
                  {name: 'Eggplant, steamed', variant: 'Eggplant', carb: 3.3, amounts: [{key: '100g', value: 1}, {key: '1 slice (0.6 x 6.3cm diameter)', value: 0.197}, {key: '1 cup sliced (250mL)', value: 1.734}]},
                  {name: 'Kale, fresh, sauteed with oil, no salt added', variant: 'Kale', carb: 1.5, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 0.549}]},
                  {name: 'Kumara, Owairaka Red, flesh, boiled, drained, no salt added', variant: 'Kumara', carb: 18.8, amounts: [{key: '100g', value: 1}]},
                  {name: 'Kumara, flesh, boiled, drained, no salt added', variant: 'Kumara', carb: 13.1, amounts: [{key: '100g', value: 1}, {key: '1 cup  whole (250mL)', value: 3.466}]},
                  {name: 'Leek, bulb & stalk, fresh, stir-fried, no salt added', variant: 'Leek', carb: 3.1, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 1.213}]},
                  {name: 'Lentil, split, boiled, drained, no salt added', variant: 'Lentil', carb: 15.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 2}]},
                  {name: 'Marrow, flesh, boiled, drained, no salt added', variant: 'Marrow', carb: 1.4, amounts: [{key: '100g', value: 1}, {key: '1 cup diced (250mL)', value: 2.2}]},
                  {name: 'Mushroom, Portobello, whole, baked with oil,', variant: 'Mushroom', carb: 1, amounts: [{key: '100g', value: 1}, {key: '1 mushroom (1.7 x 7.3cm diameter)', value: 0.458}]},
                  {name: 'Mushroom, fried in butter', variant: 'Mushroom', carb: 0.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.5}]},
                  {name: 'Mushroom, fried in oil', variant: 'Mushroom', carb: 0.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.41}]},
                  {name: 'Onion, brown, flesh, fresh, sauteed', variant: 'Onion', carb: 5.5, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.566}, {key: '1 cup chopped (250mL)', value: 1.703}]},
                  {name: 'Parsnip, boiled, drained, no salt added', variant: 'Parsnip', carb: 10.6, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.989}]},
                  {name: 'Parsnip, flesh, baked without fat', variant: 'Parsnip', carb: 14.1, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.449}]},
                  {name: 'Parsnip, flesh, steamed', variant: 'Parsnip', carb: 11.3, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.772}]},
                  {name: 'Pea, split, dried, boiled, drained, no salt added', variant: 'Pea', carb: 22.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.94}]},
                  {name: 'Potato, flesh & skin, floury, baked without oil, no added salt', variant: 'Potato', carb: 19.3, amounts: [{key: '100g', value: 1}, {key: '1 small (6.3 x 4.4cm diameter)', value: 0.771}, {key: '1 medium (9.0 x 4.8cm diameter)', value: 1.628}, {key: '1 large (11.5 x 5.7cm diameter)', value: 2.582}]},
                  {name: 'Potato, flesh & skin, waxy, boiled, drained, no salt added', variant: 'Potato', carb: 11, amounts: [{key: '100g', value: 1}, {key: '1 small (5.5 x 4.4cm diameter)', value: 0.835}, {key: '1 medium (7.6 x 4.7cm diameter)', value: 1.286}, {key: '1 large (9.7 x 5.4cm diameter)', value: 2.295}]},
                  {name: 'Potato, flesh, floury, boiled, drained, mashed, no salt added', variant: 'Potato', carb: 12.4, amounts: [{key: '100g', value: 1}, {key: '1 cup mashed (250mL)', value: 2.462}]},
                  {name: 'Potato, flesh, floury, fried in canola oil, no salt added', variant: 'Potato', carb: 16.6, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.972}]},
                  {name: 'Potato, flesh, floury, mashed with 3.3% fat milk & butter, no salt added', variant: 'Potato', carb: 10.1, amounts: [{key: '100g', value: 1}, {key: '1 cup mashed (250mL)', value: 2.474}]},
                  {name: 'Potato, flesh, floury, mashed with 3.3% fat milk & margarine, no salt added', variant: 'Potato', carb: 10.1, amounts: [{key: '100g', value: 1}, {key: '1 cup mashed (250mL)', value: 2.486}]},
                  {name: 'Pumpkin, Kumi Kumi, flesh and skin, fresh, boiled, drained, no salt added', variant: 'Pumpkin', carb: 3.4, amounts: [{key: '100g', value: 1}, {key: '1 cup cubed (250mL)', value: 1.543}]},
                  {name: 'Pumpkin, Whangaparaoa crown, flesh, fresh, steamed, Whangaparaoa crown', variant: 'Pumpkin', carb: 7.5, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced 5 x 2 x 2cm (250mL)', value: 1.462}]},
                  {name: 'Pumpkin, Whangaparaoa crown, fresh, boiled, drained, no salt added', variant: 'Pumpkin', carb: 7.1, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced 5 x 2 x 2cm (250mL)', value: 1.554}]},
                  {name: 'Pumpkin, flesh, Whangaparaoa crown, fresh, baked with oil', variant: 'Pumpkin', carb: 11.5, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced 5 x 2 x 2cm (250mL)', value: 1.236}]},
                  {name: 'Puwha, Sow Thistle, leaves & upper stem, boiled, drained, no salt added', variant: 'Puwha', carb: 0.2, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 1.46}]},
                  {name: 'Seaweed, sheet, toasted, nori', variant: 'Seaweed', carb: 2.4, amounts: [{key: '100g', value: 1}, {key: '5 sheets', value: 0.113}]},
                  {name: 'Silverbeet, leaves & stems, fresh, boiled, drained, no salt added', variant: 'Silverbeet', carb: 1.4, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 0.724}]},
                  {name: 'Silverbeet, leaves & stems, fresh, steamed', variant: 'Silverbeet', carb: 1.5, amounts: [{key: '100g', value: 1}, {key: '1 cup chopped (250mL)', value: 0.65}]},
                  {name: 'Spinach, English, boiled, drained, no salt added', variant: 'Spinach', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.5}]},
                  {name: 'Spring onion, bulb and stalk, fresh, sauteed', variant: 'Spring onion', carb: 3.1, amounts: [{key: '100g', value: 1}, {key: '1 tablespoon (15mL)', value: 0.066}, {key: '1 cup chopped (250mL)', value: 1.106}]},
                  {name: 'Squash, buttercup, flesh, steamed', variant: 'Squash', carb: 18.4, amounts: [{key: '100g', value: 1}, {key: '1 cup diced (250mL)', value: 2.22}]},
                  {name: 'Swede, peeled, fresh, boiled, drained, no salt added', variant: 'Swede', carb: 4.4, amounts: [{key: '100g', value: 1}, {key: '1 cup cubed (250mL)', value: 1.868}]},
                  {name: 'Sweet corn, kernel, fresh, boiled, drained, no salt added', variant: 'Sweet corn', carb: 12.9, amounts: [{key: '100g', value: 1}, {key: '1 cob (18.5 x 5.4cm diameter)', value: 1.656}, {key: '1 cup kernel (250mL)', value: 1.847}]},
                  {name: 'Sweet corn, kernel, fresh, microwaved, no salt added', variant: 'Sweet corn', carb: 16.2, amounts: [{key: '100g', value: 1}, {key: '1 cob (17.8 x 5.1cm diameter)', value: 1.294}, {key: '1 cup kernel (250mL)', value: 1.844}]},
                  {name: 'Taro, corm, flesh, baked', variant: 'Taro', carb: 24.7, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.475}]},
                  {name: 'Taro, corm, flesh, boiled', variant: 'Taro', carb: 24.9, amounts: [{key: '100g', value: 1}, {key: '1 cup sliced (250mL)', value: 1.45}]},
                  {name: 'Tofu, soy bean curd, regular, firm, simmered or pouched, no salt added', variant: 'Tofu', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 piece', value: 0.332}]},
                  {name: 'Tofu, soy bean curd, regular, firm, stir-fried, no salt added', variant: 'Tofu', carb: 0, amounts: [{key: '100g', value: 1}, {key: '1 piece (3.5 x 2.2 x 2.6cm)', value: 0.182}]},
                  {name: 'Tomato, sun-dried', variant: 'Tomato', carb: 43.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.54}]},
                  {name: 'Turnip, root, flesh, boiled, drained, no salt added', variant: 'Turnip', carb: 2.3, amounts: [{key: '100g', value: 1}, {key: '1 cup mashed (250mL)', value: 1.22}]},
                  {name: 'Yams, New Zealand, red, unpeeled, baked without fat', variant: 'Yams', carb: 18.8, amounts: [{key: '100g', value: 1}]},
                  {name: 'Yams, New Zealand, red, unpeeled, boiled, drained, no salt added', variant: 'Yams', carb: 12.5, amounts: [{key: '100g', value: 1}]}
                  ]},
                {name: 'Frozen Vegetables', category: 'Vegetables & Pulses', carbs: [
                  {name: 'Broccoflower, frozen, raw', variant: 'Broccoflower', carb: 2.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 0.95}]},
                  {name: 'Broccoflower, frozen, boiled, drained, no salt added', variant: 'Broccoflower', carb: 2.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.64}]},
                  {name: 'Pea, green, frozen, boiled, drained, no salt added', variant: 'Pea', carb: 9.2, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.806}]},
                  {name: 'Potato, fries beer batter, frozen, baked', variant: 'Potato', carb: 24.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.561}]},
                  {name: 'Potato, fries tempura, frozen, baked, Crunchy Steak Cut Fries, Wattie\'s', variant: 'Potato', carb: 24.1, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.721}]},
                  {name: 'Potato, fries, chunky cut, frozen, precooked in canola oil, baked', variant: 'Potato', carb: 32.7, amounts: [{key: '100g', value: 1}, {key: '10 chips or fries', value: 0.826}]},
                  {name: 'Potato, fries, chunky cut, frozen, precooked in polyunsaturated oil, baked', variant: 'Potato', carb: 25.8, amounts: [{key: '100g', value: 1}, {key: '10 chips or fries', value: 0.8}]},
                  {name: 'Potato, fries, shoestring cut, frozen, precooked in polyunsaturated oil, baked', variant: 'Potato', carb: 33, amounts: [{key: '100g', value: 1}, {key: '10 chips or fries', value: 0.21}]},
                  {name: 'Potato, fries, straight cut, frozen, precooked in polyunsaturated oil, baked', variant: 'Potato', carb: 26.2, amounts: [{key: '100g', value: 1}, {key: '10 chips or fries', value: 0.588}]},
                  {name: 'Potato, wedges lower fat & salt, baked, Wedges Crunchy, Pams', variant: 'Potato', carb: 24.5, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.509}]},
                  {name: 'Potato, wedges, frozen, precooked in polyunsaturated oil, baked', variant: 'Potato', carb: 28.5, amounts: [{key: '100g', value: 1}, {key: '10 wedges', value: 0.947}]},
                  {name: 'Sweet corn, kernel, frozen, boiled, drained, no salt added', variant: 'Sweet corn', carb: 8.3, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.826}]},
                  {name: 'Vegetables mix, carrots, corn & peas, frozen, boiled, drained, no salt added', variant: 'Vegetables mix', carb: 10.4, amounts: [{key: '100g', value: 1}, {key: '1 cup (250mL)', value: 1.45}]}
                ]},
                {name: 'Pickled Vegetables', category: 'Vegetables & Pulses', carbs: [
                  {name: 'Gherkin, pickled, in sweetened brine, drained', variant: 'Gherkin', carb: 25.5, amounts: [{key: '100g', value: 1}, {key: '1 gherkin (2 x 6cm)', value: 0.19}]},
                  {name: 'Onion, pickled', variant: 'Onion', carb: 13, amounts: [{key: '100g', value: 1}, {key: '1 onion', value: 0.25}]}
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
              $scope.result = Math.round(sum / $scope.carbUnit.value * 10) / 10;
            };

            $scope.getCarbs = function () {
              $scope.carbs = [];
              for (var n = 0; n < $scope.categories.length; n++) {
                if (($scope.categories[n].name === $scope.categoryselect.name) && ($scope.categories[n].category === $scope.categoryselect.category)) {
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