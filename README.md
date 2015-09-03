# shorten-css-hex
[![NPM version](https://badge.fury.io/js/shorten-css-hex.svg)](https://badge.fury.io/js/shorten-css-hex) [![Build Status](https://travis-ci.org/dustinspecker/shorten-css-hex.svg)](https://travis-ci.org/dustinspecker/shorten-css-hex) [![Coverage Status](https://img.shields.io/coveralls/dustinspecker/shorten-css-hex.svg)](https://coveralls.io/r/dustinspecker/shorten-css-hex?branch=master)

[![Code Climate](https://codeclimate.com/github/dustinspecker/shorten-css-hex/badges/gpa.svg)](https://codeclimate.com/github/dustinspecker/shorten-css-hex) [![Dependencies](https://david-dm.org/dustinspecker/shorten-css-hex.svg)](https://david-dm.org/dustinspecker/shorten-css-hex/#info=dependencies&view=table) [![DevDependencies](https://david-dm.org/dustinspecker/shorten-css-hex/dev-status.svg)](https://david-dm.org/dustinspecker/shorten-css-hex/#info=devDependencies&view=table)

> Shorten CSS hex codes

## Install
```
npm install --save shorten-css-hex
```

## Usage
### ES2015
```javascript
import shortenCssHex from 'shorten-css-hex';

shortenCssHex('#000000');
// => '#000'

shortenCssHex('AaBBcC');
// => 'abc'

shortenCssHex('#123456');
// => '#123456'

shortenCssHex('123456');
// => '123456'
```

### ES5
```javascript
var shortenCssHex = require('shorten-css-hex');

shortenCssHex('#000000');
// => '#000'

shortenCssHex('AaBBcC');
// => 'abc'

shortenCssHex('#123456');
// => '#123456'

shortenCssHex('123456');
// => '123456'
```

## LICENSE
MIT © [Dustin Specker](https://github.com/dustinspecker)