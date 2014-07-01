var mtApp = angular.module('mtApp', ['ngRoute']);

mtApp.config(['$routeProvider', function($routeProvider){
    // default route
   $routeProvider.otherwise({
    templateUrl: '../assets/mainIndex.html',
    controller: 'mainCtrl'
    });
}]);
