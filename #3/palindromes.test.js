const palindromes = require("./palindromes");

test("palindromes(\"racecar\") => true", () => {
  expect(palindromes("racecar") ).toBe(true);
});

test("palindromes(\"racecar\") => true", () => {
  expect(palindromes("jungle") ).toBe(false);
});

test("palindromes(\"LevEl\") => true", () => {
  expect(palindromes("LevEl") ).toBe(true);
});

test("palindromes(\"ma@dam\") => true", () => {
  expect(palindromes("ma@dam") ).toBe(false);
});

test("palindromes(\"r E#div$i*de &r\") => true", () => {
  expect(palindromes("r E#div$i*de &r") ).toBe(true);
});