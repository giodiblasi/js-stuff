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

const promoteToDeveloper = (employee) => {
  const activeProjetcs = [];
  return Object.assign({}, employee, {
    assignToProject(projectName) {
      activeProjetcs.push(projectName);
      return this;
    },
    getProjects() {
      return activeProjetcs;
    },
  });
};

module.exports = { promoteToManager, promoteToDeveloper };
