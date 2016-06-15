// player object constructor
function players(points){
  this.points = points;
}
// dice roll function

var diceRoll = function(){
  return Math.floor(Math.random() * 6 + 1);
}


$(document).ready(function(){

  $("#pig-dice-game").submit(function(event){
    event.preventDefault();
    var input = ($("#blank").val());

    var output = "";

    $('#output').text(output);

  });
});
