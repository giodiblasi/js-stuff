const tailFibonacci = require('./tailFibonacci');
const headFibonacci = require('./headFibonacci');

const getGenerators = (generatorType, number) => {
  if (generatorType === 'tail') return tailFibonacci.getFibonacciNumber(number);
  if (generatorType === 'head') return headFibonacci.getFibonacciNumber(number);
  return () => {};
};

const type = process.argv[2];
const number = process.argv[3];

console.log(getGenerators(type, number));

// node  --harmony  --use-strict tailRecursion\index.js [tail|head] 10
