const prompt = require("prompt-sync")();

console.log('Welcome to the Car Guessing Quiz!');

let score = 0;
const totalQuestions = 3;

const answer1 = prompt('What car has a ghost symbol? ');
const correctAnswer1 = 'koenigsegg';

if (answer1.toLowerCase() === correctAnswer1) {
    console.log('You got it Correct!');
    score++;
    } else {
        console.log('You got it Wrong!');
    }

const answer2 = prompt('What car has a bull symbol? ');
const correctAnswer2 = 'lamborghini';

if (answer2.toLowerCase() === correctAnswer2) {
    console.log('You got it Correct!');
    score++;
    }
    else {
        console.log('You got it Wrong!');
    }

const answer3 = prompt('What car has a horse symbol? ');
const correctAnswer3 = 'ferrari';

if (answer3.toLowerCase() === correctAnswer3) {
    console.log('You got it Correct!');
    score++;
    }
    else {
        console.log('You got it Wrong!');
    }

console.log('You got ' + score + ' correct answers!');
console.log('You scored ' + (score / totalQuestions) * 100 + ' percent!');