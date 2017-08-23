// this is an Hogh Order Function beacuse it take a function as arguments
const filter = predicate => (items) => {
  const filtered = [];
  for (let i = 0, { length } = items; i < length; i += 1) {
    const item = items[i];
    if (predicate(item)) filtered.push(item);
  }
  return filtered;
};

const removeFourDigitsWords = filter(word => word.length !== 4);
const filterStartWithS = filter(word => word[0] === 's');

// I can reuse filter with array of different data types

const filterDigit = filter(item => Number.isInteger(item));
const filterEvenDigit = filter(item => item % 2 === 0);


module.exports = { removeFourDigitsWords, filterStartWithS, filterEvenDigit, filterDigit };
