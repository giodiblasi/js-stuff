const { COMMSIONED, HOURLY, SALARIED } = require('./payTypes');
const e = require('./employee');

const calculatePay = (employee) => {
  switch (employee.type) {
    case COMMSIONED: return e.calculateCommisionedPay(employee);
    case HOURLY: return e.calculateHourlyPay(employee);
    case SALARIED: return e.calculateSalariedPay(employee);
    default: return 0;
  }
};

const isDayPay = (employee, dayOfMonth) => {
  switch (employee.type) {
    case COMMSIONED: return e.isDayPayForCommisioned(dayOfMonth);
    case HOURLY: return e.isDayPayForHourly(dayOfMonth);
    case SALARIED: return e.isDayPayForSalaried(dayOfMonth);
    default: return false;
  }
};


// switch case duplication!!!

module.exports = { calculatePay, isDayPay };

