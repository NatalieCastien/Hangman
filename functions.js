const functions = {
  guessedLetters: [],
  fillGuessedLetters: (inputs, letter) => {
    letter = letter.toLowerCase();
    inputs.push(letter);
    return inputs;
  },
  isLetterIncluded: (word, letter) => word.includes(letter),
  isWordGuessed: (word, inputs) => {
    let remaining = word.filter((letter) => !inputs.includes(letter));
    /* If the remaining array of letters is 0, then the word is guessed 
    and it will return true, if not it returns false */
    return remaining.length === 0;
  },
  randomWord: () => wordList[Math.floor(Math.random() * wordList.length)],
  turnAmount: () => {
    if (guess === false) {
      return turns - 1;
    }
  },
  loseGame: () => {
    if (lastTurn === 0) {
      return true;
    }
  },
};

module.exports = functions;
