'use strict';

require('../auto');

var test = require('tape');
var forEach = require('for-each');
var defineProperties = require('define-properties');
var isEnumerable = Object.prototype.propertyIsEnumerable;

var constants = require('../');
var runTests = require('./tests');

var objects = {
	__proto__: null,
	Math: Math,
	Number: Number
};

forEach(constants, function (constant) {
	test(constant + ': shimmed', function (t) {
		var pair = constant.split('.');
		var object = pair[0];
		var property = pair[1];

		t.test('enumerability', { skip: !defineProperties.supportsDescriptors }, function (et) {
			et.equal(false, isEnumerable.call(object, property), constant + ' is not enumerable');
			et.end();
		});

		var value = objects[object][property];

		runTests(value, constant, t);

		t.test('comparison', function (ct) {
			var polyfill = require('../' + constant + '/polyfill')(); // eslint-disable-line global-require

			ct.equal(polyfill, value, 'polyfill is equal to installed value');
			ct.notOk(polyfill < value, 'polyfill is not < installed value');
			ct.notOk(polyfill > value, 'polyfill is not > installed value');

			ct.equal(String(polyfill), String(value), 'polyfill is stringly equal to installed value');

			ct.end();
		});

		t.end();
	});
});
