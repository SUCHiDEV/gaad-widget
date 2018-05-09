[![Build status — Travis-CI][travis-icon]][travis]
[![GitLab pipeline status][gitlab-icon]][gitlab]
[![js-semistandard-style][semi-icon]][semi]
[![GAAD-widget on Npmjs][npm-icon]][npm]
[![License][license-icon]][mit]
[![Total downloads ~ NPMJS.com][downl-icon]][npm]
[![Size of Javascript][size-icon]][build]
[![vulnerabilities][snyk-icon]][snyk]
[![Accessibility testing - GAAD passes][pa11y-icon]][pa11y-ci]
<!--[![Browserify][built-icon]][gh]-->


# nfreear/gaad-widget

Display a banner-link to promote [Global Accessibility Awareness Day (GAAD)][gaad].
The banner displays for a configurable period before and after the day.

[![Global Accessibility Awareness Day][gaad-image]][gaad]

> Join us on Thursday, May 18 2017 and mark the sixth Global Accessibility Awareness Day (GAAD).
> The purpose of GAAD is to get everyone talking, thinking and learning about digital
> (web, software, mobile, etc.) access/inclusion and people with different disabilities.

Read the [blog post][blog]. Built on [Datejs][] ([API][datejs-api]).

_Note ~ this is not an official widget!_

[Original Gist][gist].

## Release notes
### Features

 * See the [CHANGELOG][].
 * Download on the [releases page][rel]. (Also, see the [wishlist][].)

## Install and test

```sh
npm i gaad-widget
npm run build
npm test
```

## Usage

Via [unpkg][] — [browse][] — production CDN:

```html
<div id="id-gaad-widget"></div>

<script src="https://unpkg.com/gaad-widget@^3#"></script>
```

Via [RawGit][] — production CDN:

```html
<div id="id-gaad-widget"></div>

<script src="https://cdn.rawgit.com/nfreear/gaad-widget/3.2.1/dist/gaad-widget.js"></script>
```

Local hosting:

```html
<div id="id-gaad-widget"></div>

<script src="dist/gaad-widget.js" ></script>
```

Setting the `days_before` option:

```html
<div id="id-gaad-widget"></div>

<script src="dist/gaad-widget.js" data-gaad-widget='{ "days_before": 20 }'></script>
```

Setting several configuration options:

```html
<div id="custom_id"></div>

<script
  src="dist/gaad-widget.js"
  data-gaad-widget='{ "id": "custom_id", "days_after": 10, "theme": "black", "debug": true }'
  ></script>
```

## Analytics

Anonymous usage statistics via Google Analytics is being added for version `3.2+` (`> 3.1.0`). It will be [enabled][analytics] by default, and can be disabled thus:

```html
<div id="id-gaad-widget"></div>

<script src="dist/gaad-widget.js" data-gaad-widget='{ "analytics": null }'></script>
```

## Translation

[Translations][i18n-code], [#4][i18n].

Français (French):

```html
<div id="id-gaad-widget"></div>

<script src="dist/gaad-widget.js" data-gaad-widget='{ "lang": "fr" }' ></script>
```

## WordPress

A [plugin for WordPress][wp].

## License

License: [MIT][].

Twitter: [@nfreear][], [@gbla11yday][].

_See the related [isad-widget][]._


[blog]: http://nick.freear.org.uk/2017/05/14/gaad-widget.html?utm_source=readme
[GAAD]: http://globalaccessibilityawarenessday.org/?utm_source=github&utm_campaign=gaad-widget
[@gbla11yday]: https://twitter.com/gbla11yday
[@nfreear]: https://twitter.com/nfreear
[@srinivasu..]: http://srinivasu.org "Suggested by @srinivasuchakravarthula"
[gaad-widget]: https://github.com/nfreear/gaad-widget
[gaad-image]: https://github.com/nfreear/gaad-widget/raw/3.x/style/gaad-widget-after.png
[gaad-img-00]: https://github.com/nfreear/gaad-widget/raw/3.x/style/gaad-widget.png
[changelog]: https://github.com/nfreear/gaad-widget/blob/3.x/CHANGELOG.md
[rel]: https://github.com/nfreear/gaad-widget/releases "Release notes / changelog"
[wishlist]: https://github.com/nfreear/gaad-widget/issues/2#!-Wishlist "Bug #2, Wishlist"
[i18n]: https://github.com/nfreear/gaad-widget/issues/4#!-i18n "Bug #4, Translations (v 2.x)"
[i18n-code]: https://github.com/nfreear/gaad-widget/tree/master/locales "Translations, JSON format"
[b/a]: https://github.com/nfreear/gaad-widget/issues/5 "Bug #5, Separate before and after messages (v 2.x)"
[ie]: https://github.com/nfreear/gaad-widget/issues/3#!-MSIE-9-11 "Bug #3, Browser compatibility"
[analytics]: https://github.com/nfreear/gaad-widget/blob/3.x/src/configure.js#L36-L40
    "Analytics configuration, JS code"
[gist]: https://gist.github.com/nfreear/eef4be96147cb5c1182cbc9e595f2833
[wp]: https://gist.github.com/nfreear/e5520adbb930e537ef5fe2e0aab231d1 "WordPress plugin (PHP)"
[Datejs]: https://npmjs.com/package/datejs "Thanks: @abritinthebay"
[Datejs-api]: https://github.com/datejs/Datejs#example-usage "API only (legacy code-base)"
[RawGit]: https://rawgit.com/
    "RawGit serves Git files with the correct mime-type; a content delivery network (CDN)"
[unpkg]: https://unpkg.com/ "unpkg is a fast content delivery network for everything on npm"
[browse]: https://unpkg.com/gaad-widget@^3/ "Browse the most recent version on Unpkg.com"
[MIT]: https://nfreear.mit-license.org/2017-2018#!-gaad-widget "MIT License | © Nick Freear, 2017-04-27, 2018"
[mit-txt]: https://nfreear.mit-license.org/2017-2018/license.txt "MIT License | © Nick Freear"
[travis]: https://travis-ci.org/nfreear/gaad-widget
[travis-icon]: https://api.travis-ci.org/nfreear/gaad-widget.svg
    "Build status – Travis-CI (NPM/eslint)"
[semi]: https://github.com/Flet/semistandard
[semi-icon]: https://img.shields.io/badge/code%20style-semistandard-brightgreen.svg?style=flat-square
    "Javascript coding style — 'semistandard'"
[npm]: https://npmjs.com/package/gaad-widget
[npm-icon]: https://img.shields.io/npm/v/gaad-widget.svg
[license-icon]: https://img.shields.io/npm/l/gaad-widget.svg
[downl-icon]: https://img.shields.io/npm/dt/gaad-widget.svg "Count of total downloads ~NPM"
[size-icon]: https://img.shields.io/github/size/nfreear/gaad-widget/dist/gaad-widget.js.svg
    "Size of built Javascript, kilo-bytes (kB) ~ on GitHub"
[built-icon]: https://img.shields.io/badge/built_with-browserify-blue.svg
    "Built with Browserify"
[build]: https://github.com/nfreear/gaad-widget/tree/3.x/dist
[Browserify]: http://browserify.org/
    "Browserify lets you require('modules') in the browser by bundling your dependencies."
[snyk]: https://snyk.io/test/npm/gaad-widget "Vulnerability count ~ via Snyk"
[snyk-icon]: https://snyk.io/test/npm/gaad-widget/badge.svg
[pa11y-ci]: https://github.com/pa11y/pa11y-ci
    "Automated accessibility testing - via 'pa11y-ci'"
[pa11y-icon]: https://img.shields.io/badge/accessibility-pa11y--ci-blue.svg
[wcag-icon]: https://img.shields.io/badge/accessibility-WCAG_2.0_AAA-green.svg
[gitlab-icon]: https://gitlab.com/nfreear/gaad-widget/badges/3.x/pipeline.svg
[gitlab-co]: https://gitlab.com/nfreear/gaad-widget/commits/3.x
[gitlab]: https://gitlab.com/nfreear/gaad-widget/pipelines "GitLab pipeline status"

[isad-widget]: https://github.com/nfreear/isad-widget
    "banner-link for International Stuttering Awareness Day (ISAD)"

[End]: //.
