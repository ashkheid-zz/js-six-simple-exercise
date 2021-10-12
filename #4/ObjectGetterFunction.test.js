const eventsFunc = require("./ObjectGetterFunction");

test("typeof eventGenerator(5) => object", () => {
  expect(typeof eventsFunc.eventGenerator(5)).toBe("object");
});

test('getTheTitles(eventGenerator(3)) => 3', () => {
  expect(eventsFunc.getTheTitles(eventsFunc.eventGenerator(3)).length).toBe(3);
});

test('eventGenerator(0) should throw an error', () => {
  expect(() => {
    eventsFunc.eventGenerator(0);
  }).toThrow();
});