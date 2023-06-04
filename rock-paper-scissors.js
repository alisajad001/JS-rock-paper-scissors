// 1. User choice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
    return userInput;
  } else {
    console.log('Error! Please select a valid choice');
  }
}
