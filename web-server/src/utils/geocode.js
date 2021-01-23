const request = require("request");

const geocode = (address, callback) => {
  const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
    address
  )}.json?access_token=${process.env.API_KEY_MAPBOX}&limit=1`;

  request({ url, json: true }, (error, { body: { features, message } }) => {
    if (error) {
      callback("Unable to connect to location services!", undefined);
    } else if (!features.length) {
      callback(message, undefined);
    } else {
      callback(undefined, {
        latitude: features[0].center[1],
        longitude: features[0].center[0],
        location: features[0].place_name,
      });
    }
  });
};

module.exports = geocode;
