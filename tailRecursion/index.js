const tailFibonacci = require('./tailFibonacci');
const headFibonacci = require('./headFibonacci');

const getFibonacciNumber = (recursionType, number) => {
  if (recursionType === 'tail') return tailFibonacci.getFibonacciNumber(number);
  if (recursionType === 'head') return headFibonacci.getFibonacciNumber(number);
  return `"${recursionType}" is not a valid type, use "tail" or "head"`;
};

const type = process.argv[2];
const number = process.argv[3];

console.log(getFibonacciNumber(type, number));

// node  --harmony  --use-strict tailRecursion\index.js [tail|head] 10
