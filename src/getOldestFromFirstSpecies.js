const data = require('../data/zoo_data');

const { species, employees } = data;

function getOldestFromFirstSpecies(id) {
  const firstSpecieId = employees.find((element) => element.id === id).responsibleFor[0];
  const residentsArray = species.find((element) => element.id === firstSpecieId).residents;
  const decreasingAgeArray = residentsArray.sort((a, b) => b.age - a.age);
  return Object.values(decreasingAgeArray[0]);
}

module.exports = getOldestFromFirstSpecies;
