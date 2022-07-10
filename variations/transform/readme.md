# transform

This approach evaluates the rules independently of each other by constructing a transform pipeline that passes the input number and progressively builds an output array.
Adding additional rules or changing the order of rules doesn't require the modification of existing rules.

To demonstrate, Fizz Buzz Woof has also been implemented.

## Fizz Buzz Woof

Write a program that prints out the first 100 numbers of [Fizz Buzz Woof](https://en.wikipedia.org/wiki/Fizz_buzz#Other_variations) (from 1 to 100).

- If a number contains the digit 3 or is divisible by 3, replace it with "Fizz".
- If a number contains the digit 5 or is divisible by 5, replace it with "Buzz".
- If a number contains the digit 7 or is divisible by 7, replace it with "Woof".
- _n_ occurrences of a digit should result in _n_ or _n + 1_ occurrences of a word (depending on whether the number is also divisible by the digit).
- If different words occur, they should be in the order they appear in the title.

For example, the number 27 should result in "Fizz Woof".
The number 33 should result in "Fizz Fizz Fizz".
The number 35 should result in "Fizz Buzz Buzz Woof".

## Run

```shell
npm install
npm test # Optional
npm run main
```
