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

function playRound(playerSelection, computerSelection) {
  playerSelection = lowerCase(prompt('Rock, paper, or scissors?'));
  computerSelection = getComputerChoice();

  if (playerSelection === computerSelection) {
    return "It's a tie!";
  }
  else if (playerSelection === 'rock' && computerSelection === 'scissors' || playerSelection === 'paper' && computerSelection === 'rock' || playerSelection === 'scissors' && computerSelection === 'paper') {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  else {
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