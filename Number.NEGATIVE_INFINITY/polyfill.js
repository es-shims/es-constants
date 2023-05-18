'use strict';

var implementation = require('./implementation');

module.exports = function polyfill() {
	return implementation;
};
