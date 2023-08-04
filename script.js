const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    const randomChoice = choices[randomIndex];
    return randomChoice;
}

const userInput = prompt("Enter your choice");
const playerSelection = userInput ? userInput.toLowerCase() : "";
const computerSelection = getComputerChoice().toLowerCase();

function playRound(playerSelection, computerSelection){
    
    if (playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You win! Rock beats scissors";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats Paper";
    } else if (playerSelection === "Paper" && computerSelection === "Rock") {
        return "You win! Paper beats Rock";
    } else if (playerSelection === computerSelection){
        return "It's A Tie!";
    } else {
        return "You lose!";
    }
}

console.log(playRound(playerSelection, computerSelection));
