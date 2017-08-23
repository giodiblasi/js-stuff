/* global describe it */
const assert = require('chai').assert;
const computePrg = require('../classic').computePrg;
const computeStd = require('../classic').computeStd;

describe('---switch case test--- classic Switch Case tests', () => {
  it('Check <+> operator', () => {
    const n = computePrg('+', 3, 2);
    const m = computeStd('+', 3, 2);
    assert.equal(n, 5);
    assert.equal(m, 5);
  });

  it('Check <-> operator', () => {
    const n = computePrg('-', 3, 2);
    const m = computeStd('-', 3, 2);
    assert.equal(n, 1);
    assert.equal(m, 1);
  });

  it('Check undefined operator', () => {
    const n = computePrg('x', 3, 2);
    const m = computeStd('x', 3, 2);
    assert.equal(n, 0);
    assert.equal(m, 0);
  });

  it('Check composition 2 + 3 - 1', () => {
    const n = computePrg('-', computePrg('+', 3, 2), 1);
    const m = computeStd('-', computeStd('+', 3, 2), 1);
    assert.equal(n, 4);
    assert.equal(m, 4);
  });

  it('Check <%> operator', () => {
    const n = computePrg('%', 100, 5);
    const m = computeStd('%', 100, 5);
    assert.equal(n, 0);
    assert.equal(m, 5);
  });

  it('Check <-%> operator ', () => {
    const n = computeStd('-%', 100, 5);
    assert.equal(n, 95);
  });
});
