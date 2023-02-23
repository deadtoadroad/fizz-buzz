# cond

This may be one of the most common approaches to implementing Fizz Buzz.
Conditional statements are used, but with an additional step of extracting predicates into functions.

However, while code can be made DRY by extracting functions, the fact that `isBuzz`, `doFizz` and `doBuzz` are called twice exposes dependencies which probably shouldn't exist.
Adding additional rules or changing the order of rules exposes the difficulties with this approach.
The rules could be evaluated independently of each other instead (see [transform](../transform)).

## Run

```shell
npm install
npm test # Optional
npm run main
```
