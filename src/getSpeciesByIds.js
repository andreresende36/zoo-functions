const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  return data.species.reduce((acc, curr) => {
    if (ids.includes(curr.id)) {
      acc.push(curr);
    }
    return acc;
  }, []);
}
console.log(getSpeciesByIds(
  '0938aa23-f153-4937-9f88-4858b24d6bce',
  'e8481c1d-42ea-4610-8e11-1752cfc05a46',
));

module.exports = getSpeciesByIds;
