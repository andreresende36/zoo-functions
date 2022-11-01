const data = require('../data/zoo_data');

const weekDays = ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'];
const animals = data.species.map((specie) => specie.name);
const validEntries = weekDays.concat(animals);
const { species, hours } = data;

function getAnimalAviability(day) {
  const animalsFiltered = species.filter((animal) => animal.availability.includes(day));
  return animalsFiltered.map((animal) => animal.name);
}
function getOfficeHourExhibition(acc, curr) {
  if (curr !== 'Monday') {
    acc[curr] = {
      officeHour: `Open from ${hours[curr].open}am until ${hours[curr].close}pm`,
      exhibition: getAnimalAviability(curr),
    };
    return acc;
  }
  acc[curr] = {
    officeHour: 'CLOSED',
    exhibition: 'The zoo will be closed!',
  };
  return acc;
}
function getSchedule(scheduleTarget) {
  if (!scheduleTarget || !validEntries.includes(scheduleTarget)) {
    return weekDays.reduce(getOfficeHourExhibition, {});
  }

  if (animals.includes(scheduleTarget)) {
    return species.find((element) => element.name === scheduleTarget).availability;
  }

  return getOfficeHourExhibition({}, scheduleTarget);
}
// console.log(getSchedule());
// console.log(getSchedule('lions'));
// console.log(getSchedule('lions'));
// console.log(getAnimalAviability('Tuesday'));
module.exports = getSchedule;
