const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

const forecast = (latitude, longitude, callback) => {
  const url = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY_WEATHERSTACK}&query=${latitude},${longitude}&units=m`;

  request(
    { url, json: true },
    (error, { body: { error: bodyError, current } }) => {
      if (error) {
        callback("Unable to connect to location services!", undefined);
      } else if (bodyError) {
        callback("Unable to find location. Try another search", undefined);
      } else {
        const { temperature, feelslike } = current;

        callback(
          undefined,
          `The temperature is currently: ${temperature}C and it feels like: ${feelslike}C`
        );
      }
    }
  );
};

module.exports = forecast;
