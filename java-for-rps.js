
function getComputerChoice() {
    // assign a number to rock, paper, and scissors
    let rock = 0
    let paper = 1
    let scissors = 2
    // get a random number from random number generator
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    let choice = getRandomInt(3)
    // check if that number equals rock paper of scissor
        // if so, return "rock", "paper", or "scissors"
    if (choice === rock) {
        return "rock";
    } else if (choice === paper) {
        return "paper";
    } else if (choice === scissors) {
        return "scissors";
    } else {
        return "ERROR";
    }
}


function getHumanChoice() {
    let human = prompt("rock, paper, or scissors?").toLowerCase();
    return human;
}

let humanScore = 0;
let computerScore = 0;

playGame();

function playGame() {
    counter = 0
    while (counter <= 4){
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        playRound(computerChoice, humanChoice);
        counter +=1;
        console.log(counter);
    }
    if (counter === 5){
        console.log(`That was five rounds, game over. Final Score - Human: ${humanScore} vs Computer: ${computerScore}`);
    }
}

function playRound(computerChoice, humanChoice) {
    // Compare computerChoice to HumanChoice using OR operators
    if (humanChoice === "rock"){
        if (computerChoice === "scissors"){
            humanScore += 1;
            console.log(`Human wins! Their score is ${humanScore}`);
            return humanScore;
        } else if (computerChoice === "paper") {
            computerScore += 1;
            console.log(`Computer wins! Their score is ${computerScore}`);
            return computerScore;
        }else if (computerChoice === "rock"){
            console.log("It is a tie! Play again")
        }
    } else if (humanChoice === "paper"){
        if (computerChoice === "rock"){
            humanScore += 1;
            console.log(`Human wins! Their score is ${humanScore}`);
            return humanScore;
        } else if (computerChoice === "scissors") {
            computerScore += 1;
            console.log(`Computer wins! Their score is ${computerScore}`);
            return computerScore;
        }else if (computerChoice === "paper"){
            console.log("It is a tie! Play again")
        }
    } else if (humanChoice === "scissors "){
        if (computerChoice === "paper"){
            humanScore += 1;
            console.log(`Human wins! Their score is ${humanScore}`);
            return humanScore;
        } else if (computerChoice === "rock") {
            computerScore += 1;
            console.log(`Computer wins! Their score is ${computerScore}`);
            return computerScore;
            
        }else if (computerChoice === "scissors"){
            console.log("It is a tie! Play again")
        }
    }
}


