angular.module('apiApp').controller('mainCtrl', function($scope, apiService){

  // Test to make sure app is working:
  $scope.test = "bOOya!! The app is working.";

  apiService.getPokemon().then(function(responce){
    $scope.pokemon = responce;
  });

  

});
