require('dotenv').config();
const request = require('request');

const API_KEY = process.env.MAPS_API_KEY;

let getAddress = ((address) => {
    let encodeAddress = encodeURIComponent(address);
    return new Promise((resolve, reject) => {
        request({
            url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${API_KEY}`,
            json: true
        }, (error, response, body) => {
            if(error) {
                reject('Unable to connect to Google API')
            }
            if(body.status === 'ZERO_RESULT') {
                reject('unable to find that address!')
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                })
            }
        })
    })
})

getAddress('semarang')
.then(res => {
    console.log(JSON.stringify(res, undefined, 2))
})
.catch(error => {
    console.log(error)
})