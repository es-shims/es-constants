'use strict';

var test = require('tape');
var forEach = require('for-each');
var isArray = require('isarray');

var constants = require('../');

var runTests = require('./tests');

test('index', function (t) {
	t.ok(isArray(constants), 'main export is an array');

	t.test('constants', function (st) {
		forEach(constants, function (constant) {
			var index = require('../' + constant); // eslint-disable-line global-require

			runTests(index, constant, st);
		});

		st.end();
	});

	t.end();
});
