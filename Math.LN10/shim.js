'use strict';

var shimHelper = require('../helpers/shim');
var getPolyfill = require('./polyfill');

module.exports = shimHelper(Math, 'LN10', getPolyfill);
