app.controller('watchSingleMatch', ['Matches', '$routeParams', function(Matches, $routeParams){

  var main = this;
  // USING-ROUTE-PARAMS-TO-RETRIEVE-DATA
  this.id1 = $routeParams.id1;
  this.matchId = $routeParams.matchId;
  this.date = $routeParams.date;

  // EMPTY-VARIABLE-VALUES-FOR-THIS-SINGLE-MATCH-CASE
  this.team1 = "";
  this.team2 = "";
  this.team1Code = "";
  this.team2Code = "";
  this.score1 = "";
  this.score2 = "";
  this.winner = "";
  //this.matchData = [];

  // FUNCTION-DECLARATION-FOR-CALCULATING-SINGLE-MATCH-Stats
  this.loadSingleMatchData = function(){

    function matchCalculator(response){
      //RESPONSE-DATA
      main.matchData = response.data.rounds;
      //FOR-IN-LOOP-TO-ITERATE-THROUGH-RESPONSE-DATA
      for(tbody in main.matchData) {
        //FOR-IN-LOOP-TO-ITERATE-THROUGH-MATCHES
        for(match in main.matchData[tbody].matches){
          // CHECKING-CONDITION-OF-ROUTE-PARAMS-&-RESPONSE-DATA
          if((tbody == main.id1) && (match == main.matchId) && main.date == main.matchData[tbody].matches[match].date) {
            main.team1 = main.matchData[tbody].matches[match].team1.name;
            main.team2 = main.matchData[tbody].matches[match].team2.name;
            main.team1Code = main.matchData[tbody].matches[match].team1.code;
            main.team2Code = main.matchData[tbody].matches[match].team2.code;

            main.score1 = main.matchData[tbody].matches[match].score1;
            main.score2 = main.matchData[tbody].matches[match].score2;

            console.log(main.team1);
            console.log(main.team2);
            console.log(main.score1);
            console.log(main.score2);

            // WINNER-ANALYSIS
            if(main.score2 > main.score1) {
              main.winner = main.team2;
            }
            else if(main.score2 < main.score1) {
              main.winner = main.team1;
            }
            else{
              main.winner = "Match Tied!";
            }
            // END-OF-WINNER-ANALYSIS
          }
        }
        //END-OF-FOR-IN-LOOP-TO-ITERATE-THROUGH-MATCHES
      }
      //END-OF-FOR-IN-LOOP-TO-ITERATE-THROUGH-RESPONSE-DATA
    }

    // LOAD-SINGLE-MATCH-OF-2015
    main.loadSingleMatchOf2015 = function () {
      //CALLING-SERVICE-AND-DATA-OF-2015
      Matches.getDataOf2015()
      .then(function(response){
        matchCalculator(response);

      }, function(reason){
          alert("Some Error Occured! Check Console");
          console.log("reason");
      })
      //END-OF-CALLING-SERVICE-AND-DATA-OF-2015
    }();
    // END-OF-LOAD-SINGLE-MATCH-OF-2015
    // LOAD-SINGLE-MATCH-OF-2016
    main.loadSingleMatchOf2016 = function () {
      //CALLING-SERVICE-AND-DATA-OF-2016
      Matches.getDataOf2016()
      .then(function(response){
        matchCalculator(response);

      }, function(reason){
          alert("Some Error Occured! Check Console");
          console.log("reason");
      })
      //END-OF-CALLING-SERVICE-AND-DATA-OF-2016
    }();
    // END-OF-LOAD-SINGLE-MATCH-OF-2016
  }();
  // END-OF-FUNCTION-DECLARATION-FOR-CALCULATING-SINGLE-MATCH-Stats
}]);
