const { isDigit } = require("../src/predicates");

describe("predicates", () => {
  describe("isDigit", () => {
    it.each([
      ["0", false],
      ["1", true],
      ["2", false],
    ])("works %s", (value, expected) => {
      const actual = isDigit(1)(value);
      expect(actual).toBe(expected);
    });
  });
});
