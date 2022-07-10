const { digitsTransform } = require("../src/transforms");

describe("transforms", () => {
  describe("digitsTransform", () => {
    it.each([
      [0, []],
      [1, ["One"]],
      [2, []],
      [10, ["One"]],
      [11, ["One", "One"]],
      [12, ["One"]],
      [20, []],
      [21, ["One"]],
      [22, []],
    ])("works %s", (input, output) => {
      const actual = digitsTransform(1, "One")({ input, output: [] });
      expect(actual).toStrictEqual({ input, output });
    });
  });
});
