const data = require('../data/zoo_data');

const { employees } = data;

// function isManager(idM) {
//   const idManagers = employees.reduce((acc, curr) => {
//     const { id, firstName } = curr;
//     if (firstName === 'Burl' || firstName === 'Ola'
//       || firstName === 'Stephanie' || firstName === 'Emery') {
//       acc.push(id);
//       return acc;
//     }
//     return acc;
//   }, []);
//   const employeeToCheck = employees.find((employee) => employee.id === idM);
//   return idManagers.includes(employeeToCheck.id);
// }

function isManager(id) {
  return employees.some(({ managers }) => managers.some((managerId) => managerId === id));
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

module.exports = { isManager, getRelatedEmployees };
