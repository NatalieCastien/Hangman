// Initialize ALL global variables here
// allTheWords = []
// This code here selects a random word
const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
];
let maxAmount = 5;

//Willekeurig woord
const randomWord = (words) => words[Math.floor(Math.random() * words.length)];

let inputs;
const wordGuessed = function (word, inputs) {
  // remove all letters from word that are already guessed
  // We can do this with a for loop to.
  let remaining = word.filter(function (letter) {
    // If the letter is guessed return true (we want to remove that right away)
    return !inputs.includes(letter);
  });
  // If we have letters left, right?
  return remaining.length === 0;
};

const clean = function () {
  document.querySelector("input").value = "";
};

let gameOver;
const winTheGame = function () {
  document.querySelector(".win").style.display = "block";
  gameOver = true;
};

const lose4 = function () {
  // when losing 3 times, this has to happen
  document.querySelector(".lose").style.display = "block";
  gameOver = true;
};

const spanTheWord1 = function (word) {
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;
};

let tries = 0;
const updateTriesDisplay = function (tries) {
  document.querySelector(".lives span").innerHTML = 5 - tries;
};

const letters = function (word, inputs) {
  let wrongLetters = inputs.filter(function (letter) {
    // If the letter is in the word return.... false/true (we want to remove that then)
    return !word.includes(letter);
  });
  document.querySelector(".guessed_letters").innerHTML = wrongLetters.join(" ");
};

const theWord = function (word, inputLetterWords) {
  let display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  document.querySelector(".the_word").innerHTML = display.join(" ");
};

const isLetterIncluded = (word, letter) => {
  if (!word.includes(letter)) {
    tries++;
    document.querySelector(".lives span").innerHTML = 5 - tries;
  }
};
const fillGuessedLetters = (inputs, letter) => {
  letter = letter.toLowerCase();
  inputs.push(letter);
  return inputs;
};

const guessLetter = function () {
  if (gameOver) {
    return;
  }
  const input = document.querySelector("input").value;
  document.querySelector("input").value = "";

  // Check of de letter niet al eerder is ingevoerd
  if (inputs.includes(input) || input === "") {
    return;
  }

  isLetterIncluded(word, input);
  fillGuessedLetters(inputs, input);

  theWord(word, inputs);
  letters(word, inputs);

  if (wordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= 5) {
    lose4();
  }
};

//Startscherm van het spel
function beginTheGame() {
  gameOver = false;
  document.querySelector(".win").style.display = "none";
  document.querySelector(".lose").style.display = "none";
  document.querySelector("input").value = "";

  word = randomWord(wordList).split("");
  document.querySelector(".lose p span").innerHTML = `"${word.join("")}"`;

  tries = 0;
  document.querySelector(".lives span").innerHTML = 5 - 0;

  inputs = [];
  theWord(word, inputs);
  letters(word, inputs);
}

//Hier start het!
document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".guess").addEventListener("click", guessLetter);
  document.querySelector(".restart").addEventListener("click", beginTheGame);
  beginTheGame();
});
