const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
	return numbers.reduce((total, number) => total + number, 0);
};

const multiply = function(numbers) {
  return numbers.reduce((total, number) => total * number, 1);
};

const power = function(a , b) {
	return a ** b;
};

const factorial = function(x) {
	if(x === 0 || x === 1) return 1;
  let factorial = 1;
  for(let i = x; i > 0; i--){
    factorial *= i;
  }
  return factorial;
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
