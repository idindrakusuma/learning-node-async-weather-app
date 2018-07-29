/* import the modules */
const request = require('request');
const yargs = require('yargs');

/* import the own modules */
const geocode = require('./geocode/geocode');

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
geocode.address(argv.address);