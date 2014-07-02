var mtApp = angular.module('mtApp', ['ngRoute']);

mtApp.config(function($routeProvider){
    $routeProvider
    .when('/contact', {
      templateUrl: '../assets/contact.html',
    })
    .when('/resume', {
      templateUrl: '../assets/MikeTalleyResume.pdf',
    })
    .otherwise({
      templateUrl: '../assets/mainIndex.html',
    });
});
