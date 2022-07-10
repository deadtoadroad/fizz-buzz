const {
  cond,
  constant,
  flow,
  isEqual,
  join,
  over,
  stubTrue: otherwise,
  toString,
} = require("lodash/fp");

const remainder = (divisor) => (dividend) => dividend % divisor;
const isDivisibleBy = (divisor) => flow(remainder(divisor), isEqual(0));
const isFizz = isDivisibleBy(3);
const isBuzz = isDivisibleBy(5);
const doFizz = constant("Fizz");
const doBuzz = constant("Buzz");
const doFizzBuzz = flow(over([doFizz, doBuzz]), join(" "));

const doFizzBuzzOrFizz = cond([
  [isBuzz, doFizzBuzz],
  [otherwise, doFizz],
]);

const fizzBuzz = cond([
  [isFizz, doFizzBuzzOrFizz],
  [isBuzz, doBuzz],
  [otherwise, toString],
]);

module.exports = { fizzBuzz };
