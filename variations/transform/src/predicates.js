const { flow, isEqual, toString } = require("lodash/fp");

const inputPredicate =
  (predicate) =>
  ({ input }) =>
    predicate(input);

const outputPredicate =
  (predicate) =>
  ({ output }) =>
    predicate(output);

const isDigit = flow(toString, isEqual);
const remainder = (divisor) => (dividend) => dividend % divisor;
const isDivisibleBy = (divisor) => flow(remainder(divisor), isEqual(0));

module.exports = { inputPredicate, isDigit, isDivisibleBy, outputPredicate };
