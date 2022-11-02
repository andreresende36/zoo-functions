const data = require('../data/zoo_data');

const { species, employees } = data;

const employeesId = employees.map((element) => element.id);

function checkName(object) {
  const value = Object.values(object)[0];
  if (!employees.some((e) => e.id === value || e.firstName === value || e.lastName === value)) {
    throw new Error('Informações inválidas');
  }
}

function getEmployeesCoverage(object) {
  if (!object) {
    return employeesId.reduce((acc, curr) => {
      acc.push(getEmployeesCoverage({ id: curr }));
      return acc;
    }, []);
  }
  try {
    checkName(object);
    const employee = employees.find((e) => (Object.values(e).includes(Object.values(object)[0])));
    const speciesName = employee.responsibleFor.map((id) => species.find((e) => e.id === id).name);
    const local = employee.responsibleFor.map((id) => species.find((e) => e.id === id).location);
    return {
      id: employee.id,
      fullName: `${employee.firstName} ${employee.lastName}`,
      species: speciesName,
      locations: local,
    };
  } catch (error) { return error.message; }
}

console.log(getEmployeesCoverage({ id: 'Id inválido' }));

module.exports = getEmployeesCoverage;
