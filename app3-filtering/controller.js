angular.module('myApp3').controller('filterController', function($scope, filterService){

  // Test to make sure app is working:
  //$scope.test = "bOOya!!";

  $scope.filterService = filterService.myData();

});
