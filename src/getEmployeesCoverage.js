const data = require('../data/zoo_data');

const { species, employees } = data;

const employeesId = employees.map((element) => element.id);

function checkValue(object) {
  const value = Object.values(object)[0];
  return employees.some((e) => e.id === value || e.firstName === value || e.lastName === value);
}

function getEmployeesCoverage(object) {
  if (!object) {
    return employeesId.reduce((acc, curr) => {
      acc.push(getEmployeesCoverage({ id: curr }));
      return acc;
    }, []);
  }
  if (!checkValue(object)) { throw new Error('Informações inválidas'); }

  const employee = employees.find((e) => (Object.values(e).includes(Object.values(object)[0])));
  const speciesName = employee.responsibleFor.map((id) => species.find((e) => e.id === id).name);
  const local = employee.responsibleFor.map((id) => species.find((e) => e.id === id).location);
  return {
    id: employee.id,
    fullName: `${employee.firstName} ${employee.lastName}`,
    species: speciesName,
    locations: local,
  };
}

module.exports = getEmployeesCoverage;
