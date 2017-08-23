const _ = require('ramda');
const selectOption = require('../selectOption');

const defaultValue = () => () => 0;
const add = op2 => op1 => op1 + op2;
const sub = op2 => op1 => op1 - op2;
const percentage = op2 => op1 => (op1 * op2) / 100;
const mod = op2 => op1 => op1 % op2;
const subPerc = op2 => op1 => _.compose(sub, percentage(op2))(op1)(op1);

const buildSimpleCalculator = () => {
  const options = {};
  options['+'] = add;
  options['-'] = sub;
  options['%'] = percentage;
  options['-%'] = subPerc;
  return options;
};

const buildProgrammerCalculator = () => {
  const options = buildSimpleCalculator();
  options['%'] = mod;
  return options;
};


const compute = calc => operand => selectOption(calc)(defaultValue)(operand);

const computeStd = compute(buildSimpleCalculator());
const computePrg = compute(buildProgrammerCalculator());

const computeCustom = customCalc => compute(customCalc);

module.exports = {
  selectOption,
  buildSimpleCalculator,
  buildProgrammerCalculator,
  computeStd,
  computePrg,
  computeCustom,
};
