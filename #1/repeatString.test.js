const { error } = require("console");
const repeatString = require("./repeatString");

test("repeatString(\"Ha\", 3) => \"HaHaHa\"", () => {
  expect(repeatString("Ha", 3)).toBe("HaHaHa");
});

test("repeatString(\"boom \", 2) => \"boom boom \"", () => {
  expect(repeatString("boom ", "4")).toBe("boom boom ");
});

test("repeatString(\"Ha\", 3) should throw an error", () => {
  expect(() => {
    repeatString("Hello", "A4");
  }).toThrow();
});
