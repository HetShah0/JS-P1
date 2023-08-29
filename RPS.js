const prompt = require("prompt-sync")();

let wins = 0;
let losses = 0;
let ties = 0;

while (true) {
    const playerMove = prompt("What's your move? (rock, paper, scissors, or quit) ");
    if (playerMove === "quit") {
        break;
    }

    const computerMove = getComputerMove();
    console.log("Computer chose " + computerMove);

    const result = getGameResult(playerMove, computerMove);
    if (result === "win") {
        wins++;
        console.log("You win!");
    } else if (result === "lose") {
        losses++;
        console.log("You lose!");
    } else {
        ties++;
        console.log("You tied!");
    }
}

console.log("You won " + wins + " times.");
console.log("You lost " + losses + " times.");
console.log("You tied " + ties + " times.");

function getComputerMove() {
    const moves = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function getGameResult(playerMove, computerMove) {
    if (playerMove === "rock") {
        if (computerMove === "rock") {
            return "tie";
        } else if (computerMove === "paper") {
            return "lose";
        } else {
            return "win";
        }
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
            return "win";
        } else if (computerMove === "paper") {
            return "tie";
        } else {
            return "lose";
        }
    } else {
        if (computerMove === "rock") {
            return "lose";
        } else if (computerMove === "paper") {
            return "win";
        } else {
            return "tie";
        }
    }
}

