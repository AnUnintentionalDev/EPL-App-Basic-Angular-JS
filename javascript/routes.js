//Defining-Routes
app.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    redirectTo: 'index.html'
  })
  .when('/all-matches', {
    templateUrl : 'templates/all-matches/index.html',
    controller  : 'allMatchesController',
    controllerAs: 'ShowMatchesCtrl'
  })
  ;
}]);
