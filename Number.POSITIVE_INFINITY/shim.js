'use strict';

var shimHelper = require('../helpers/shim');
var getPolyfill = require('./polyfill');

module.exports = shimHelper(Number, 'POSITIVE_INFINITY', getPolyfill);
