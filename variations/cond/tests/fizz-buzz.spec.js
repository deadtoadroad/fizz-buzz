const { fizzBuzz } = require("../src/fizz-buzz");

describe("fizz-buzz", () => {
  describe("fizzBuzz", () => {
    it.each([
      [-5, "Buzz"],
      [-4, "-4"],
      [-3, "Fizz"],
      [-2, "-2"],
      [-1, "-1"],
      [-0, "Fizz Buzz"],
      [0, "Fizz Buzz"],
      [1, "1"],
      [2, "2"],
      [3, "Fizz"],
      [4, "4"],
      [5, "Buzz"],
      [6, "Fizz"],
      [7, "7"],
      [8, "8"],
      [9, "Fizz"],
      [10, "Buzz"],
      [11, "11"],
      [12, "Fizz"],
      [13, "13"],
      [14, "14"],
      [15, "Fizz Buzz"],
      [16, "16"],
      [17, "17"],
      [18, "Fizz"],
      [19, "19"],
      [20, "Buzz"],
    ])("works %s", (value, expected) => {
      const actual = fizzBuzz(value);
      expect(actual).toBe(expected);
    });
  });
});
