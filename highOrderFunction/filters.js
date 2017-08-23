const removeFourDigitsWords = (words) => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i += 1) {
    const word = words[i];
    if (word.length !== 4) filtered.push(word);
  }

  return filtered;
};
const filterStartWithS = (words) => {
  const filtered = [];
  for (let i = 0, { length } = words; i < length; i += 1) {
    const word = words[i];
    if (word[0] === 's') filtered.push(word);
  }

  return filtered;
};

module.exports = { removeFourDigitsWords, filterStartWithS };
