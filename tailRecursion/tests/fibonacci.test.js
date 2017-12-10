/* global describe, it */
const { assert } = require('chai');
const tailFibonacci = require('../tailFibonacci');
const headFibonacci = require('../headFibonacci');

const getFibonacciTests = fibonacciGenerator => () => {
  it('fib(0) = 0', () => {
    assert.equal(fibonacciGenerator(0), 0);
  });
  it('fib(1) = 1', () => {
    assert.equal(fibonacciGenerator(1), 1);
  });
  it('fib(2) = 1', () => {
    assert.equal(fibonacciGenerator(2), 1);
  });
  it('fib(10) = 55', () => {
    assert.equal(fibonacciGenerator(10), 55);
  });
};

describe('---fibonacci test - tail recursion', getFibonacciTests(tailFibonacci.getFibonacciNumber));

describe('---fibonacci test - head recursion', getFibonacciTests(headFibonacci.getFibonacciNumber));

