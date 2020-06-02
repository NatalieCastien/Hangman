const functions = {
  randomWord: (list) => {
    return list[Math.floor(Math.random() * list.length)];
  },

  isLetterIncluded: (word, letter) => word.includes(letter),

  turnAmount: (turns, guess) => {
    if (guess == false) {
      return turns - 1;
    } else {
      return turns;
    }
  },

  fillGuessedLetters: (inputs, letter) => {
    letter = letter.toLowerCase();
    inputs.push(letter);
    return inputs;
  },

  loseGame: (lives) => {
    if (lives === 0) {
      return true;
    } else {
      return false;
    }
  },

  isWordGuessed: (word, inputs) => {
    let remaining = word.filter((letter) => !inputs.includes(letter));
    // If the remaining array of letters is 0, then the word is guessed
    return remaining.length === 0;
  },
};

module.exports = functions;
