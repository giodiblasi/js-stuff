# High Order Function 

Some Experients with High Order Function.

The scenario is based on this [post](https://medium.com/javascript-scene/higher-order-functions-composing-software-5365cf2cbe99)
I have used a different implementation: I have not separated the iteration from the "if" statement bu I've extracted only the predicate

Given an array, we want:
+ remove word with exactly 4 chars
+ filter words starting with 's' char

in filter.js I used a classic way to filter, in highOrderFunctionFilters.js I've exracted the iteration in an HOF and I reused it to build more filters.

Using an HOF it possible to share the implementation of iteration for array with different type items (in this case only the predicate should deal with type of item)

Example:
```javascript 
const filterStartWithS = filter(word => word[0] === 's');
const filterEvenDigit = filter(item => item % 2 === 0);

filters.filterEvenDigit([1, 2, 3, 4]) // [2,4]
filters.filterStartWithS(['message', 'sent']) // ['sent']
```


