'use strict';

// Support log levels, see https://www.npmjs.com/package/loglevel#documentation
const log = require('loglevel');
const config = require('./config');

// Users can override with log.setLevel('warn') or the 'debug', 'error', etc.
// This is just the default if nothing is passed to us.
log.setDefaultLevel('silent');

// Support setting logging level via the query string ?loglevel=warn (or debug, error, info)
if (config.loglevel) {
  log.setLevel(config.loglevel, false);
}

module.exports = log;
