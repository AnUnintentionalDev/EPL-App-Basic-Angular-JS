app.controller('teamStatsController',  ['Matches', '$routeParams', function(Matches, $routeParams){

  var main = this;
  // USING-ROUTE-PARAMS-TO-RETRIEVE-DATA
  this.id1 = $routeParams.id1;
  this.teamName = $routeParams.teamName;

  //DEFINING-VARIABLES
  this.heading = this.teamName + " Statistics";

  // FUNCTION-FOR-LOAD-TEAM-STATS
  this.loadTeamStats = function(){
    // CALCULATOR-FUNCTION-FOR-TEAM-STATS
    function calculateTeamStats(response, year){

      // VARIABLES-DECLARATION-FOR-CALCULATOR
      var totalMatchesPlayed = 0, totalWins = 0, totalLoss = 0, totalTie = 0, totalGoalsScored = 0, checker = 0;

      // STORING-RESPONSE-DATA-FROM-API
      main.data = response.data.rounds;

      // ITERATE-THROUGH-ROUNDS
      for(var i in main.data){
        // ITERATE-THROUGH-MATCHES
        for(var j in main.data[i].matches){
          // CHECK_CONDITION-WHEN-TEAMONENAME-FROM-ROUTE-PARAMS-&-MATCHES-NAME-ARE-TRUE
          if(main.data[i].matches[j].team1.name == main.teamName){

            checker = 1;

            totalMatchesPlayed++;

            totalGoalsScored += main.data[i].matches[j].score1;

            if(main.data[i].matches[j].score1 == main.data[i].matches[j].score2){
              totalTie++;
            }
            else if(main.data[i].matches[j].score1 > main.data[i].matches[j].score2){
              totalWins++;
            }
            else if(main.data[i].matches[j].score1 < main.data[i].matches[j].score2){
              totalLoss++;
            }
          }
          // ELSE-IF-CHECK_CONDITION-WHEN-TEAMTWONAME-FROM-ROUTE-PARAMS-&-MATCHES-NAME-ARE-TRUE
          else if(main.data[i].matches[j].team2.name == main.teamName){
            checker = 1;

            totalMatchesPlayed++;

            totalGoalsScored += main.data[i].matches[j].score2;

            if(main.data[i].matches[j].score1 == main.data[i].matches[j].score2){
              totalTie++;
            }
            else if(main.data[i].matches[j].score1 < main.data[i].matches[j].score2){
              totalWins++;
            }
            else if(main.data[i].matches[j].score1 > main.data[i].matches[j].score2){
              totalLoss++;
            }
          }
          // END-OF-ELSE-IF-CHECK_CONDITION-WHEN-TEAMTWONAME-FROM-ROUTE-PARAMS-&-MATCHES-NAME-ARE-TRUE
        }
      }
      // END-OF-ITERATE-THROUGH-ROUNDS
      // STATS-DATA-OF-2015
      function statsOf2015(checker){

        if(checker != 2015){
          alert("Team not payed in 2015!!");
        }
        main.totalMatchesPlayedOf2015 = totalMatchesPlayed;
        main.totalWinsOf2015 = totalWins;
        main.totalLossOf2015 = totalLoss;
        main.totalTieOf2015 = totalTie;
        main.totalGoalsScoredOf2015 = totalGoalsScored;
        main.winPercentOf2015 = ((totalWins*100)/totalMatchesPlayed).toFixed(2);
        main.lossPercentOf2015 = ((totalLoss*100)/totalMatchesPlayed).toFixed(2);

        //console.log(main.totalMatchesPlayedOf2015);
        //console.log(main.totalWinsOf2015);
        //console.log(main.totalLossOf2015);
        //console.log(main.totalTieOf2015);
        //console.log(main.totalGoalsScoredOf2015);

        //console.log(main.winPercentOf2015);
        //console.log(main.lossPercentOf2015);
      }

      if(year == 2015){
        if(checker == 1)
        checker = 2015;
        statsOf2015(checker);
      }

      console.log("NEW DATA");
      // STATS-DATA-OF-2016
      function statsOf2016(){

        if(checker != 2016){
          alert("Team not payed in 2016!!");
        }

        main.totalMatchesPlayedOf2016 = totalMatchesPlayed;
        main.totalWinsOf2016 = totalWins;
        main.totalLossOf2016 = totalLoss;
        main.totalTieOf2016 = totalTie;
        main.totalGoalsScoredOf2016 = totalGoalsScored;
        main.winPercentOf2016 = ((totalWins*100)/totalMatchesPlayed).toFixed(2);
        main.lossPercentOf2016 = ((totalLoss*100)/totalMatchesPlayed).toFixed(2);

        //console.log(main.totalMatchesPlayedOf2016);
        //console.log(main.totalWinsOf2016);
        //console.log(main.totalLossOf2016);
        //console.log(main.totalTieOf2016);
        //console.log(main.totalGoalsScoredOf2016);

        //console.log(main.winPercentOf2016);
        //console.log(main.lossPercentOf2016);
      }

      if(year == 2016){
        if(checker == 1)
        checker = 2016;
        statsOf2016(checker);
      }

    } // END-OF-CALCULATE-TEAM-STATS
    // END-OF-CALCULATOR-FUNCTION-FOR-TEAM-STATS
    //LOAD-STATS-OF-2015-WITH-HTTP-SERVICE
    main.loadStatsOf2016 = function(){
      Matches.getDataOf2015()
      .then(function success(response){
        var year = 2015;
        calculateTeamStats(response, year);

      }, function(reason){
					alert("Some error occured, check console") ;
					console.log( reason ) ;
				});
    }();

    //LOAD-STATS-OF-2016-WITH-HTTP-SERVICE
    main.loadStatsOf2016 = function(){
      Matches.getDataOf2016()
      .then(function success(response){

        var year = 2016;
        calculateTeamStats(response, year);

      }, function(reason){
					alert("Some error occured, check console") ;
					console.log( reason ) ;
				});
    }();
  }();
  // END-OF-FUNCTION-FOR-LOAD-TEAM-STATS

}]);
