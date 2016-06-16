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

var computerTurn = function() {

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
    if (roll === 1) {
      turn++;
      if (turn >= players.length) {
        turn = 0;
      }
      roundPoints = 0;
      alert("You rolled a 1, it's now " + players[turn].playerName + "'s turn")
    } else {
    roundPoints += roll;
    $("#current-roll").text(roll);
    $("#round-points").text(roundPoints);
    }
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
    if (players[turn].playerType === "Computer") {
      while(roundPoints < 25) {
        roll = diceRoll();
        roundPoints += roll;
      }
      players[turn].points += roundPoints;
      turn++;
    }
  });
});

});
