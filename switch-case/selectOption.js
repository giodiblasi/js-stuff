const selectOption = options => defaultValue => key =>
  (key in options ? options[key] : defaultValue);

module.exports = selectOption;
