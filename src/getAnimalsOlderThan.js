const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const specieObject = data.species.find((element) => element.name === animal);
  return specieObject.residents.every((element) => element.age >= age);
}
console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
