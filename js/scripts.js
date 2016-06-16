var players = [];
var turn = 0;
var roundPoints = 0;


function Player(name, points, playertype) {
  this.playerName = name;
  this.points = points;
  this.playerType = playertype;
}

var diceRoll = function(){
  return Math.floor(Math.random() * 6 + 1);
}

// function that checks turn

// function will check die and end turn if a one is rolled
var checkForOne = function(){
  if (roll === 1) {
    i++;
  }
}
// function will add roll to round points
var addToPoints = function(){
  return roundPoints += roll;
}
// function will end turn and add round points to player points and reset round points to zero
  var playerHold = function(){
    return players[i] += roundPoints;
  }
// function that checks length of array and if its at the end it will reset to beginning
var resetTurn = function() {

}


$(document).ready(function(){

  $("#add").click(function(){
    $("#new-players").append('<div class="new-player">'
        +  '<div class ="col-md-2 well">'
        +  '<div class="form-group">'
        +    '<label>Name: </label>'
        +    '<input id="player-name" type="text" name="name" value="">'
        +  '</div>'
        +  '<div class="form-group">'
        +    '<select id="player-type">'
        +      '<option selected disabled>Please select</option>'
        +      '<option>Human</option>'
        +      '<option>Computer</option>'
        +    '</select>'
      +    '</div>'
    +  '</div>'
    +  '</div>')

  });


  $('#players-select').submit(function (event) {
    event.preventDefault();

    $(".new-player").each(function(){
    var playerName = $(this).find("#player-name").val();
    var humanOrComputer = $(this).find("#player-type option:selected").val();

    var newPlayer = new Player(playerName, 0, humanOrComputer);
    players.push(newPlayer);
    });

  $("#roll").click(function(){
    roll = diceRoll();
    roundPoints += roll;

    $("#current-roll").text(roll);
    $("#round-points").text(roundPoints);
  });

  $("#hold").click(function(){
    players[turn].points += roundPoints;
    if (players[turn].points >= 15) {
      alert(players[turn].playerName + " is the winner!");
    }
    roundPoints = 0;
    turn++;
    if (turn >= players.length) {
    turn = 0;
    }
  });
});

});
