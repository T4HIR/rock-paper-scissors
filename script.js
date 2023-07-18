function getComputerChoice() {
  let x = Math.floor(Math.random() * 3);
  let computer;

  if (x === 0) {
    computer = 'rock';
  }
  else if (x === 1) {
    computer = 'paper';
  }
  else if (x === 2) {
    computer = 'scissors';
  }

  return computer;
}

let playersScore = 0;
let computersScore = 0;

function playRound(playerSelection, computerSelection) {
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    document.querySelector('.results').innerHTML = 'Tie';
    document.querySelector('.game-over').innerHTML = '';
    return "It's a tie!";
  }
  else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
    document.querySelector('.results').innerHTML = 'Win';
    playersScore++;
    document.querySelector('.player-score').innerHTML = playersScore;

    document.querySelector('.game-over').innerHTML = '';

    isGameOver();

    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  else {
    document.querySelector('.results').innerHTML = 'Loss';
    computersScore++;
    document.querySelector('.computer-score').innerHTML = computersScore;

    document.querySelector('.game-over').innerHTML = '';

    isGameOver();

    return `You lose! ${computerSelection} beats ${playerSelection}`;
  }
}

function lowerCase(choice) {
  return choice.toLowerCase();
}

function game(result) {
  let playerScore = 0;
  let computerScore = 0;

  let i = 0;

  while (i < 5) {
    result = playRound();
    console.log(result);

    comparison = result.slice(0, 8);

    if (comparison === 'You win!') {
      playerScore++;
    }
    else if (comparison === 'You lose') {
      computerScore++;
    }

    i++;
  }

  if (playerScore > computerScore) {
    return 'The player won! The computer lost';
  }
  else if (computerScore > playerScore) {
    return 'The player lost :( The computer won';
  }
  else {
    return 'TIE';
  }
}

document.querySelector('.rock').addEventListener('click', () => { playRound('rock') });
document.querySelector('.paper').addEventListener('click', () => { playRound('paper') });
document.querySelector('.scissors').addEventListener('click', () => { playRound('scissors') });

function isGameOver() {
  if (playersScore === 5 || computersScore === 5) {
    document.querySelector('.game-over').innerHTML = 'GAME OVER';
    playersScore = 0;
    computersScore = 0;
    document.querySelector('.player-score').innerHTML = '0';
    document.querySelector('.computer-score').innerHTML = '0';
  }
}

