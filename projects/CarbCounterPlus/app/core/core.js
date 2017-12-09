'use strict';

angular.module('myApp.core', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/core', {
    templateUrl: 'core/core.html',
    controller: 'CoreCtrl'
  });
}])

.controller('CoreCtrl', [function() {

}]);