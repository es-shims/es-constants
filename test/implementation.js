'use strict';

var test = require('tape');
var forEach = require('for-each');

var constants = require('../');

var runTests = require('./tests');

test('implementation', function (t) {
	t.test('constants', function (st) {
		forEach(constants, function (constant) {
			var implementation = require('../' + constant + '/implementation'); // eslint-disable-line global-require

			runTests(implementation, constant, st);
		});

		st.end();
	});

	t.end();
});
