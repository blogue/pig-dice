var playerOneTurn = true;

function Player(name, playertype) {
  this.name = name;
  this.player = playertype;
  this.points = 0;
  this.roundPoints = 0;
}

Player.prototype.diceRoll = function(){
   var currentRoll = Math.floor(Math.random() * 6 + 1);
   this.roundPoints += currentRoll;
   return currentRoll;
}

Player.prototype.hold = function(){
  this.points += this.roundPoints;
}

$(document).ready(function(){
  var playerOne;
  var playerTwo;
  var dice = ["&#9856", "&#9857", "&#9858", "&#9859", "&#9860", "&#9861"];

  var diceDisplay = function(side){
     return $("#dice-roll").html("<h1>" + dice[side - 1] + "</h1>");

  }

  $("#start-game").click(function(){
     playerOne = new Player("John", "human");
     playerTwo = new Player("Hal", "computer")
  });

      $("#roll").click(function(){

        if (playerOneTurn === true) {
          $("#player-turn").text("Player One Turn");
           currentRoll = playerOne.diceRoll();
            if (currentRoll === 1) {
              alert(playerOne.name + " rolled a 1 and loses their turn.");
              playerOne.roundPoints = 0;
              playerOneTurn = false;
              $("#player-turn").text("Player Two Turn");
            }

          diceDisplay(currentRoll);
          $("#round-points").text(playerOne.roundPoints);

            } else  {
            $("#player-turn").text("Player Two Turn");
             currentRoll = playerTwo.diceRoll();
              if (currentRoll === 1) {
                alert(playerTwo.name + " rolled a 1 and loses their turn.");
                playerTwo.roundPoints = 0;
                playerOneTurn = true;
                $("#player-turn").text("Player One Turn");
              }

            diceDisplay(currentRoll);
            $("#round-points").text(playerTwo.roundPoints);
        }
      });

      $("#pig-dice-game").submit(function(event){
        event.preventDefault();
        if (playerOneTurn === true) {
        $("#player-turn").text("Player Two Turn");

        playerOne.points += playerOne.roundPoints;
        $('#player-one-points').text(playerOne.points);
        if (playerOne.points >= 30) {
          alert(playerOne.name + " wins!");
        }
        playerOneTurn = false;
        playerOne.roundPoints = 0;
        $("#round-points").text(playerOne.roundPoints);
      } else {
        $("#player-turn").text("Player One Turn");
        playerTwo.points += playerTwo.roundPoints;
        $('#player-two-points').text(playerTwo.points);
        if (playerTwo.points >= 30) {
          alert(playerTwo.name + " wins!");
        }
        playerOneTurn = true;
        playerTwo.roundPoints = 0;
        $("#round-points").text(playerOne.roundPoints);
      }
  });
});
