'use strict';

var define = require('define-properties');

module.exports = function shimHelper(object, property, getPolyfill) {
	return function shim() {
		var polyfill = getPolyfill();
		var o = {};
		o[property] = polyfill;
		var p = {};
		p[property] = function () {
			return object[property] !== polyfill;
		};
		define(object, o, p);
		return polyfill;
	};
};

