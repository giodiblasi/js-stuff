const add = (op1, op2) => op1 + op2;
const sub = (op1, op2) => op1 - op2;
const perc = (op1, op2) => (op1 * op2) / 100;
const subPerc = (op1, op2) => sub(op1, perc(op1, op2));

const computeStd = (type, op1, op2) => {
  switch (type) {
    case '+':
      return add(op1, op2);
    case '-':
      return sub(op1, op2);
    case '%':
      return perc(op1, op2);
    case '-%':
      return subPerc(op1, op2);
    default: return 0;
  }
};

const computePrg = (type, op1, op2) => {
  switch (type) {
    case '%' : return op1 % op2;
    // this remove an opeartor
    // case '+' : return 0;
    default: return computeStd(type, op1, op2);
  }
};
module.exports = { computeStd, computePrg };
