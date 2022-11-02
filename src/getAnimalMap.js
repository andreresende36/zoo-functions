const data = require('../data/zoo_data');

const { species } = data;
const locationArray = species.reduce((acc, curr) => {
  if (!acc.includes(curr.location)) {
    acc.push(curr.location);
    return acc;
  }
  return acc;
}, []);

function defaultReturn() {
  return locationArray.reduce((acc1, location) => {
    const arraySpeciesByLocation = species.reduce((acc2, specie) => {
      if (specie.location === location) {
        acc2.push(specie.name);
        return acc2;
      }
      return acc2;
    }, []);
    const pass = acc1;
    pass[location] = arraySpeciesByLocation;
    return pass;
  }, {});
}

function sorter(array, sorted) {
  if (sorted) {
    return array.sort();
  }
  return array;
}

function filterNamesBySex(residents, sex, sorted) {
  if (!sex) {
    const arrayResidents = residents.map((element) => element.name);
    return sorter(arrayResidents, sorted);
  }
  const arrayResidents = residents.reduce((acc, curr) => {
    if (curr.sex === sex) {
      acc.push(curr.name);
      return acc;
    }
    return acc;
  }, []);
  return sorter(arrayResidents, sorted);
}

function locationAndNames(sorted, sex) {
  return locationArray.reduce((acc1, location) => {
    const arraySpeciesByLocation = species.reduce((acc2, specie) => {
      if (specie.location === location) {
        acc2.push({ [specie.name]: filterNamesBySex(specie.residents, sex, sorted) });
        return acc2;
      }
      return acc2;
    }, []);
    const pass = acc1;
    pass[location] = arraySpeciesByLocation;
    return pass;
  }, {});
}

function getAnimalMap(options) {
  if (!options || !options.includeNames) {
    return defaultReturn();
  }
  if (options.includeNames) {
    return locationAndNames(options.sorted, options.sex);
  }
}

// console.log(sorter(species[0].residents));
// console.log(filterNamesBySex(species[0].residents));
console.log(getAnimalMap({ includeNames: true, sex: 'female', sorted: true }));
module.exports = getAnimalMap;
