const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(a) {
	let total = 0;
  for (arg of a) {
    total += arg;
  }
  return total;
};

const multiply = function(a) {
  total = 1;
  for (arg of a) {
    total *= arg;
  }
  return total;
};

const power = function(a, b) {
	return a ** b;
};

const factorial = function(a) {
	let total = 1;
  for (let i = 2; i <= a; i++) {
    total *= i;
  }
  return total;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
