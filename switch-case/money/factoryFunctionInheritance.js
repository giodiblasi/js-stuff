// in this use case I can't use mixin function, in this case I have an inheritance based on 
// "function overriding", mixin are better when 
// each of them adds a behavior to the base without know other mixin.


const getEmployee = () => {
  const that = {};
  that.amount = 10;
  return that;
};

const buildEmployee = (calculatePay, isDayPay) => {
  const employee = getEmployee();
  employee.calculatePay = calculatePay(employee);
  employee.isDayPay = isDayPay;
  return employee;
};

const getHourlyEmployee = () => buildEmployee(
  e => () => e.amount * 8,
  dayOfMonth => (dayOfMonth === 15),
);

const getCommissionedEmployee = () =>
  buildEmployee(
    e => () => e.amount * 1,
    dayOfMonth => (dayOfMonth === 1),
  );

const getSalariedEmployee = () => buildEmployee(
  e => () => e.amount * 30,
  dayOfMonth => (dayOfMonth === 30),
);


module.exports = {
  getHourlyEmployee,
  getCommissionedEmployee,
  getSalariedEmployee,
};
