//Defining-Routes
'use strict';

angular.module('PremierLeague',['ngRoute'])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/all-matches', {
    templateUrl: 'templates/all-matches/index.html',
    controller: 'ShowAllMatches',
    controllerAs: 'showAllCtrl'
  });

}]);
