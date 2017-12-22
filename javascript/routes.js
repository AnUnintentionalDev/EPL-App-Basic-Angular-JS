//Defining-Routes
app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $locationProvider.hashPrefix('');
  $routeProvider
  .when('/', {
    redirectTo: 'index.html'
  })
  .when('/all-matches', {
    templateUrl : 'templates/all-matches/index.html',
    controller  : 'allMatchesController',
    controllerAs: 'ShowMatchesCtrl'
  })
  .when('/single-match/:id1/:matchId/:date', {
    templateUrl : 'templates/single-match/index.html',
    controller  : 'watchSingleMatch',
    controllerAs: 'SingleMatchCtrl'
  })
  .when('/team-stats', {
    templateUrl : 'templates/team-stats/index.html',
    controller  : 'teamNameController',
    controllerAs: 'teamNameCtrl'

  })
  .when('/team-stats/:teamName/:id1', {
    templateUrl : 'templates/team-stats/show-match-stats.html',
    controller  : 'teamStatsController',
    controllerAs: 'teamStatsCtrl'
  })
  ;
}]);
