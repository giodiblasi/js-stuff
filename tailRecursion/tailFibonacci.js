// Tail recursion: next call result not used for calculation
const tailFibonacciSequence = (n, n1, n2) => {
  if (n === 0) return n2;
  const nextN1 = n2;
  const nextN2 = (n1 + n2);
  return tailFibonacciSequence(n - 1, nextN1, nextN2);
};


const getTailFibonacciNumber = (n) => {
  if (n < 2) return n;
  return tailFibonacciSequence(n - 1, 0, 1);
};

module.exports = { getFibonacciNumber: getTailFibonacciNumber };
