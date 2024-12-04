const convertToCelsius = function(temperatureInFahrenheit) {
  let temperatureInCelsius;
  temperatureInCelsius = (temperatureInFahrenheit - 32) * 5 / 9;
  temperatureInCelsius = temperatureInCelsius.toFixed(1);
  temperatureInCelsius = parseFloat(temperatureInCelsius);
  return temperatureInCelsius;
};

const convertToFahrenheit = function(temperatureInCelsius) {
  let temperatureInFahrenheit;
  temperatureInFahrenheit = temperatureInCelsius * 9 / 5 + 32;
  temperatureInFahrenheit = temperatureInFahrenheit.toFixed(1);
  temperatureInFahrenheit = parseFloat(temperatureInFahrenheit);
  return temperatureInFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
