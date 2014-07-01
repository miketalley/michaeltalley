//= require_self
//= require_tree ./controllers

var mtApp = angular.module('mtApp', ['ngRoute']);

mtApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
    .when('/contact', {
      templateUrl: '../assets/contact.html',
      controller: 'mainCtrl'
    })
    .when('/resume', {
      templateUrl: '../assets/MikeTalleyResume.pdf',
      controller: 'mainCtrl'
    })
    .otherwise({
      templateUrl: '../assets/mainIndex.html',
      controller: 'mainCtrl'
    });
}]);
