//declarating variables for the player and computer scores
let humanScore = 0;
let computerScore = 0;

//logic to play a single round
function playRound(humanChoice, computerChoice){
	
if(humanChoice && humanChoice.toLowerCase() === computerChoice){
	console.log("Draw! Play again");
}

if(humanChoice && humanChoice.toLowerCase() === "rock"){
	if(computerChoice === "scissors"){
		console.log("You win! Rock breaks Scissors");
		humanScore++;
	}
	if(computerChoice === "paper"){
		console.log("You lose! Paper covers Rock");
		computerScore++;
	}
}
else if(humanChoice && humanChoice.toLowerCase() === "paper"){
	if(computerChoice === "rock"){
		console.log("You win! Paper covers Rock");
		humanScore++;
	}
	if(computerChoice === "scissors"){
		console.log("You lose! Scissors cuts Paper")
		computerScore++;
	}
}
else if(humanChoice && humanChoice.toLowerCase() === "scissors"){
	if(computerChoice === "paper"){
		console.log("You win! Scissors cuts Paper");
		humanScore++;
	}
	if(computerChoice === "rock"){
		console.log("You lose! Rock breaks Scissors");
		computerScore++;
	}
}


}



for(let i = 1; i<=5;i++){
	console.log(`Round ${i} of 5`);
	const humanSelection = getHumanChoice();
	const computerSelection = getComputerChoice();
	playRound(humanSelection, computerSelection);
}

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

function getHumanChoice(){
let userImput = prompt("Please enter your move: Rock/Paper/Scissors");
return userImput;
}