/* import the modules */
const yargs = require('yargs');
const axios = require('axios');
require('dotenv').config();

const MAPS_API_KEY = process.env.MAPS_API_KEY;
const MAPS_HOST = 'https://maps.googleapis.com/maps/api/geocode/json?'
const FORECAST_API_KEY = process.env.FORECAST_API_KEY;
const FORECAST_HOST = 'https://api.darksky.net/forecast/'

/* Set the yargs option */
const argv = yargs
  .options({
    address: {
      describe: 'Input your address',
      alias: 'a',
      demand: true,
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

/* Make request with axios */
axios.get(`${MAPS_HOST}address=${argv.address}&key=${MAPS_API_KEY}`)
    .then(res => {
        let get = res.data.results[0];
        console.log('-----');
        console.log('Location: ', get.formatted_address);
        /* make request weather */
        return axios.get(`${FORECAST_HOST}${FORECAST_API_KEY}/${get.geometry.location.lat}, ${get.geometry.location.lng}`)
    })
    .then(weather => {
        let get = weather.data.currently;
        console.log(`The weather is ${get.summary} at Temperature ${get.temperature} but it's like ${get.apparentTemperature}`);
    })
    .catch(error => {
        console.log(error)
    })
