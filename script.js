//declarating variables for the player and computer scores
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

//logic to play a single round
function playRound(humanChoice, computerChoice){
	if(gameOver) return;

	const newDiv = document.createElement("div");

if(humanChoice && humanChoice.toLowerCase() === computerChoice){
	newDiv.textContent = "Draw! Play again";
}

if(humanChoice && humanChoice.toLowerCase() === "rock"){
	if(computerChoice === "scissors"){
		newDiv.textContent = "You win! Rock breaks Scissors";
		humanScore++;
	}
	if(computerChoice === "paper"){
		newDiv.textContent = "You lose! Paper covers Rock" ;
		computerScore++;
	}
}
else if(humanChoice && humanChoice.toLowerCase() === "paper"){
	if(computerChoice === "rock"){
		newDiv.textContent = "You win! Paper covers Rock";
		humanScore++;
	}
	if(computerChoice === "scissors"){
		newDiv.textContent = "You lose! Scissors cuts Paper";
		computerScore++;
	}
}
else if(humanChoice && humanChoice.toLowerCase() === "scissors"){
	if(computerChoice === "paper"){
		newDiv.textContent = "You win! Scissors cuts Paper";
		humanScore++;
	}
	if(computerChoice === "rock"){
		newDiv.textContent = "You lose! Rock breaks Scissors";
		computerScore++;
	}
}
document.getElementById("ComputerScore").innerHTML = computerScore;
document.getElementById("PlayerScore").innerHTML = humanScore;
const div = document.querySelector("#results");
div.appendChild(newDiv);

if(computerScore >= 5 || humanScore >=5){
	const finalDiv = document.createElement("div");
	if(computerScore >=5){
		finalDiv.textContent = "Computer Won!"
	}
	else if(humanScore >= 5){
		finalDiv.textContent = "You won!"
	}

	div.appendChild(finalDiv);
	gameOver = true;
}
	

}



/* for(let i = 1; i<=5;i++){
	console.log(`Round ${i} of 5`);
	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection);
} */



function getComputerChoice(){
	let num = getRandomInt(1,3);
    console.log(num);
	if(num === 1){
	return "rock";
	}
	else if (num === 2){
	return "paper";
	}
	else
	return "scissors";
}

function getRandomInt(min, max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

let option = document.querySelector('#options');

option.addEventListener('click', (event) =>{
	let target = event.target;
	let humanChoice = null;
	switch(target.id){
		case 'rock':
			humanChoice = "rock";
		break;

		case 'paper':
			humanChoice = "paper";
		break;

		case 'scissors':
			humanChoice = "scissors";
			break;
	}

	playRound(humanChoice, getComputerChoice());

})