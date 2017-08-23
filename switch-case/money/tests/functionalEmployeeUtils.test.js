/* global describe it */
const assert = require('chai').assert;
const { calculatePay, isDayPay, buildEmployeeBehavior, Employee } = require('../functionalEmployeeUtils');
const { COMMISIONED, HOURLY, SALARIED } = require('../payTypes');

const employeeBehavior = buildEmployeeBehavior();
const employee = new Employee();
const calculatePayB = calculatePay(employeeBehavior);
const isPayDayB = isDayPay(employeeBehavior);

describe('---switch case Employee example--- calculate pay tests', () => {
  it('pay for commisioned', () => {
    assert.equal(calculatePayB(COMMISIONED)(employee), 10);
  });
  it('pay for hourly', () => {
    assert.equal(calculatePayB(HOURLY)(employee), 80);
  });
  it('pay for salaried', () => {
    assert.equal(calculatePayB(SALARIED)(employee), 300);
  });

  it('pay for default', () => {
    assert.equal(calculatePayB('unknown')(employee), 0);
  });
});


describe('---switch case Employee example--- is Pay Day tests', () => {
  it(' for commisioned', () => {
    assert.equal(isPayDayB(COMMISIONED)(1), true);
    assert.equal(isPayDayB(COMMISIONED)(2), false);
  });
  it(' for hourly', () => {
    assert.equal(isPayDayB(HOURLY)(15), true);
    assert.equal(isPayDayB(HOURLY)(1), false);
  });
  it(' for salaried', () => {
    assert.equal(isPayDayB(SALARIED)(30), true);
    assert.equal(isPayDayB(SALARIED)(1), false);
  });

  it(' for deafult', () => {
    assert.equal(isPayDayB('unknown')(15), false);
  });
});
