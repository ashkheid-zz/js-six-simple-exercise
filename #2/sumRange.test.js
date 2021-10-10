const sumRange = require("./sumRange");

test("sumRange_loop(20, 25) => 135", () => {
  expect(sumRange(20, 25)).toBe(135);
});

test("sumRange(40, 38) => 117", () => {
  expect(sumRange(40, 38)).toBe(117);
});

test("sumRange(17, 17) => 17", () => {
  expect(sumRange(17, 17)).toBe(17);
});

test('sumRange(17, "") should throw an error', () => {
  expect(() => {
    sumRange(17, "");
  }).toThrow();
});

test('sumRange("3s", "a") should throw an error', () => {
  expect(() => {
    sumRange("3s", "a");
  }).toThrow();
});
