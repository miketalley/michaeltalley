//= require_self
//= require_tree ./controllers

var mtApp = angular.module('mtApp', ['ngRoute']);

mtApp.config(['$routeProvider', function($routeProvider){
    // Route for '/product'
    $routeProvider.when('/', {
    templateUrl: '../assets/mainIndex.html',
    controller: 'mainCtrl'
});

    // default route
   $routeProvider.otherwise({
    templateUrl: '../assets/mainIndex.html',
    controller: 'mainCtrl'
    });
}]);
