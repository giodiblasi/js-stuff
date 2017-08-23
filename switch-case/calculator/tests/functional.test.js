/* global describe it */
const assert = require('chai').assert;
const computeStd = require('../functional').computeStd;
const computePrg = require('../functional').computePrg;
const computeCustom = require('../functional').computeCustom;
const _ = require('ramda');

describe('---switch case test--- Switch Case curried tests', () => {
  it('Check <+> operator', () => {
    const n = computeStd('+')(3)(2);
    const m = computePrg('+')(3)(2);
    assert.equal(n, 5);
    assert.equal(m, 5);
  });

  it('Check <-> operator', () => {
    const n = computeStd('-')(2)(3);
    const m = computePrg('-')(2)(3);
    assert.equal(n, 1);
    assert.equal(m, 1);
  });

  it('Check undefined operator', () => {
    const n = computeStd('x')(3)(2);
    const m = computePrg('x')(3)(2);
    assert.equal(n, 0);
    assert.equal(m, 0);
  });

  it('Check composition 2 + 3 - 1', () => {
    const n = _.compose(computeStd('-')(1), computeStd('+')(3))(2);
    const m = _.compose(computePrg('-')(1), computePrg('+')(3))(2);
    assert.equal(n, 4);
    assert.equal(m, 4);
  });

  it('Check <%> operator ', () => {
    const n = computeStd('%')(5)(100);
    const m = computePrg('%')(5)(100);
    assert.equal(n, 5);
    assert.equal(m, 0);
  });

  it('Check <-%> operator ', () => {
    const n = computeStd('-%')(5)(100);
    assert.equal(n, 95);
  });

  it('Usage of custom calc ', () => {
    const customCalc = {};
    customCalc['++'] = op1 => op1 + 1;
    const n = computeCustom(customCalc)('++')(1);
    assert.equal(n, 2);
  });
});
