app.controller('teamNameController', ['Matches', function(Matches){

  var teamStat = this;

  //DEFINING-VARIABLES
  this.heading = "Team Statistics";
  this.teamName = [];

  teamStat.teamName = [];
  this.getTeamNames = function(){
    Matches.getDataOf2015()
    .then(function success(response){
      teamStat.teamData = response.data.rounds;

      for(dataSet in teamStat.teamData){
        for(matchData in teamStat.teamData[dataSet].matches){
          teamStat.teamName.push(teamStat.teamData[dataSet].matches[matchData].team1.name);
        }
      }

      function unique(data){
        var newTeamName = [];
        $.each(data, function(i, e) {
          if ($.inArray(e, newTeamName) == -1)
          newTeamName.push(e);
        });
        return newTeamName;
      }

      teamStat.teamName = unique(teamStat.teamName);
      console.log(teamStat.teamName);
    })
  };

  this.getTeamNames();

}]);
