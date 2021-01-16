const request = require("request");
const dotenv = require("dotenv");
dotenv.config();

const URL = `http://api.weatherstack.com/current?access_key=${process.env.API_KEY}&query=61.49911,23.78712&units=m`;

request({ url: URL, json: true }, (error, response) => {
  if (error) {
    console.log(error);
    return;
  }

  const data = response.body.current;
  console.log(
    `The temperature is currently: ${data.temperature}C and it feels like: ${data.feelslike}C`
  );
  console.log(data.weather_descriptions[0]);
});
