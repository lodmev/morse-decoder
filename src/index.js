const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};
const SYMBOLS = {
  "00": "",
  10: ".",
  11: "-",
};

function decode(expr) {
  // write your solution here
  res = [];
  for (let i = 0; i < expr.length / 10; i++) {
    let letter = [];
    for (let j = 0 + i * 10; j < 10 + i * 10; j += 2) {
      if (expr[j] === "*") {
        res.push(" ");
        break;
      }
      letter.push(SYMBOLS[expr[j] + expr[j + 1]]);
    }
	res.push(MORSE_TABLE[letter.join('')])
  }
	return res.join('')
}

module.exports = {
  decode,
};
