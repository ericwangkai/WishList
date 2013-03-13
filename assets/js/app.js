'use strict';

// Declare app level module which depends on filters, and services
angular.module('wishList').
  config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
      alert("My App");
    $routeProvider.when('/', {templateUrl: 'myHomePage', controller: WishListController});
    //$routeProvider.when('/view2', {templateUrl: 'angular/sample/partial2', controller: MyCtrl2});
   // $routeProvider.otherwise({redirectTo: '/view1'});
    //$locationProvider.html5Mode(true);
    
  }]);