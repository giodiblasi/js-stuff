// in this use case I can't use mixin function, in this case I have an inheritance based on 
// "function overriding", mixin are better when 
// each of them adds a behavior to the base without know other mixin.

const buildEmployee = (calculatePay, isDayPay) => {
  const employee = {
    amount: 10,
  };
  employee.calculatePay = () => calculatePay(employee.amount);
  employee.isDayPay = isDayPay;
  return employee;
};

const getHourlyEmployee = () => buildEmployee(
  amount => amount * 8,
  dayOfMonth => (dayOfMonth === 15),
);

const getCommissionedEmployee = () =>
  buildEmployee(
    amount => amount * 1,
    dayOfMonth => (dayOfMonth === 1),
  );

const getSalariedEmployee = () => buildEmployee(
  amount => amount * 30,
  dayOfMonth => (dayOfMonth === 30),
);


module.exports = {
  getHourlyEmployee,
  getCommissionedEmployee,
  getSalariedEmployee,
};
