let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => Math.floor(Math.random()*10);

const compareGuesses = (userGuess, computerGuess, target) => {
    const userDistance = Math.abs(userGuess - target);;
    const computerDistance = Math.abs(computerGuess - target);
    return userDistance <= computerDistance;
}

const updateScore = winner => {
    winner === 'computer' ? computerScore++ : humanScore++;
}

const advanceRound = () => currentRoundNumber++;