function Player(points, roundpoints, playertype, turn) {
  this.points = points;
  this.roundpoints = roundpoints;
  this.player = playertype;
  this.turn = turn;
}

var diceRoll = function(){
  return Math.floor(Math.random() * 6 + 1);
}
adgfadsgfdsg fd fgsdg 
// var playerOne = {
//
// };
// var playerTwo = {
//
// };

$(document).ready(function(){
  $('#playerSelect').submit(function (event) {
    event.preventDefault();
    debugger;
    var gameType = $("#players option:selected").val();
    // console.log(gameType);
    if (gameType === 'Player vs Player'){
      playerOne = new Player (0, 0, "human", 2);
      playerTwo = new Player (0, 0, "human");
    } else {
      playerOne = new Player (0, 0, "human");
      playerTwo = new Player (0, 0, "computer");
    }
  });

  // if (playerTwo.player === "computer") {
  //
  // }


  $("#roll").click(function(){
    var currentRoll = diceRoll();
    if (playerOne.turn %2 === 0) {
      if (currentRoll === 1) {
        currentRoll = 0;
        playerOne.turn ++;
      }
    playerOne.roundPoints += currentRoll;
  } else {
      if (currentRoll === 1) {
        currentRoll = 0;
        playerOne.turn ++;
      }
    playerTwo.roundPoints += currentRoll;
  }
  });

  $("#hold").click(function(){

    if (playerOne.turn % 2 === 0) {
    $("#player-turn").text("Player Two Turn");
    playerOne.points += playerOne.roundpoints;
    $('#player-one-points').text(playerOne.points);
    playerOne.turn += 1;
    playerOne.roundPoints = 0;
    $("#round-points").text('0');
  } else {
    $("#player-turn").text("Player One Turn");
    playerTwo.points += playerTwo.roundpoints;
    $('#player-two-points').text(playerTwo.points);
    playerOne.turn += 1;
    playerTwo.roundPoints = 0;
    $("#round-points").text('0');
  }

  if (playerOne.points >= 100) {
    alert("Player one wins!");
    playerOne.points = 0;
    playerTwo.points = 0;
    $('#player-one-points').text(playerOne.points);
    $('#player-two-points').text(playerTwo.points);
  } else if (playerTwo.points >= 100) {
    alert("Player two wins!");
    playerOne.points = 0;
    playerTwo.points = 0;
    playerOne.turn += 1;
    $('#player-one-points').text(playerOne.points);
    $('#player-two-points').text(playerTwo.points);
  }
  });
});
