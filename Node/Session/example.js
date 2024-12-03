const colorUtils = require('@sarmitha/rgb2hex');

console.log(colorUtils.rgbToHex(255, 0, 0));
console.log(colorUtils.hexToRgb('#00ff00'));

const random = require('number-generator-utils');

console.log(random.getRandomInt(1, 100));
console.log(random.getRandomFloat(1, 10));