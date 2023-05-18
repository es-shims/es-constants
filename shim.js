'use strict';

var shimMath_E = require('./Math.E/shim');
var shimMath_LN10 = require('./Math.LN10/shim');
var shimMath_LN2 = require('./Math.LN2/shim');
var shimMath_LOG10E = require('./Math.LOG10E/shim');
var shimMath_LOG2E = require('./Math.LOG2E/shim');
var shimMath_PI = require('./Math.PI/shim');
var shimMath_SQRT1_2 = require('./Math.SQRT1_2/shim');
var shimMath_SQRT2 = require('./Math.SQRT2/shim');
var shimNumber_EPSILON = require('./Number.EPSILON/shim');
var shimNumber_MAX_SAFE_INTEGER = require('./Number.MAX_SAFE_INTEGER/shim');
var shimNumber_MAX_VALUE = require('./Number.MAX_VALUE/shim');
var shimNumber_MIN_SAFE_INTEGER = require('./Number.MIN_SAFE_INTEGER/shim');
var shimNumber_MIN_VALUE = require('./Number.MIN_VALUE/shim');
var shimNumber_NEGATIVE_INFINITY = require('./Number.NEGATIVE_INFINITY/shim');
var shimNumber_POSITIVE_INFINITY = require('./Number.POSITIVE_INFINITY/shim');

module.exports = function shim() {
	shimMath_E();
	shimMath_LN10();
	shimMath_LN2();
	shimMath_LOG10E();
	shimMath_LOG2E();
	shimMath_PI();
	shimMath_SQRT1_2();
	shimMath_SQRT2();
	shimNumber_EPSILON();
	shimNumber_MAX_SAFE_INTEGER();
	shimNumber_MAX_VALUE();
	shimNumber_MIN_SAFE_INTEGER();
	shimNumber_MIN_VALUE();
	shimNumber_NEGATIVE_INFINITY();
	shimNumber_POSITIVE_INFINITY();
};
