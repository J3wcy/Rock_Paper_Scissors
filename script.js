const choices = ["Rock", "Paper", "Scissors"];

function getComputerChoice() {
	const randomIndex = Math.floor(Math.random() * choices.length);
	const randomChoice = choices[randomIndex];
	return randomChoice;
}

function playRound(playerSelection, computerSelection) {
	if (playerSelection === "rock" && computerSelection === "scissors") {
		return "You win! Rock beats scissors";
	} else if (playerSelection === "scissors" && computerSelection === "paper") {
		return "You win! Scissors beats Paper";
	} else if (playerSelection === "paper" && computerSelection === "rock") {
		return "You win! Paper beats Rock";
	} else if (playerSelection === computerSelection) {
		return "It's A Tie!";
	} else {
		return "You lose!";
	}
}

function game() {
	let playerWins = 0;
	let computerWins = 0;

	for (let i = 0; i < 5; i++) {
		const userInput = prompt("Enter your choice");
		const playerSelection = userInput ? userInput.toLowerCase() : "";
		const computerSelection = getComputerChoice().toLowerCase();
		const result = playRound(playerSelection, computerSelection);

		console.log(result);

		if (result.startsWith("You win!")) {
			playerWins++;
		} else if (result.startsWith("You lose!")) {
			computerWins++;
		}
	}

	if (playerWins > computerWins) {
		console.log("Congratulations, You win the majority!");
	} else if (playerWins < computerWins) {
		console.log("Sorry, you lose the majority!");
	} else {
		console.log("It's a tie in the majority!");
	}
}
game();

