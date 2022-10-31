const { employees } = require('../data/zoo_data');
const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  return employees.find((employee) => {
    const { firstName, lastName } = employee;
    return firstName === employeeName || lastName === employeeName;
  }) || {};
}

module.exports = getEmployeeByName;
