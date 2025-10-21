const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(numbers) {
  let total = 0;

  for (const number of numbers) {
    total += number;
  }

	return total;
};

const multiply = function(numbers) {
    let total = 1;

  for (const number of numbers) {
    total *= number;
  }

	return total;

};

const power = function(a, b) {
	return a**b;
};

const factorial = function(number) {
	if (number === 0) return 1;
  return number * factorial(number - 1);
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
