const functions = require("./functions");

// Test 1: Starting the game by picking a word
test("Should contain word", () => {
  const wordList = [
    "vis",
    "toeter",
    "developer",
    "telefoon",
    "moeder",
    "snoer",
    "geeuw",
  ];
  expect(functions.randomWord(wordList)).not.toBeFalsy();
});

test("Should not contain word", () => {
  const wordList = [];
  expect(functions.randomWord(wordList)).toBeFalsy();
});

// Test 2: Checking if a letter is included in the word
test("Letter should be in the word", () => {
  const word = ["a", "p", "p", "l", "e"];
  const letter = "p";
  const expected = true;
  expect(functions.isLetterIncluded(word, letter)).toBe(expected);
});

test("Letter should not be in the word", () => {
  const word = ["a", "p", "p", "l", "e"];
  const letter = "m";
  const expected = false;
  expect(functions.isLetterIncluded(word, letter)).toBe(expected);
});

// Test 3: Testing updating no of turns
test("Turns should decrease with false guess", () => {
  let turns = 5;
  let guess = false;
  expect(functions.turnAmount(turns, guess)).toBe(4);
});

test("Turns should not decrease with true guess", () => {
  let turns = 5;
  let guess = true;
  expect(functions.turnAmount(turns, guess)).toBe(5);
});

// Test 4: Testing updating the wrong letterlist
test("Letter should be added to the array", () => {
  let guessedLetters = ["n"];
  const letter = "m";
  const expected = ["n", "m"];
  expect(functions.fillGuessedLetters(guessedLetters, letter)).toEqual(
    expect.arrayContaining(expected)
  );
});

// Test 5: Losing the game
test("Last turn equals game over!", () => {
  let lastTurn = 0;
  expect(functions.loseGame(lastTurn)).toBe(true);
});

test("Not the last turn, should not equal game over!", () => {
  let turns = 3;
  expect(functions.loseGame(turns)).toBe(false);
});

// Test 6: winning the game
test("You should win the game", () => {
  const inputs = ["t", "e", "r"];
  const word = ["t", "r", "e", "e"];
  const expected = true;
  expect(functions.isWordGuessed(word, inputs)).toBe(expected);
});

test("You should not win the game", () => {
  const inputs = ["t", "b", "r"];
  const word = ["t", "r", "e", "e"];
  const expected = false;
  expect(functions.isWordGuessed(word, inputs)).toBe(expected);
});
