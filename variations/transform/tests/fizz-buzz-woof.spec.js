const { digitsTransform, fizzBuzzWoof } = require("../src/fizz-buzz-woof");

describe("fizz-buzz-woof", () => {
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

  describe("fizzBuzzWoof", () => {
    it.each([
      [-5, "Buzz Buzz"],
      [-4, "-4"],
      [-3, "Fizz Fizz"],
      [-2, "-2"],
      [-1, "-1"],
      [-0, "Fizz Buzz Woof"],
      [0, "Fizz Buzz Woof"],
      [1, "1"],
      [2, "2"],
      [3, "Fizz Fizz"],
      [4, "4"],
      [5, "Buzz Buzz"],
      [6, "Fizz"],
      [7, "Woof Woof"],
      [8, "8"],
      [9, "Fizz"],
      [10, "Buzz"],
      [11, "11"],
      [12, "Fizz"],
      [13, "Fizz"],
      [14, "Woof"],
      [15, "Fizz Buzz Buzz"],
      [16, "16"],
      [17, "Woof"],
      [18, "Fizz"],
      [19, "19"],
      [20, "Buzz"],
      [21, "Fizz Woof"],
      [22, "22"],
      [23, "Fizz"],
      [24, "Fizz"],
      [25, "Buzz Buzz"],
      [26, "26"],
      [27, "Fizz Woof"],
      [28, "Woof"],
      [29, "29"],
      [30, "Fizz Fizz Buzz"],
      [31, "Fizz"],
      [32, "Fizz"],
      [33, "Fizz Fizz Fizz"],
      [34, "Fizz"],
      [35, "Fizz Buzz Buzz Woof"],
      [36, "Fizz Fizz"],
      [37, "Fizz Woof"],
      [38, "Fizz"],
      [39, "Fizz Fizz"],
      [40, "Buzz"],
    ])("works %s", (value, expected) => {
      const actual = fizzBuzzWoof(value);
      expect(actual).toBe(expected);
    });
  });
});
