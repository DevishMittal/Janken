function getComputerChoice() {
    const arrForChoice = ["rock", "paper", "scissor"];
    const randomIndex = Math.floor(Math.random() * arrForChoice.length);
    const randomChoice = arrForChoice[randomIndex];
    return randomChoice;
  }
  //console.log(getComputerChoice());
  
  function oneRound() {
    const computerSelection = getComputerChoice();
    console.log(computerSelection);
    const playerSelection = prompt("Enter rock, paper or scissor").toLowerCase();
    //const computerSelection = getComputerChoice();
    if (
      (playerSelection === "rock" && computerSelection === "paper") ||
      (playerSelection === "paper" && computerSelection === "scissor") ||
      (playerSelection === "scissor" && computerSelection === "rock")
    ) {
      return `You lose, ${computerSelection} beats ${playerSelection}`;
    } else if (playerSelection.toLocaleLowerCase() === computerSelection.toLocaleLowerCase()) {
      return "it's a tie";
    } else {
      return "You Won";
    }
  }
  
  console.log(oneRound());