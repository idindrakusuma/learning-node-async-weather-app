/* import the modules */
require('dotenv').config();
const request = require('request');

const API_HOST = process.env.API_HOST;
const API_KEY = process.env.API_KEY;

let address = (addr) => {
  /* Encode the URI */
  let encodeAddress = encodeURIComponent(addr);
  
  /* GET REQUEST */
  request({
    url: `${API_HOST}address=${encodeAddress}&key=${API_KEY}`,
    json: true
  }, (error, response, body) => {
    /* can connect to server? */
    if(error) {
      return console.log('Unable to connect to Google Maps API');
    } 
    /* is success result? */
    if (body.status === 'ZERO_RESULTS') {
      return console.log('Address not found!');
    }
    /* is Success? */
    else if (body.status === 'OK') {
      let data = body.results[0];
      console.log(`Address: ${data.formatted_address}`);
      console.log(`Location Lat: ${data.geometry.location.lat}`);
      console.log(`Location Lng: ${data.geometry.location.lng}`);
      return
    }
  });
};

module.exports = {
  address
}