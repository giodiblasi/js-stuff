/* global describe it */
const assert = require('chai').assert;
const { calculatePay, isDayPay } = require('../employeeUtils');
const Emploee = require('../employee').Emploee;
const { COMMSIONED, HOURLY, SALARIED } = require('../payTypes');

describe('---switch case Employee example--- calculate classic pay tests', () => {
  it('pay for commisioned', () => {
    assert.equal(calculatePay(new Emploee(COMMSIONED)), 10);
  });
  it('pay for hourly', () => {
    assert.equal(calculatePay(new Emploee(HOURLY)), 80);
  });
  it('pay for salaried', () => {
    assert.equal(calculatePay(new Emploee(SALARIED)), 300);
  });

  it('pay for default', () => {
    assert.equal(calculatePay(new Emploee('default')), 0);
  });
});

describe(' ---switch case Employee example--- classic is Pay Day tests', () => {
  it(' for commisioned', () => {
    assert.equal(isDayPay(new Emploee(COMMSIONED), 1), true);
    assert.equal(isDayPay(new Emploee(COMMSIONED), 2), false);
  });
  it(' for hourly', () => {
    assert.equal(isDayPay(new Emploee(HOURLY), 15), true);
    assert.equal(isDayPay(new Emploee(HOURLY), 1), false);
  });
  it(' for salaried', () => {
    assert.equal(isDayPay(new Emploee(SALARIED), 30), true);
    assert.equal(isDayPay(new Emploee(SALARIED), 1), false);
  });

  it(' for deafult', () => {
    assert.equal(isDayPay(new Emploee('default'), 15), false);
  });
});
