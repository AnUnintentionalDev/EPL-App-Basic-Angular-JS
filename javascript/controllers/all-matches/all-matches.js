// All-Matches-Controller
'use strict';
angular.module('PremierLeague',[])
.controller('ShowAllMatches', ['$http', function($http){

  var main = this;
  this.data_rounds2015 = [];

  this.baseUrl_2015 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2015-16/en.1.json';

  this.loadAllMatchesHeldIn2015 = function(){
    $http({
        method : 'GET',
        url : main.baseUrl_2015
    })
    .then(function success(response){
      // console-all-data-of-2015
      main.dataName2015 = response.data.name;
      console.log(main.dataName2015);

      main.data_rounds2015 = response.data.rounds;
      console.log(main.data_rounds2015);

    },function error(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      alert("some error occurred. Check the console.");
      //return console.log(response);
      $location.path('/error');

    });
  };

  this.data_rounds2016 = [];
  this.baseUrl_2016 = 'https://raw.githubusercontent.com/openfootball/football.json/master/2016-17/en.1.json';

  this.loadAllMatchesHeldIn2016 = function(){
    $http({
        method : 'GET',
        url : main.baseUrl_2016
      })
      .then(function success(response){
        // console-all-data-of-2016

        main.dataName2016 = response.data.name;
        console.log(main.dataName2016);

        main.data_rounds2016 = response.data.rounds;
        console.log(main.data_rounds2016);

      },function error(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        alert("some error occurred. Check the console.");
        //return console.log(response);
        $location.path('/error');

      });
    };
}]);