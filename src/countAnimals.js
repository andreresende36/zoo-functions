const data = require('../data/zoo_data');

const { species } = data;
function countAnimals(object) {
  if (!object) {
    return species.reduce((acc, curr) => {
      acc[curr.name] = curr.residents.length;
      return acc;
    }, {});
  }
  const specieToCount = species.find((specie) => specie.name === object.specie);
  if (object.sex === undefined) {
    return specieToCount.residents.length;
  }
  return specieToCount.residents.filter((resident) => resident.sex === object.sex).length;
}

// console.log(countAnimals());
// console.log(countAnimals({ specie: 'penguins' }));
console.log(countAnimals({ specie: 'giraffes', sex: 'female' }));

module.exports = countAnimals;
