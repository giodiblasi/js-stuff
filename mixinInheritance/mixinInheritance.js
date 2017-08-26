const promoteToManager = (employee) => {
  let employees = 0;
  return Object.assign({}, employee, {
    addEmployees(employeesNumber) {
      employees += employeesNumber;
      return this;
    },
    getEmployees() {
      return employees;
    },
  });
};

module.exports = { promoteToManager };
