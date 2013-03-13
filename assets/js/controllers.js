'use strict';

/* Controllers */
/*
function AppCtrl($scope, $http) {
  $http({method: 'GET', url: '/api/name'}).
  success(function(data, status, headers, config) {
    $scope.name = data.name;
  }).
  error(function(data, status, headers, config) {
    $scope.name = 'Error!'
  });
}
*/
function WishListController($scope) {
    alert("Hello");
    $scope.wishList=[
        {"id":1, "wishDesc":"My First Wish"},
        {"id":2, "wishDesc":"My second Wish"},
        {"id":3, "wishDesc":"My Third Wish"},
        {"id":4, "wishDesc":"My Fourth Wish"}    
    ];    
    
    $scope.addWishItem = function(){};
    
    
    
    
}




