//randomly returns rock paper from computer
    // const rock = "Rock";
    // const paper = "Paper";
    // const scissor = "Scissor";
function getComputerChoice(){

    const arrForChoice = ["rock","paper"," scissor"];
    const randomIndex = Math.floor(Math.random()*arrForChoice.length);
    const randomChoice = arrForChoice[randomIndex];
    return randomChoice;
}
console.log(getComputerChoice());
