const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const sum = function(numbers) {
	let sum = 0;
  for(number of numbers) {
    sum += number;
  }
  return sum;
};

const multiply = function(numbers) {
  let multiplication = 1;
  for(number of numbers) {
    multiplication *= number;
  }
  return multiplication;
};

const power = function(a , b) {
	return a ** b;
};

const factorial = function(x) {
	if(x === 0 || x === 1) return 1;
  let factorial = 1;
  for(x; x > 0; x--){
    factorial *= x;
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
