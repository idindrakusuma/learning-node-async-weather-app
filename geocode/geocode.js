/* import the modules */
require('dotenv').config();
const request = require('request');

const API_HOST = process.env.API_HOST;
const API_KEY = process.env.API_KEY;

let address = (addr, callback) => {
  /* Encode the URI */
  let encodeAddress = encodeURIComponent(addr);
  /* GET REQUEST */
  request({
    url: `${API_HOST}address=${encodeAddress}&key=${API_KEY}`,
    json: true
  }, (error, response, body) => {
    /* can connect to server? */
    if(error) {
      callback('Unable to connect to Google Maps API');
    } 
    /* is success result? */
    if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address!');
    }
    /* is Success? */
    else if (body.status === 'OK') {
      let data = body.results[0];
      callback(undefined, {
        address: data.formatted_address,
        location_lat: data.geometry.location.lat,
        location_lng: data.geometry.location.lng
      })
    }
  });
};

module.exports = {
  address
}