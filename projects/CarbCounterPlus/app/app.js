'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.core',
  'myApp.carbcalc',
  'myApp.dosecalc',
  'myApp.settings',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/core'});
}]);

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
    .then(function (registration) {
        //Registration was successful
        console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function (err) {
        //registration failed :(
        console.log('ServiceWorker registration failed: ', err);
    });
}