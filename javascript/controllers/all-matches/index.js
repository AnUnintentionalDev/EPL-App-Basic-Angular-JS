// All-Matches-Controller
app.controller("allMatchesController", ['Matches', function(Matches){

  var main = this;
  this.dataName2015 = "";
  this.dataOf2015 = [];

  // CALLING-GET-DATA-OF-2015-WITH-SERVICE
  Matches.getDataOf2015()
  .then(function success(response){
    main.dataName2015 = response.data.name;
    console.log(main.dataName2015);

    main.dataOf2015 = response.data.rounds;
    console.log(main.dataOf2015);

  }, function(reason){
		  alert("Some error occured");
		  console.log(reason);
  });
  // END-OF-CALLING-GET-DATA-OF-2015-WITH-SERVICE

  this.dataName2016 = "";
  this.dataOf2016 = [];

  // CALLING-GET-DATA-OF-2016-WITH-SERVICE
  Matches.getDataOf2016()
  .then(function success(response){
    main.dataName2016 = response.data.name;
    console.log(main.dataName2016);

    main.dataOf2016 = response.data.rounds;
    console.log(main.dataOf2016);

  }, function(reason){
		  alert("Some error occured");
		  console.log(reason);
  });
  // END-OF-CALLING-GET-DATA-OF-2016-WITH-SERVICE

}]);
