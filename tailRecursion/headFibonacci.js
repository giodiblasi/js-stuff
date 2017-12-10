const headFibonacciSequence = (n) => {
  if (n < 2) return n;
  return headFibonacciSequence(n - 1) + headFibonacciSequence(n - 2);
};

module.exports = { getFibonacciNumber: headFibonacciSequence };
