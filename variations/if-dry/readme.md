# if-dry

This may be one of the most common approaches to implementing Fizz Buzz.
If/condition statements are used with an additional step of extracting predicates into functions.

However, while code can be made DRYer by extracting functions, the fact that `isBuzz`, `doFizz` and `doBuzz` are referenced twice doesn't feel very DRY.
Adding additional rules or changing the order of rules can expose the difficulties with this approach.
The rules could (and possibly should) be evaluated independent of each other.

## Run

```shell
npm install
npm test # Optional
npm run main
```
