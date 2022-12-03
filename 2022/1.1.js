const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/input-1.txt`, 'utf8');
const lines = data.split(/\n/);

const sums = [];
let elfIdx = 0;
let greatestSum = 0;

for (let i = 0; i < lines.length; i++) {
  if (lines[i] === '') {
    greatestSum = Math.max(greatestSum, sums[elfIdx]);
    elfIdx++;
  } else {
    if (sums[elfIdx] !== undefined) {
      sums[elfIdx] += +lines[i];
    } else {
      sums[elfIdx] = +lines[i];
    }
  }
}
sums.sort((a, b) => b - a);

console.log(greatestSum);
const topThree = sums[0] + sums[1] + sums[2];
console.log('top three', topThree);
