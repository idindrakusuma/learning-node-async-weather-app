const request = require('request');

request({
  url: 'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20philadelphia&key=AIzaSyAidb4dCtEBix8261Rx7Rxlg1_VBFC10ZE',
  json: true
}, (error, response, body) => {
  console.log(body)
});