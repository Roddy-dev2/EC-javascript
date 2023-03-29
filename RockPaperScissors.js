const inSelection = ["rock", "paper", "scissors"]; // to change random no to string

const rockBeats = "scissors"; // the rules of the game
const paperBeats = "rock";
const scissorsBeats = "paper";

let playerSelected = "";
let playerScore = 0;
let computerSelected = "";
let computerScore = 0;

function mainGameLoop() {
	//get player buttons and wait for click
	let playerButtons = getButtons();
	playerButtons.forEach((playerButton) => {
		playerButton.onclick = () => playRound(playerButton.value);
	});

	// listen for reset
	resetBtn.addEventListener("click", function (e) {
		resetGame();
	});
}

// play a round triggered by player pressing button
function playRound(playerSelected) {
	document.getElementById("playerChoice").innerText =
		"Your Choice: " + playerSelected;
	computerSelected = computerSelection();
	// eval who is winner
	determineWinner(playerSelected, computerSelected);
}

function computerSelection() {
	computerSelected = inSelection[Math.floor(Math.random() * 3)];
	document.getElementById("computerChoice").innerText =
		"Computer Chooses: " + computerSelected;
	return computerSelected;
	// this will return text of what the computer selected
	// a random number is mapped to an array of text rock etc
}

function determineWinner(playerSelected, computerSelected) {
	if (playerSelected == computerSelected) {
		displayScores("draw");
	}
	// the rules are global vars rockBeats, paperBeats scissorsBeats
	if (eval(playerSelected + "Beats") == computerSelected) {
		// if player enters rock, then look var rockBeats and compare to compterSelected
		playerScore = playerScore + 1;
		displayScores(playerSelected + " Beats " + computerSelected);
	}
	if (eval(computerSelected + "Beats") == playerSelected) {
		computerScore = computerScore + 1;
		displayScores(computerSelected + " Beats " + playerSelected);
	}
}

function displayScores(msg) {
	//start of individual scores
	if (playerScore != 0) {
		document.getElementById("playerScore").innerText =
			"Your Score: " + playerScore;
	}

	if (computerScore != 0) {
		document.getElementById("computerScore").innerText =
			"Computer Score: " + computerScore;
	}
	// end of individual scores
	//scores reset
	if (playerScore == 0 && computerScore == 0) {
		document.getElementById("computerScore").innerText = "";
		document.getElementById("playerScore").innerText = "";
	}
	// msg of who beat who passed in from calling function
	if (msg) {
		document.getElementById("resultGame").innerText = msg;
	} else {
		document.getElementById("resultGame").innerText = "";
	}
}

function getButtons() {
	//get the buttons and use value in html to determine what is played
	return document.querySelectorAll(".playerBtn");
}

function resetGame() {
	playerScore = 0;
	computerScore = 0;
	playerSelected = "";
	displayScores(); // redisplay reset scores
}

mainGameLoop(); // entry point
