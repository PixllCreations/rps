let playerScore = 0;
let computerScore = 0;
let numWins;

while (true) {
  numWins = parseInt(prompt("How many rounds would you like this series to be best of? (odd numbers only)"));
  if (numWins % 2 === 1) {
    break;
  }
  alert("Invalid input. You must enter an odd number.");
}

function getComputerChoice() {
    const moves = ["rock","paper","scissors"];
    return moves[Math.floor(Math.random() * moves.length)];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    var tie = 'Its a tie! Try again.';
    var win = 'You win! ' + playerSelection + ' beats ' + computerSelection;
    var lose = 'You lose! ' + computerSelection + ' beats ' + playerSelection;

    if (playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
            playerScore++;
            return win;
        } else if (playerSelection === computerSelection) {
            return tie;
        } else {
            computerScore++;
            return lose;
        }
    }

    function displayScore() {
        console.log('Player: ' + playerScore + ' | Computer: ' + computerScore);
    }

    function displayWinner() {
        if (playerScore > numWins / 2) {
            console.log('You win the series!');
        } else {
            console.log('You lose the series!');
        }
    }

function playGame() {

    while (true) {
        if (playerScore > numWins / 2 || computerScore > numWins / 2) {
            displayWinner();
            return; 
        }
        let computerSelection = getComputerChoice();
        while (true) {
            playerSelection = prompt('Player: ' + playerScore + ' | Computer: ' + computerScore + ' : Choose rock, paper, or scissors.');
            playerSelection = playerSelection.toLowerCase();
            if (playerSelection === 'rock' || playerSelection === 'paper' || playerSelection === 'scissors') {
                break;
            }
            alert('Invalid input. You must choose rock, paper, or scissors.');
        }
        console.log(playRound(playerSelection, computerSelection));
        displayScore(); 
    }
}

playGame();