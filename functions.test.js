
const functions = require("./functions");

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

test("Letter should be added to the array", () => {
  let guessedLetters = ["n"];
  const letter = "m";
  const expected = ["n", "m"];
  expect(functions.fillGuessedLetters(guessedLetters, letter)).toEqual(
    expect.arrayContaining(expected)
  );
});

test("You should win the game", () => {
  const inputs = ["t", "e", "r"];
  const word = ["t", "r", "e", "e"];
  const expected = true;
  expect(functions.isWordGuessed(word, inputs)).toBe(expected);
});

test("You should not the game", () => {
  const inputs = ["t", "b", "r"];
  const word = ["t", "r", "e", "e"];
  const expected = false;
  expect(functions.isWordGuessed(word, inputs)).toBe(expected);
  
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
  expect(randomWord()).not.toBeFalsy();
});

test("Turns should decrease with false guess", () => {
  let turns = 5;
  guess = false;
  expect(turnAmount()).toEqual(4);
});

test("Last turn equals game over!", () => {
  let lastTurn = 0;
  expect(loseGame()).toBe(true);
});

