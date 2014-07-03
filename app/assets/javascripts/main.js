var mtApp = angular.module('mtApp', ['ngRoute', 'templates']);

mtApp.config(function($routeProvider){
    $routeProvider
    .when('/contact', {
      templateUrl: 'contact.html'
    })
    .when('/resume', {
      templateUrl: 'MikeTalleyResume.pdf'
    })
    .otherwise({
      templateUrl: 'mainIndex.html'
    });
});
