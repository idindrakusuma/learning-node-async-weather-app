/* import the modules */
const yargs = require('yargs');

/* import the own modules */
const geocode = require('./geocode');
const weather = require('./weather')

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

/* Execute the the address */
geocode.address(argv.address, (error, result) => {
  if(error) {
    console.log(error)
  } else {
    console.log('---------');
    console.log(`Place: ${result.address}`);
    /* successfuly get longitute and latitude? */
    weather.getWeather(result.location_lat, result.location_lng, (errorMessage, weather) => {
      if(errorMessage) {
        /* Print the error! */
        console.log(errorMessage) 
      } else {
        console.log(`It's currently ${weather.currentlyTemperature} but it's feels like ${weather.apparentTemperature}`);
      }
    });
  }
});