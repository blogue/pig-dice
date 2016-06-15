// player object constructor
// function Players(points){
//   this.points = points;
// }
// dice roll function

var diceRoll = function(){
  return Math.floor(Math.random() * 6 + 1);
}


$(document).ready(function(){
    var playerOne = {
      pointTotal: 0,
      turn: 2
    }

    var playerTwo = {
      pointTotal: 0,
      turn: 1
    }
    var roundPoints = 0;

      $("#roll").click(function(){
        roll = diceRoll();
        roundPoints += roll;
        if (playerOne.turn % 2 === 0 && roll === 1) {
          $("#player-turn").text("Player Two Turn");
          playerOne.turn += 1;
          roundPoints = 0;
          $("#round-points").text(roundPoints);
        } else if (playerOne.turn % 2 !== 0 && roll === 1) {
          $("#player-turn").text("Player One Turn");
          playerOne.turn += 1;
          roundPoints = 0;
          $("#round-points").text(roundPoints);
        }

        $("#dice-roll").text(roll);
        $("#round-points").text(roundPoints);

      });

      $("#pig-dice-game").submit(function(event){
        event.preventDefault();
        if (playerOne.turn % 2 === 0) {
        $("#player-turn").text("Player Two Turn");

        playerOne.pointTotal += roundPoints;
        $('#player-one-points').text(playerOne.pointTotal);
        playerOne.turn += 1;
        roundPoints = 0;
        $("#round-points").text(roundPoints);
      } else {
        $("#player-turn").text("Player One Turn");
        playerTwo.pointTotal += roundPoints;
        $('#player-two-points').text(playerTwo.pointTotal);
        playerOne.turn += 1;
        roundPoints = 0;
        $("#round-points").text(roundPoints);
      }


  });
});
