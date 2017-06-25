/*!
  gaad-widget.js | © 2017 Nick Freear | License: MIT | NOT an official widget!

  https://github.com/nfreear/gaad-widget
  http://globalaccessibilityawarenessday.org
*/

'use strict';

var VERSION = '3.1.0-beta'; // <Auto>

var TRANSLATE_TEXTS = {
  en: require('./locales/en'),
  fr: require('./locales/fr')
};
var GAAD_DATE_LOOKUP = require('./data/gaad-dates.min.json');
// console.log(GAAD_DATE_LOOKUP);
var DEFAULTS = require('./src/configure').config(TRANSLATE_TEXTS, GAAD_DATE_LOOKUP, VERSION);
var METHODS = require('./src/methods');

require('./src/widget-src').run(DEFAULTS, METHODS);
