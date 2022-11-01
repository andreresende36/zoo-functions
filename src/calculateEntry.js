const data = require('../data/zoo_data');

// const entrants = [
//   { name: 'Lara Carvalho', age: 5 },
//   { name: 'Frederico Moreira', age: 5 },
//   { name: 'Pedro Henrique Carvalho', age: 5 },
//   { name: 'Maria Costa', age: 18 },
//   { name: 'Núbia Souza', age: 18 },
//   { name: 'Carlos Nogueira', age: 50 },
// ];

function countEntrants(array) {
  const countChild = array.filter((entrant) => entrant.age < 18).length;
  const countAdult = array.filter((entrant) => entrant.age >= 18 && entrant.age < 50).length;
  const countSenior = array.filter((entrant) => entrant.age >= 50).length;
  return { child: countChild, adult: countAdult, senior: countSenior };
}

function calculateEntry(array) {
  if (!array || !array.length) {
    return 0;
  }
  const entrantsCount = countEntrants(array);
  const { prices } = data;
  const entriesChild = entrantsCount.child * prices.child;
  const entriesAdult = entrantsCount.adult * prices.adult;
  const entriesSenior = entrantsCount.senior * prices.senior;
  return entriesChild + entriesAdult + entriesSenior;
}

// console.log(countEntrants(entrants));
// console.log(calculateEntry(entrants));
module.exports = { calculateEntry, countEntrants };
