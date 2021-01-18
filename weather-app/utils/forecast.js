const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY_WEATHERSTACK}&query=${latitude},${longitude}&units=m`;

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (response.body.error) {
      callback("Unable to find location. Try another search", undefined);
    } else {
      const data = response.body.current;

      callback(
        undefined,
        `The temperature is currently: ${data.temperature}C and it feels like: ${data.feelslike}C`
      );
    }
  });
};

module.exports = forecast;
