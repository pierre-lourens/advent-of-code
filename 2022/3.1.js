const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/input-3.txt`, 'utf8');
const lines = data.split(/\n/);

let sum = 0;

lines.forEach((line) => {
  const mid = line.length / 2;
  const firstHalf = new Set();
  let common;
  for (let i = 0; i < mid; i++) {
    firstHalf.add(line[i]);
  }
  for (let j = mid; j < line.length; j++) {
    if (firstHalf.has(line[j])) {
      common = line[j];
    }
  }
  const code = common.charCodeAt(0);
  if (code >= 97) {
    const priority = code - 96;
    sum += priority;
  } else {
    const priority = code - 38;
    sum += priority;
  }
});

console.log({ sum });
