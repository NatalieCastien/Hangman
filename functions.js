//Random word
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
];
randomWord = () => wordList[Math.floor(Math.random() * wordList.length)];
module.exports = randomWord;

//Beurten
let turns = 5;
guess = false;
turnAmount = () => {
  if (guess === false) {
    return turns - 1;
  }
};

//Verliezen spel
let lastTurn = 0;
loseGame = () => {
  if (lastTurn === 0) {
    return true;
  }
};
