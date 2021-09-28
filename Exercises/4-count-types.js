'use strict';

const arr = [1, 'jssucks', false, true, 'car', 1918, 25, 'memes', false];
const countTypesInArray = (array) => {
  const vocabulary = ({});
  for (const data of array) {
    const type = typeof data;
    vocabulary[type] ? vocabulary[type]++ : vocabulary[type] = 1;
  }
  return vocabulary;
};

console.log(countTypesInArray(arr));

module.exports = { countTypesInArray };
