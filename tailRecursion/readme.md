# Tail Recursion Exmaple

In this scenario, based on [this post](https://codurance.com/2017/12/07/recursion/), we implement a function that return the n-th number in the  Fibonacci sequence.

The formula to obtain a [Fibonacci](https://en.wikipedia.org/wiki/Fibonacci_number) number is:
```
F(n) = F(n-1) + F(n-2)
```
with the following assumptions:
```
- F(0) = 0
- F(1) = 1
```

The target of this kata is to use the tail recursion optimization.

### Head recursion example ( do not try this at home :) ).
The Fibonacci formula, as presented,suggests a recursive implementation like this:

``` javascript 
const fibonacciSequence = (n) => {
  if (n < 2) return n;
  return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
};
```

Bad Idea!!!

This approach counts at least two problems:
same calculations are performed more and more times,for example F(0) is calculated for each branch generated during recursive calls.

In addiction you can note that the return statement needs that the recursive calls, with n-1 and n-2, finish in order to sum the results.
In this example It is needed to keep the current state in order to complete the calculation before to return

 ### Tail recursion example

 With tail recursion we should complete our calculus before to do the next  recursive call.
 
 in order to achive this objective, for the Fiboncacci sequence, we need to rethink the algorithm in reverse way. We need to start with F(0) and then we do the recursive calls with the successive numbers.

 ```javascript
 const tailFibonacciSequence = (n, n1, n2) => {
  if (n === 0) return n2;
  const nextN1 = n2;
  const nextN2 = n1 + n2;
  return tailFibonacciSequence(n - 1, nextN1, nextN2);
};

const getTailFibonacciNumber = (n) => {
  if (n < 2) return n;
  return tailFibonacciSequence(n - 1, 0, 1);
};

```
In this code tha parameter "n" is only a counter and n1 and n2 are the two Fibonacci numbers to sum.


If you want to see the differences between two approaches, you can run the program as follows:

```javascript
node  tailRecursion\index.js [tail|head] 10
```
use tail or head option to choose  the recursion type.

If try with a number like 1000, you can see that using the first approach the task needs a lot of resources.
With second approach the task needs few istants.


## Tail recursion optimization
With Tail recursion all calculus are completed without the need to wait the next recursive call.
This allow the tail recursive optimization.

To enable tail recursion optimization It is needed to use --harmony  --use-strict flags as follow:

```javascript
node  --harmony  --use-strict tailRecursion\index.js [tail|head] 10
```

If you try with the number 100000 without these flags you obtain the "Maximum call stack size exceeded"




