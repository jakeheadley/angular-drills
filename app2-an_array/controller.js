angular.module('arrayApp').controller('arrayController', function($scope, dataService){

  //$scope.test = 'Hurahh, it works!!';

  $scope.dataService = dataService.myData();

});
