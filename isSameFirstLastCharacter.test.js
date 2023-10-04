const isSameFirstLastCharacter = require("./isSameFirstLastCharacter");

// Base Cases

/* A test case for a string that does have the same first and last 
   character and is 4+ characters long
*/
test("it should return true when the first and last character are the same", () => {
  expect(isSameFirstLastCharacter("abbbbba")).toBe(true);
});

/* A test case for a string that does NOT have the same first and last 
   character and is 4+ characters long
*/
test("it should return false in a string that does not have the same first and last characater", () => {
   expect(isSameFirstLastCharacter("abbbbbc")).toBe(false)
});

// Edge Cases
// A test case for a string with only 2 characters that are different
test("it should return false for a string with only two characters, both different", () => {
   expect(isSameFirstLastCharacter("ab")).toBe(false)
});

// A test case for a string with only 2 characters that are the same
test("it should return false for a two character string, both the same", () => {
   expect(isSameFirstLastCharacter("aa")).toBe(true)
});

// A test case for a string with only 1 character
test("it should return true for a string with only one character", () => {
   expect(isSameFirstLastCharacter("a")).toBe(true)
});

// A test case for an empty string
test("it should return true for an empty string", () => {
   expect(isSameFirstLastCharacter("")).toBe(true)
});
