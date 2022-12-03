const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/input-3.txt`, 'utf8');
const lines = data.split(/\n/);

let sum = 0;
for (let i = 0; i < lines.length; i += 3) {
  let record = [];
  for (let j = 0; j < lines[i].length; j++) {
    record.push(lines[i][j]);
  }
  record = record.filter((letter) => {
    // letter has to be in 2nd and 3rd line
    const second = lines[i + 1].split('');
    const third = lines[i + 2].split('');
    const inSecond = second.some((let) => let === letter);
    const inThird = third.some((let) => let === letter);
    return inSecond && inThird;
  });
  const letter = record[0];
  const code = letter.charCodeAt(0);
  if (code >= 97) {
    const priority = code - 96;
    sum += priority;
  } else {
    const priority = code - 38;
    sum += priority;
  }
}

console.log({ sum });
