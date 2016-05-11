'use strict';

var getInput = function() {
   console.log("Please choose either 'rock', 'paper', or 'scissors'.");
   var answer = prompt();
   return answer;
};

var randomPlay = function() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return 'rock';
    } else if (randomNumber < 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
};


var getPlayerMove = function(move) {
    if (move) {
      return move;
    }
    else {
      return getInput();
    }
  };

var getComputerMove = function(move) {
     if (move) {
      return move;
    }
    else {
      return randomPlay();
    }
  };

var getWinner = function(playerMove, computerMove) {

  var winner;

    if (playerMove == computerMove) {
      winner = "tie";
    }
    else if ((playerMove == "scissors") && (computerMove == "rock")) {
      winner= "computer";
    }
    else if ((playerMove == "paper") && (computerMove == "scissors")) {
      winner= "computer";
    }
    else if ((playerMove =="rock") && (computerMove == "paper")) {
      winner= "computer";
    }
    else if ((playerMove == "rock") && (computerMove == "scissors")) {
      winner= "player";
    }
    else if ((playerMove == "scissors") && (computerMove == "paper")) {
      winner= "player";
    }
    else if ((playerMove == "paper") && (computerMove == "rock")) {
      winner= "player";
    }

    return winner;
};

var playToFive = function() {
  console.log('Let\'s play Rock Paper Scissors');
  var playerWins = 0;
  var computerWins = 0;


  while (playerWins <=  4 && computerWins <= 4 ) {

    var userInput = getPlayerMove();
    var computerInput = getComputerMove();
    var winner = getWinner(userInput, computerInput);

    console.log("Player: " + userInput + ", Computer: " + computerInput + ". Winner is " + winner);

    if (winner == "player") {
      playerWins = playerWins + 1;
    }
    else if (winner == "computer") {
      computerWins = computerWins + 1;
    }

    console.log("Scoreboard Player vs. Computer: " + playerWins + " : " + computerWins);

  }
  if (playerWins > computerWins) {
    console.log("You won! Congratulations");
  }
  else if (playerWins < computerWins) {
    console.log("Game Over, you lost!")
  }

};

console.log(playToFive());
