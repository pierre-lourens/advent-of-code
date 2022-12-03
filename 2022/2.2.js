/*
The winner of the whole tournament is the player with the highest score. 
Your total score is the sum of your scores for each round. The score for a single round
is the score for the shape you selected (1 for Rock, 2 for Paper, and 3 for Scissors) 
plus the score for the outcome of the round (0 if you lost, 3 if the round was a draw, and 6 if you won).
*/

// calculate the score you would get if you followed the guide

/*
values:

*/
const shapeValues = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

// rock:     A, X
// paper:    B, Y
// scissors: C, Z
// calculate this round's score, 0 for loss and 6 if a win
const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/input-2.txt`, 'utf8');
const rounds = data.split(/\n/);
console.log('lines', rounds);

let score = 0;
rounds.forEach((round) => {
  let opponentMove = '';
  switch (round[0]) {
    case 'A':
      opponentMove = 'rock';
      break;
    case 'B':
      opponentMove = 'paper';
      break;
    case 'C':
      opponentMove = 'scissors';
      break;
  }

  let desired = '';
  switch (round[2]) {
    case 'X':
      desired = 'lose';
      break;
    case 'Y':
      desired = 'draw';
      break;
    case 'Z':
      desired = 'win';
      break;
  }

  switch (desired) {
    case 'lose':
      if (opponentMove === 'rock') {
        score += shapeValues.scissors;
      } else if (opponentMove === 'paper') {
        score += shapeValues.rock;
      } else {
        score += shapeValues.paper;
      }
      break;
    case 'draw':
      if (opponentMove === 'rock') {
        score += shapeValues.rock;
      } else if (opponentMove === 'paper') {
        score += shapeValues.paper;
      } else {
        score += shapeValues.scissors;
      }
      score += 3;
      break;
    case 'win':
      if (opponentMove === 'rock') {
        score += shapeValues.paper;
      } else if (opponentMove === 'paper') {
        score += shapeValues.scissors;
      } else {
        score += shapeValues.rock;
      }
      score += 6;
      break;
  }
});

console.log('new score', score);
