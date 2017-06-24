
// Configure | ©Nick Freear.

var Date = window.Date;
var location = window.location;

module.exports.config = function (TRANSLATE_TEXTS, DATES) {
  'use strict';

  if (typeof Date.today !== 'function') {
    // return console.error('GAAD error: missing dependency, "Datejs"');
  }

  // "...we invite you to help us mark GAAD on the third Thursday of May."
  // ~~  http://globalaccessibilityawarenessday.org/background.html  ~~
  var YEAR = new Date().getFullYear();  // .toLocaleFormat('%Y');
  var GAAD_DATE = DATES.dates[ YEAR ];     // Was: Date.may().third().thursday();
  var GAAD_NEXT = DATES.dates[ YEAR + 1 ]; // Was: Date.today('+1 year').may().third().thursday();

  var defaults = {
    id: 'id-gaad',
    script: 'GAAD.widget.', // .js OR .min.js;
    lang: 'en',
    dir: 'ltr',
    texts: TRANSLATE_TEXTS,
    url: 'http://globalaccessibilityawarenessday.org/?utm_source=github&utm_campaign=gaad-widget',
    days_before: 10,
    days_after: 10,
    embed: false,
    style_url: '/../../style/GAAD.widget.css',
    theme: 'blue', // OR: 'black'
    should_show: null,
    is_before: null,
    xreplace: GAAD_DATE, /* : {
      '{d}': GAAD_DATE.toString('dd'),
      '{th}': GAAD_DATE.toString('S'),
      '{m}': GAAD_DATE.toString('MMMM'),
      '{y}': GAAD_DATE.toString('yyyy')
    }, */
    date: GAAD_DATE,
    date_next: GAAD_NEXT,
    // Was: datefmt: GAAD_DATE.toString('MMMM dS, yyyy'),
    today: new Date(), // Date.now(), // Date.today(),
    xth: YEAR - 2011,  // Date.today().toString('yyyy') - 2011,
    debug: /[?&]debug=1/.test(location.search),
    force: /[?&]gaadwidget=force/i.test(location.search)
  };

  return defaults;
};