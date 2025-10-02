const convertToCelsius = function(temperatureInFahrenheit) {
  // °C = (°F - 32) × 5/9
  const temperatureInCelsius = +((temperatureInFahrenheit - 32) *5/9).toFixed(1);

  return temperatureInCelsius;

};

const convertToFahrenheit = function(temperatureInCelsius) {
  // °F = (°C × 9/5) + 32
  const temperatureInFahrenheit = +((temperatureInCelsius * 9/5) + 32).toFixed(1);

  return temperatureInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
