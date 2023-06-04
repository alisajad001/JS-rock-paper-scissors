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
  