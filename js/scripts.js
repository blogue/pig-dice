function Player(name, playerType) {
  this.name = name;
  this.playerType = playerType;
  this.points = 0;
  this.roundPoints = 0;
};

function Game() {
  this.players = [];
  this.turn = 0;
  this.winner = false;
};

Game.prototype.whoseTurn = function(){
  return this.players[this.turn%this.players.length];
};

Game.prototype.displayPlayerInfo = function(){
  var currentPlayer = this.whoseTurn();
  $("#round-points").text(currentPlayer.roundPoints);
  $("#player-turn").text(currentPlayer.name + "'s Turn.");
  $("#playerOnePoints").text(this.players[0].name + "'s points: " + this.players[0].points);
  $("#playerTwoPoints").text(this.players[1].name + "'s points: " + this.players[1].points);
  if (this.whoseTurn() === this.players[0]) {
    $("#playerOneCard").addClass("active-player");
  } else {
    $("#playerOneCard").removeClass("active-player");
  }
  if (this.whoseTurn() === this.players[1]) {
    $("#playerTwoCard").addClass("active-player");
  } else {
    $("#playerTwoCard").removeClass("active-player");
  }
};

Game.prototype.rollDice = function() {
  var currentPlayer = this.whoseTurn();
  var currentRoll = Math.ceil(Math.random() * 6);
  if (currentRoll === 1) {
   currentPlayer.roundPoints = 0;
   this.turn++;
   this.displayPlayerInfo();
   return currentRoll;
 } else {
  currentPlayer.roundPoints += currentRoll;
  this.displayPlayerInfo();
  return currentRoll;
  }
};

Game.prototype.roundPointsToTotal = function() {
  debugger;
  var currentPlayer = this.whoseTurn();
  currentPlayer.points += currentPlayer.roundPoints;
  currentPlayer.roundPoints = 0;
  if (currentPlayer.points >= 30) {
    this.displayPlayerInfo();
    return this.winner = true;
  } else {
  this.turn++;
  this.displayPlayerInfo();
  }
};

$(document).ready(function() {
  var game = new Game();
  game.players.push(new Player("John", "human"));
  game.players.push(new Player("Hal", "computer"));
  var dice = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];
  var diceDisplay = function(side) {
     return $("#dice-roll").html("<h1>" + dice[side - 1] + "</h1>");
  }
  $("#player-turn").text(game.players[0].name + "'s Turn");
  $("#round-points").text(0);
  $("#playerOnePoints").text(game.players[0].name + "'s points: " + 0);
  $("#playerTwoPoints").addClass("inactive-player").text(game.players[1].name + "'s points: " + 0);
  $("#dice-roll").html("<h1>" + dice[5] + "</h1>");

  $("#roll").click(function(){

    if (game.whoseTurn().playerType === "human") {
      diceDisplay(game.rollDice());
      game.displayPlayerInfo();
    } else {
    debugger;
    while (game.whoseTurn().playerType === "computer") {
      diceDisplay(game.rollDice());
        if (game.whoseTurn().roundPoints >= 12) {
          game.roundPointsToTotal();
          if (game.winner) {
            $("#player-turn").text(game.whoseTurn().name.toUpperCase() + "'S THE WINNER!");
            $("#hold, #roll").attr("disabled", true);
            break;
          }
        }
      }
    }
  });

  $("#hold").click(function(){
    debugger;
    game.roundPointsToTotal();
    if(game.winner){
      $("#player-turn").text(game.whoseTurn().name.toUpperCase() + "'S THE WINNER!");
      $("#hold, #roll").attr("disabled", true);
    }
  });
});
