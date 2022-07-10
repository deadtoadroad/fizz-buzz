const {
  constant,
  filter,
  flow,
  isEmpty,
  join,
  map,
  over,
  split,
  spread,
  toString,
} = require("lodash/fp");
const {
  inputPredicate,
  isDigit,
  isDivisibleBy,
  outputPredicate,
} = require("./predicates");

// A transform accepts a payload with a type and returns the same type.
// The contents of the payload may or may not be changed in some way.
// The payload for these transforms is: `{ input: number, output: string[] }`.

const initialisePayload = (input) => ({ input, output: [] });
const getOutputAsString = ({ output }) => join(" ", output);

const predicateTransform = (predicate, transform) => (payload) =>
  predicate(payload) ? transform(payload) : payload;

const addFInputToOutputTransform =
  (f) =>
  ({ input, output }) => ({
    input,
    output: [...output, f(input)],
  });

const addValueToOutputTransform =
  (value) =>
  ({ input, output }) => ({
    input,
    output: [...output, value],
  });

const digitsTransform =
  (digit, value) =>
  ({ input, output }) => ({
    input,
    output: [
      ...output,
      ...flow(
        toString,
        split(""),
        filter(isDigit(digit)),
        map(constant(value))
      )(input),
    ],
  });

const divisibleTransform = (divisor, value) =>
  predicateTransform(
    inputPredicate(isDivisibleBy(divisor)),
    addValueToOutputTransform(value)
  );

const otherwiseTransform = predicateTransform(
  outputPredicate(isEmpty),
  addFInputToOutputTransform(toString)
);

const digitsAndDivisibleTransform = flow(
  // `digitsTransform` and `divisibleTransform` have the same parameters, use `over` to apply them.
  over([digitsTransform, divisibleTransform]),
  spread(flow)
);

module.exports = {
  digitsAndDivisibleTransform,
  digitsTransform,
  divisibleTransform,
  getOutputAsString,
  initialisePayload,
  otherwiseTransform,
};
