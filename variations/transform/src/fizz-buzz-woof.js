const { flow } = require("lodash/fp");
const {
  digitsAndDivisibleTransform,
  getOutputAsString,
  initialisePayload,
  otherwiseTransform,
} = require("./transforms");

const fizzBuzzWoof = flow(
  initialisePayload,
  digitsAndDivisibleTransform(3, "Fizz"),
  digitsAndDivisibleTransform(5, "Buzz"),
  digitsAndDivisibleTransform(7, "Woof"),
  otherwiseTransform,
  getOutputAsString
);

module.exports = { fizzBuzzWoof };
