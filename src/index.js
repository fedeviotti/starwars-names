import uniqueRandomArray from 'unique-random-array';
import starwarsNamesList from './starwars-names.json';

const getRandomItem = uniqueRandomArray(starwarsNamesList);

function random(number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}

const starwarsNames = { all: starwarsNamesList, random };

export default starwarsNames;
