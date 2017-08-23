class Emploee {
  constructor(type) {
    this.type = type;
    this.amount = 10;
  }
}

const calculateCommisionedPay = emploee => emploee.amount * 1;
const calculateHourlyPay = emploee => emploee.amount * 8;
const calculateSalariedPay = emploee => emploee.amount * 30;

const isDayPayForCommisioned = dayOfMonth => (dayOfMonth === 1);
const isDayPayForHourly = dayOfMonth => (dayOfMonth === 15);
const isDayPayForSalaried = dayOfMonth => (dayOfMonth === 30);


module.exports = {
  Emploee,
  calculateCommisionedPay,
  calculateHourlyPay,
  calculateSalariedPay,
  isDayPayForCommisioned,
  isDayPayForHourly,
  isDayPayForSalaried,
};
