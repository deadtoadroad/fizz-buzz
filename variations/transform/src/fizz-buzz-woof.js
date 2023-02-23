const {
  constant,
  filter,
  flow,
  isEqual,
  map,
  over,
  split,
  spread,
  toNumber,
  toString,
} = require("lodash/fp");
const {
  getOutputAsString,
  initialise,
  otherwiseInputTransform,
} = require("./common");
const { isDivisibleByTransform } = require("./fizz-buzz");

const digitsTransform =
  (digit, word) =>
  ({ input, output }) => ({
    input,
    output: [
      ...output,
      ...flow(
        toString,
        split(""),
        map(toNumber),
        filter(isEqual(digit)),
        map(constant(word))
      )(input),
    ],
  });

const digitsAndIsDivisibleByTransform = flow(
  // `digitsTransform` and `isDivisibleByTransform` both have the same parameters, use `over` to apply them.
  over([digitsTransform, isDivisibleByTransform]),
  spread(flow)
);

const fizzBuzzWoof = flow(
  initialise,
  digitsAndIsDivisibleByTransform(3, "Fizz"),
  digitsAndIsDivisibleByTransform(5, "Buzz"),
  digitsAndIsDivisibleByTransform(7, "Woof"),
  otherwiseInputTransform,
  getOutputAsString
);

module.exports = { digitsTransform, fizzBuzzWoof };
