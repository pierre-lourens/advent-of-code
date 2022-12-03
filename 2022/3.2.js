const fs = require('fs');
const data = fs.readFileSync(`${__dirname}/input/input-3.txt`, 'utf8');
const lines = data.split(/\n/);

let sum = 0;
for (let i = 0; i < lines.length; i += 3) {
  let record = [];
  for (let j = 0; j < lines[i].length; j++) {
    record.push(lines[i][j]);
  }
  const second = lines[i + 1].split('');
  const third = lines[i + 2].split('');

  for (let letter of record) {
    const inSecond = second.some((let) => let === letter);
    const inThird = third.some((let) => let === letter);
    if (inSecond && inThird) {
      record = letter;
      break;
    }
  }
  const letter = record;
  const code = letter.charCodeAt(0);
  let priority;
  if (code >= 97) {
    priority = code - 96;
  } else {
    priority = code - 38;
  }
  sum += priority;
}

console.log({ sum });
