const request = require('request');
require('dotenv').config()

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=' + process.env.API_KEY,
  json: true
}, (error, response, body) => {
  console.log(body)
});