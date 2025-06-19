
function getComputerChoice() {
    // assign a number to rock, paper, and scissors
    let rock = 1
    let paper = 2
    let scissors = 3
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

