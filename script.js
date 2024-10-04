function getRandomInt(min, max) {
  max = Math.floor(max);
  min = Math.ceil(min);
  return Math.floor(Math.random() * (max - min)) + min;
}

function getComputerChoice() {
  const choice = getRandomInt(1, 4); 
  if (choice == 1) {
    return "Rock";
  } else if (choice == 2) {
    return "Paper";
  } else {
    return "Scissors"; 
  }
}

function getHumanChoice() {
  let choice = prompt("Enter your choice: ");
  if (choice) {
    choice = choice.toLowerCase(); 
    if (choice == "rock") {
      return "Rock";
    } else if (choice == "paper") {
      return "Paper";
    } else if (choice == "scissors") {
      return "Scissors";
    }
  }
  console.log("Invalid choice, please enter Rock, Paper, or Scissors.");
  return getHumanChoice(); 
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Draw");
    return 0;
  }

  if (
    (humanChoice == "Rock" && computerChoice == "Scissors") ||
    (humanChoice == "Paper" && computerChoice == "Rock") ||
    (humanChoice == "Scissors" && computerChoice == "Paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    return 1; 
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    return -1; 
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 3; i++) {
    const humanSelect = getHumanChoice();
    const computerSelect = getComputerChoice();
    const result = playRound(humanSelect, computerSelect);
    
    if (result == 1) {
      humanScore++;
    } else if (result == -1) {
      computerScore++;
    }
  }

  if (humanScore > computerScore) {
    console.log("You won the game!");
  } else if (humanScore < computerScore) {
    console.log("You lost the game.");
  } else {
    console.log("The game is a draw.");
  }
}

console.log("Call playGame() to begin.");
