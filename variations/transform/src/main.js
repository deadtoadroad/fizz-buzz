const { EOL } = require("os");
const { fizzBuzz } = require("./fizz-buzz");
const { fizzBuzzWoof } = require("./fizz-buzz-woof");

const write = (value) => process.stdout.write(value);
const writeLine = () => write(EOL);

const run = (f) => {
  for (let i = 1; i <= 100; i++) {
    if (i > 1) {
      write(", ");
    }
    write(f(i));
  }
  writeLine();
};

run(fizzBuzz);
writeLine();
run(fizzBuzzWoof);
