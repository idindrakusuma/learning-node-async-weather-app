const request = require('request');
require('dotenv').config();

let getWeather = (latitude, longitude, callback) => {
  request({
    url: `https://api.darksky.net/forecast/${process.env.FORECAST_API_KEY}/${latitude},${longitude}`,
    json: true
  }, (error, response, body) => {
    if(error) {
      callback('Unable to connect to Darksky API');
    } else if (response.statusCode === 400) {
      callback('Unable to fetch the weather!');
    } else if (response.statusCode === 200) {
      callback(undefined, {
        currentlyTemperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    }
  });
}

module.exports = {
  getWeather
}