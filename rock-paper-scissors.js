// 1. User choice
const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();

    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('Error! Please select a valid choice');
    }
}

// 2. Computer choice
const getComputerChoice = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0: 
        return 'rock';
      break;
      case 1: 
        return 'paper';
      break;
      case 2:
        return 'scissors';
      break;
    }
}

// 3. Determine winner
const determineWinner = (userChoice, computerChoice) => {
    // Tie
    if (userChoice === computerChoice) {
      return 'The game was a tie!';
    }
  
    // user: paper - computer: rock
    if (userChoice === 'paper') {
      if (computerChoice === 'rock') {
        return 'User won the game!';
      } else {
        return 'Computer won the game!';
      }
    }
  
    // user: rock - computer: scissors
    if (userChoice === 'rock') {
      if (computerChoice === 'scissors') {
        return 'User won the game!';
      } else {
        return 'Computer won the game';
      }
    }
  
    // user: scissors - computer: paper
    if (userChoice === 'scissors') {
      if (computerChoice === 'paper') {
        return 'User won the game!';
      } else {
        return 'Computer won the game';
      }
    }
  }