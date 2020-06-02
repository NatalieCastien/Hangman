const wordList = [
  "vis",
  "toeter",
  "developer",
  "telefoon",
  "moeder",
  "snoer",
  "geeuw",
];
let lives = 3;
let tries = 0;
let gameDone;

const inputField = document.querySelector("input");
const winAnimation = document.querySelector(".win");
const loseAnimation = document.querySelector(".lose");
const wordToBeGuessed = document.getElementById("wordToBeGuessed");
const lifeSpan = document.getElementById("lifeSpan");
const guessedLetters = document.getElementById("guessedLetters");
const guessButton = document.querySelector(".guess");
const restartButton = document.querySelector(".restart");

//Willekeurig woord
const randomWord = (words) => words[Math.floor(Math.random() * words.length)];

let inputs;
const isWordGuessed = (word, inputs) => {
  let remaining = word.filter((letter) => !inputs.includes(letter));
  // If the remaining array of letters is 0, then the word is guessed
  return remaining.length === 0;
};

const cleanInputField = function () {
  inputField.value = "";
};

const winTheGame = function () {
  winAnimation.style.display = "block";
  gameDone = true;
};

const loseTheGame = function () {
  loseAnimation.style.display = "block";
  new Audio("assets/ghostwail.mp3").play();
  gameDone = true;
};

const displayWrongLetters = function (word, inputs) {
  let wrongLetters = inputs.filter(function (letter) {
    // If the letter is in the word return.... false/true (we want to remove that then)
    return !word.includes(letter);
  });
  guessedLetters.innerHTML = wrongLetters.join(" ");
};

const displayTheWord = function (word, inputLetterWords) {
  let display = word.map(function (letter) {
    if (inputLetterWords.includes(letter)) {
      return letter;
    } else {
      return "_";
    }
  });
  theWord.innerHTML = display.join(" ");
};

const isLetterIncluded = (word, letter) => {
  if (!word.includes(letter)) {
    tries++;
    lifeSpan.innerHTML = lives - tries;
  }
};
const fillGuessedLetters = (inputs, letter) => {
  letter = letter.toLowerCase();
  inputs.push(letter);
  return inputs;
};

const guessLetter = function () {
  if (gameDone) {
    return;
  }
  const input = inputField.value;
  cleanInputField();

  //Check of de letter niet al eerder is ingevoerd
  if (inputs.includes(input) || input === "") {
    return;
  }

  isLetterIncluded(word, input);
  fillGuessedLetters(inputs, input);

  displayTheWord(word, inputs);
  displayWrongLetters(word, inputs);

  if (isWordGuessed(word, inputs)) {
    winTheGame();
  } else if (tries >= lives) {
    loseTheGame();
  }
};

//Startscherm van het spel
function beginTheGame() {
  gameDone = false;
  winAnimation.style.display = "none";
  loseAnimation.style.display = "none";
  cleanInputField();

  word = randomWord(wordList).split("");
  wordToBeGuessed.innerHTML = `"${word.join("")}"`;

  tries = 0;
  lifeSpan.innerHTML = lives - 0;

  inputs = [];
  displayTheWord(word, inputs);
  displayWrongLetters(word, inputs);
}

//Hier start het!
document.addEventListener("DOMContentLoaded", function () {
  guessButton.addEventListener("click", guessLetter);
  restartButton.addEventListener("click", beginTheGame);
  beginTheGame();
});
