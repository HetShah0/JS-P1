const prompt = require("prompt-sync")();

const target = Math.round(Math.random() * 100);
let guesses = 0;

while (true){
    guesses++;
    const guess = Number(prompt("Guess a number between 0 and 100: "));
    if (guess > target) {
        console.log("Your guess is too high!");      
    } else if (guess < target) {
        console.log("Your guess is too low!");      
    } else {
        console.log("You got it!");
        guesses++;
        break;
    }
}
console.log("You got it! It took you " + guesses + " guesses.");