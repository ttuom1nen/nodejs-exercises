const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

const URL_WEATHERSTACK = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY_WEATHERSTACK}&query=61.49911,23.78712&units=m`;
const URL_MAPBOX = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=${process.env.API_KEY_MAPBOX}&limit=1`;

request({ url: URL_WEATHERSTACK, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect the weather service!");
    return;
  }

  if (response.body.hasOwnProperty("error")) {
    console.log(response.body.error.info);
    return;
  }

  const data = response.body.current;
  console.log(
    `The temperature is currently: ${data.temperature}C and it feels like: ${data.feelslike}C`
  );
  console.log(data.weather_descriptions[0]);
});

request({ url: URL_MAPBOX, json: true }, (error, response) => {
  if (error) {
    console.log("Unable to connect the Mapbox api!");
    return;
  }

  if (!response.body.features.length) {
    console.log("Unable to find location!");
    return;
  }

  const latitude = response.body.features[0].center[1];
  const longitude = response.body.features[0].center[0];

  console.log("lat: ", latitude);
  console.log("long: ", longitude);
});
