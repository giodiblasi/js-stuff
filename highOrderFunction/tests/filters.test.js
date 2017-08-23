/* global describe it */
const assert = require('chai').assert;
const filters = require('../filters');


describe('---HOF test---  test classic filters', () => {
  it('should filter 4 digits word', () => {
    const ary = ['bla', 'blah', 'owen', 'bob'];
    assert.deepEqual(filters.removeFourDigitsWords(ary), ['bla', 'bob']);
  });
  it('should filter words starting with "s"', () => {
    const ary = ['message', 'sent', 'with', 'success'];
    assert.deepEqual(filters.filterStartWithS(ary), ['sent', 'success']);
  });
});
