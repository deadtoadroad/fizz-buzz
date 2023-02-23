const { EOL } = require("os");
const { fizzBuzz } = require("./fizz-buzz");

const write = (value) => process.stdout.write(value);
const writeLine = () => write(EOL);

for (let i = 1; i <= 100; i++) {
  if (i > 1) {
    write(", ");
  }
  write(fizzBuzz(i));
}

writeLine();
