import uniqueRandomArray from 'unique-random-array';
import starwarsNamesList from './starwars-names.json';

const getRandomItem: () => string = uniqueRandomArray(starwarsNamesList);

function random(number?: number) {
  if (number === undefined) {
    return getRandomItem();
  } else {
    const randomItems: string[] = [];
    for (let i = 0; i < number; i++) {
      randomItems.push(getRandomItem());
    }
    return randomItems;
  }
}

const starwarsNames = { all: starwarsNamesList, random };

export default starwarsNames;
