angular.module('apiApp').service('apiService', function($http){

  var baseUrl = 'http://pokeapi.co/api/v2/';

  this.getPokemon = function(){
     return $http.get(baseUrl + 'pokemon').then(function(responce){
       console.log(responce);
       return responce.data.results;
     })
  };

  this.myApi = function(){
		return getPokemon;
	};

});
