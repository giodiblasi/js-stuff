/* global describe it */
const assert = require('chai').assert;
const e = require('../factoryFunctionInheritance');

describe('---mixin Employee example--- calculate classic pay tests', () => {
  it('pay for commisioned', () => {
    const employee = e.getCommissionedEmployee();
    assert.equal(employee.calculatePay(), 10);
  });
  it('pay for hourly', () => {
    const employee = e.getHourlyEmployee();
    assert.equal(employee.calculatePay(), 80);
  });
  it('pay for salaried', () => {
    const employee = e.getSalariedEmployee();
    assert.equal(employee.calculatePay(), 300);
  });
});

describe(' ---mixin Employee example--- classic is Pay Day tests', () => {
  it(' for commisioned', () => {
    const employee = e.getCommissionedEmployee();
    assert.equal(employee.isDayPay(1), true);
    assert.equal(employee.isDayPay(2), false);
  });
  it(' for hourly', () => {
    const employee = e.getHourlyEmployee();
    assert.equal(employee.isDayPay(15), true);
    assert.equal(employee.isDayPay(1), false);
  });
  it(' for salaried', () => {
    const employee = e.getSalariedEmployee();
    assert.equal(employee.isDayPay(30), true);
    assert.equal(employee.isDayPay(1), false);
  });
});
