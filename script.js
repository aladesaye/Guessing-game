let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
    return Math.floor(Math.random() * 9);
  };
  
  const compareGuesses = (user, computer, target) => {
    if (Math.abs(target - user === target - computer)) {
      return humanScore+=1
    }
      if (Math.abs(user - target > computer - target)) {
      return humanScore+=1
    } 
     if (Math.abs(user - target < computer - target)) {
      return computerScore+=1
    }
    };
  
    const updateScore =(winner) => {
      if (compareGuesses) {
         humanScore+= 1
      } else {
         computerScore+= 1
      }
    };
  
    const advanceRound = () => {
      currentRoundNumber++
    };
    

