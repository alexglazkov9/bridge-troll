'use strict';

const nightMode = require('./night-mode');

// Using Material Icons as inline SVG - https://material.io/icons/

const leaflet = require('leaflet');

// Read contents of SVG files from bundle as Data URLs
const locationSvgUrl = require('../icons/material-icons/location.svg');
const lockedSvgUrl = require('../icons/material-icons/locked.svg');
const unlockedSvgUrl = require('../icons/material-icons/unlocked.svg');
const locationSvgUrlW = require('../icons/material-icons/location_w.svg');
const lockedSvgUrlW = require('../icons/material-icons/locked_w.svg');
const unlockedSvgUrlW = require('../icons/material-icons/unlocked_w.svg');


// All icons share the same size, define it once
const iconSize = [25, 25];

// Expose custom Leaflet Icons to be used in our markers
module.exports.location = leaflet.icon({
  iconUrl: locationSvgUrl,
  iconSize
});

module.exports.locked = leaflet.icon({
  iconUrl: lockedSvgUrl,
  iconSize
});

module.exports.unlocked = leaflet.icon({
  iconUrl: unlockedSvgUrl,
  iconSize
});

module.exports.locationW = leaflet.icon({
  iconUrl: locationSvgUrlW,
  iconSize
});

module.exports.lockedW = leaflet.icon({
  iconUrl: lockedSvgUrlW,
  iconSize
});

module.exports.unlockedW = leaflet.icon({
  iconUrl: unlockedSvgUrlW,
  iconSize
});

/*nightMode.on('setNightMode', () => {
  module.exports.location.iconUrl = locationSvgUrlW;
  module.exports.locked.iconUrl = lockedSvgUrlW;
  module.exports.unlocked.iconUrl = unlockedSvgUrlW;
})*/
