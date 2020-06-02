// Elements
const inputSection = document.querySelector(".input-section");
const inputField = document.querySelector("input");
const winAnimation = document.querySelector(".win");
const loseAnimation = document.querySelector(".lose");
const wordToBeGuessed = document.getElementById("wordToBeGuessed");
const lifeSpan = document.getElementById("lifeSpan");
const guessedLetters = document.getElementById("guessedLetters");
const guessButton = document.querySelector(".guess");
const restartButton = document.querySelector(".restart");
const noose = document.querySelector(".noose");

const wordList = [
  "graveyard",
  "zombie",
  "amputation",
  "slaughter",
  "assassin",
  "crow",
  "pitchfork",
  "gallows",
  "witchcraft",
  "shadow",
  "nightmare",
  "moonlight",
];

let lives = 3;
let tries = 0;
let gameDone;

const randomWord = (words) => words[Math.floor(Math.random() * words.length)];

let inputs;
const isWordGuessed = (word, inputs) => {
  let remaining = word.filter((letter) => !inputs.includes(letter));
  // If the remaining array of letters is 0, then the word is guessed
  return remaining.length === 0;
};

const cleanInputField = () => (inputField.value = "");

const winTheGame = () => {
  inputSection.style.display = "none";
  winAnimation.style.display = "block";

  new Audio("assets/sighofrelief.mp3").play();
  function removeNoose() {
    noose.classList.add("nooseaway");
  }
  removeNoose();

  gameDone = true;
};

const loseTheGame = () => {
  loseAnimation.style.display = "block";
  inputSection.style.display = "none";
  new Audio("assets/ghostwail.mp3").play();
  function ghostAppearing() {
    const ghost = document.querySelector(".ghost");
    ghost.classList.add("ghostfadein");
  }
  ghostAppearing();
  gameDone = true;
};

const displayWrongLetters = (word, inputs) => {
  let wrongLetters = inputs.filter(function (letter) {
    // get the letters that aren't in the word
    return !word.includes(letter);
  });
  guessedLetters.innerHTML = wrongLetters.join(" ");
};

const displayTheWord = (word, inputLetterWords) => {
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
    if (lives - tries == 1) {
      lifeSpan.innerHTML = `You have ${lives - tries} life remaining`;
    } else {
      lifeSpan.innerHTML = `You have ${lives - tries} lives remaining`;
    }
  }
};
const fillGuessedLetters = (inputs, letter) => {
  letter = letter.toLowerCase();
  inputs.push(letter);
  return inputs;
};

const guessLetter = () => {
  const input = inputField.value;
  cleanInputField();

  // Check if input is a letter
  const regex = /[a-zA-Z]+/;
  if (regex.test(input) == true) {
    inputField.placeholder = "Try yer luck!";
    inputField.focus();

    //Check whether the letter has not been guessed before
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
  } else {
    inputField.placeholder = "Tryin' to cheat, aye?";
  }
};

//Starting screen of the game
const beginTheGame = () => {
  gameDone = false;
  noose.classList.remove("nooseaway");
  winAnimation.style.display = "none";
  loseAnimation.style.display = "none";
  inputSection.style.display = "block";
  cleanInputField();

  word = randomWord(wordList).split("");
  wordToBeGuessed.innerHTML = `"${word.join("")}"`;

  tries = 0;
  lifeSpan.innerHTML = `You have ${lives} lives remaining`;

  inputs = [];
  displayTheWord(word, inputs);
  displayWrongLetters(word, inputs);
  inputField.focus();
};

//The game starts here
document.addEventListener("DOMContentLoaded", () => {
  guessButton.addEventListener("click", guessLetter);
  inputField.addEventListener("keyup", (event) => {
    if (event.key == "Enter") {
      guessButton.click();
    }
  });
  restartButton.addEventListener("click", beginTheGame);
  beginTheGame();
});

//Button to start background music
let playButton = document.querySelector(".musicbutton");
playButton.addEventListener("click", () => {
  new Audio("assets/harbor.mp3").play();
});
