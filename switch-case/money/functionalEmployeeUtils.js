const selectOption = require('../selectOption');
const e = require('./employee');
const { COMMISIONED, HOURLY, SALARIED } = require('./payTypes');

class Employee {
  constructor() {
    this.amount = 10;
  }
}

const buildEmployeeBehavior = () => {
  const employeeBehavior = {};
  employeeBehavior[COMMISIONED] = {
    calculatePay: e.calculateCommisionedPay,
    isDayPay: e.isDayPayForCommisioned,
  };

  employeeBehavior[HOURLY] = {
    calculatePay: e.calculateHourlyPay,
    isDayPay: e.isDayPayForHourly,
  };

  employeeBehavior[SALARIED] = {
    calculatePay: e.calculateSalariedPay,
    isDayPay: e.isDayPayForSalaried,
  };

  return employeeBehavior;
};

const defaultBehavior = {
  calculatePay: () => 0,
  isDayPay: () => false,
};

const calculatePay = employeeBehavior => type =>
  selectOption(employeeBehavior)(defaultBehavior)(type).calculatePay;

const isDayPay = employeeBehavior => type =>
  selectOption(employeeBehavior)(defaultBehavior)(type).isDayPay;

module.exports = { Employee, calculatePay, isDayPay, buildEmployeeBehavior };

