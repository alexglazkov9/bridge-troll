'use strict'

var SunCalc = require('suncalc');
var svgMarker = require('./svg-marker');
const EventEmitter = require('events');
module.exports = new EventEmitter();
/*
var success = (pos) => {
    var position = SunCalc.getPosition(new Date().getDate(), pos.coords.latitude, pos.coords.longitude);
    if(position.altitude < 3.14){
        module.exports.emit('setNightMode');
    }
}

var errorHandler = (error) => {
    console.log(error);
}

var modeChange = () => {
    var pos = navigator.geolocation.getCurrentPosition(success, errorHandler,
    {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 60000
    })
}

setInterval(modeChange, 10000);*/
var mode = 'night';

var changeMode = () => {
    if(mode == 'night'){
        mode = 'day';
    }else{
        mode = 'night';
    }
    module.exports.emit('changed');
}

setInterval(changeMode, 5000);

var getMode = () => {
    return mode;
}
module.exports.getLocationIcon = () => {
    if(getMode() == 'night'){
        return svgMarker.locationW;
    }else{
        return svgMarker.location;
    }
}

module.exports.getLockedIcon = () => {
    if(getMode() == 'night'){
        return svgMarker.lockedW;
    }else{
        return svgMarker.locked;
    }
}

module.exports.getUnlockedIcon = () => {
    if(getMode() == 'night'){
        return svgMarker.unlockedW;
    }else{
        return svgMarker.unlocked;
    }
}