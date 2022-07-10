const { flow } = require("lodash/fp");
const {
  divisibleTransform,
  getOutputAsString,
  initialisePayload,
  otherwiseTransform,
} = require("./transforms");

const fizzBuzz = flow(
  initialisePayload,
  divisibleTransform(3, "Fizz"),
  divisibleTransform(5, "Buzz"),
  otherwiseTransform,
  getOutputAsString
);

module.exports = { fizzBuzz };
