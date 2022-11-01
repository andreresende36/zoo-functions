const data = require('../data/zoo_data');

const { employees } = data;

function isManager(idM) {
  const idManagers = employees.reduce((acc, curr) => {
    const { id, firstName } = curr;
    if (firstName === 'Burl' || firstName === 'Ola'
      || firstName === 'Stephanie' || firstName === 'Emery') {
      acc.push(id);
      return acc;
    }
    return acc;
  }, []);
  const employeeToCheck = employees.find((employee) => employee.id === idM);
  return idManagers.includes(employeeToCheck.id);
}

function getRelatedEmployees(managerId) {
  if (!isManager(managerId)) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  return employees.reduce((acc, curr) => {
    if (curr.managers.includes(managerId)) {
      acc.push(`${curr.firstName} ${curr.lastName}`);
      return acc;
    }
    return acc;
  }, []);
}

// console.log(isManager('b0dc644a-5335-489b-8a2c-4e086c7819a2'));
console.log(getRelatedEmployees('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));
// c1f50212-35a6-4ecd-8223-f835538526c2

module.exports = { isManager, getRelatedEmployees };
