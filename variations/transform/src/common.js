const { isEmpty, join, toString } = require("lodash/fp");

// A transform accepts a payload with a type and returns the same type.
// The contents of the payload may or may not be changed in some way.
// The payload for each transform is: `{ input: number, output: string[] }`.
const initialise = (input) => ({ input, output: [] });
const ifMap = (predicate, f) => (a) => predicate(a) ? f(a) : a;

const ifInput =
  (predicate) =>
  ({ input }) =>
    predicate(input);

const ifOutput =
  (predicate) =>
  ({ output }) =>
    predicate(output);

const addToOutputTransform =
  (a) =>
  ({ input, output }) => ({
    input,
    output: [...output, a],
  });

const mapInputToOutputTransform =
  (f) =>
  ({ input, output }) => ({
    input,
    output: [...output, f(input)],
  });

const otherwiseInputTransform = ifMap(
  ifOutput(isEmpty),
  mapInputToOutputTransform(toString)
);

const getOutputAsString = ({ output }) => join(" ", output);

module.exports = {
  addToOutputTransform,
  getOutputAsString,
  ifInput,
  ifMap,
  ifOutput,
  initialise,
  mapInputToOutputTransform,
  otherwiseInputTransform,
};
