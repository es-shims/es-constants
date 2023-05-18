# es-constants <sup>[![Version Badge][npm-version-svg]][package-url]</sup>

[![github actions][actions-image]][actions-url]
[![coverage][codecov-image]][codecov-url]
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

[![npm badge][npm-badge-png]][package-url]

An ES-spec-compliant shim/polyfill/replacement for JS language Math and Number constant values that works as far down as ES3.

This package implements the [es-shim API](https://github.com/es-shims/api) “multi” interface. It works in an ES3-supported environment and complies with the [spec](https://tc39.es/ecma262).

The main export of the package itself is simply an array of the available directory names. It’s sole intended use is for build tooling and testing.

## Supported methods

 - [`Math.E`](https://tc39.es/ecma262/#sec-math.e)
 - [`Math.LN10`](https://tc39.es/ecma262/#sec-math.ln10)
 - [`Math.LN2`](https://tc39.es/ecma262/#sec-math.ln2)
 - [`Math.LOG10E`](https://tc39.es/ecma262/#sec-math.log10e)
 - [`Math.LOG2E`](https://tc39.es/ecma262/#sec-math.log2e)
 - [`Math.PI`](https://tc39.es/ecma262/#sec-math.pi)
 - [`Math.SQRT1_2`](https://tc39.es/ecma262/#sec-math.sqrt1_2)
 - [`Math.SQRT2`](https://tc39.es/ecma262/#sec-math.sqrt2)
 - [`Number.EPSILON`](https://tc39.es/ecma262/#sec-number.epsilon)
 - [`Number.MAX_SAFE_INTEGER`](https://tc39.es/ecma262/#sec-number.max_safe_integer)
 - [`Number.MAX_VALUE`](https://tc39.es/ecma262/#sec-number.max_value)
 - [`Number.MIN_SAFE_INTEGER`](https://tc39.es/ecma262/#sec-number.min_safe_integer)
 - [`Number.MIN_VALUE`](https://tc39.es/ecma262/#sec-number.min_value)
 - [`Number.NEGATIVE_INFINITY`](https://tc39.es/ecma262/#sec-number.negative_infinity)
 - [`Number.POSITIVE_INFINITY`](https://tc39.es/ecma262/#sec-number.positive_infinity)

## Getting started

```sh
npm install --save es-constants
```

## Usage/Examples

```js

var assert = require('assert');

```

```js
require('./auto'); // shim all of the constants

require('./Number.MAX_VALUE/auto'); // shim the Number.MAX_VALUE constant
```

## Tests
Simply clone the repo, `npm install`, and run `npm test`

[package-url]: https://npmjs.org/package/es-constants
[npm-version-svg]: https://versionbadg.es/es-shims/es-constants.svg
[deps-svg]: https://david-dm.org/es-shims/es-constants.svg
[deps-url]: https://david-dm.org/es-shims/es-constants
[dev-deps-svg]: https://david-dm.org/es-shims/es-constants/dev-status.svg
[dev-deps-url]: https://david-dm.org/es-shims/es-constants#info=devDependencies
[npm-badge-png]: https://nodei.co/npm/es-constants.png?downloads=true&stars=true
[license-image]: https://img.shields.io/npm/l/es-constants.svg
[license-url]: LICENSE
[downloads-image]: https://img.shields.io/npm/dm/es-constants.svg
[downloads-url]: https://npm-stat.com/charts.html?package=es-constants
[codecov-image]: https://codecov.io/gh/es-shims/es-constants/branch/main/graphs/badge.svg
[codecov-url]: https://app.codecov.io/gh/es-shims/es-constants/
[actions-image]: https://img.shields.io/endpoint?url=https://github-actions-badge-u3jn4tfpocch.runkit.sh/es-shims/es-constants
[actions-url]: https://github.com/es-shims/es-constants/actions
