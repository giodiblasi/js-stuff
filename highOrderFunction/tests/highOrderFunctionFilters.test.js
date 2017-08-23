/* global describe it */
const assert = require('chai').assert;
const filters = require('../highOrderFunctionFilters');
const _ = require('ramda');


describe('---HOF test--- test high order function filters', () => {
  it('should filter 4 digits word', () => {
    const ary = ['bla', 'blah', 'owen', 'bob'];
    assert.deepEqual(filters.removeFourDigitsWords(ary), ['bla', 'bob']);
  });
  it('should filter words starting with "s"', () => {
    const ary = ['message', 'sent', 'with', 'success'];
    assert.deepEqual(filters.filterStartWithS(ary), ['sent', 'success']);
  });

  it('should filter even digits', () => {
    const ary = [1, 2, 3, 4];
    assert.deepEqual(filters.filterEvenDigit(ary), [2, 4]);
  });

  it('should filter only digits', () => {
    const ary = ['1', 2, 3, 'hello'];
    assert.deepEqual(filters.filterDigit(ary), [2, 3]);
  });

  it('should filter even digits when inout has not number item', () => {
    const ary = ['4', 2, 3, 4];
    const composedFilter = _.compose(filters.filterEvenDigit, filters.filterDigit);
    assert.deepEqual(composedFilter(ary), [2, 4]);
  });
});
