const { flow, isEqual } = require("lodash/fp");
const {
  addToOutputTransform,
  getOutputAsString,
  ifInput,
  ifMap,
  initialise,
  otherwiseInputTransform,
} = require("./common");

const remainder = (divisor) => (dividend) => dividend % divisor;
const isDivisibleBy = (divisor) => flow(remainder(divisor), isEqual(0));

const isDivisibleByTransform = (divisor, word) =>
  ifMap(ifInput(isDivisibleBy(divisor)), addToOutputTransform(word));

const fizzBuzz = flow(
  initialise,
  isDivisibleByTransform(3, "Fizz"),
  isDivisibleByTransform(5, "Buzz"),
  otherwiseInputTransform,
  getOutputAsString
);

module.exports = { fizzBuzz, isDivisibleByTransform };
