const randomWord = require("./functions.js");

test("Should contain word", () => {
  expect(randomWord()).not.toBeFalsy();
});

test("Turns should decrease with false guess", () => {
  expect(turnAmount()).toEqual(4);
});

test("Last turn equals game over!", () => {
  expect(loseGame()).toBe(true);
});
