# [gulp-recipe](https://github.com/PGS-dev/gulp-recipe-loader)-autoprefixer [![Dependency Status][depstat-image]][depstat-url]
[![NPM][npm-image]][npm-url]

Css transforming with autoprefixer.

Connects to css transforming hooks.
Works well with recipes like [gulp-recipe-sass](https://github.com/PGS-dev/gulp-recipe-sass) or [gulp-recipe-css](https://github.com/PGS-dev/gulp-recipe-css).

## Configuration
### Recipe specific
#### autoprefixer.versions
> default: true
> type: array of strings

Autoprefixer versions configuration, compatible with [browserlist](https://github.com/ai/browserslist).

#### autoprefixer.dev
> default: true
> type: boolean

Perform autoprefixing in dev environment.

#### autoprefixer.dist
> default: true
> type: boolean

Perform autoprefixing in dist environment.

### Order
#### order.autoprefixer
> default: 100
> type: integer

Order of autoprefixing task in css processing sequence.

## Api
### Used Hooks
#### pipes.devProcessCss*

Registers css autoprefixer processing for dev environment.

####  pipes.processCss*

Registers css autoprefixer processing for dist environment.

[npm-url]: https://npmjs.org/package/gulp-recipe-autoprefixer
[npm-image]: https://nodei.co/npm/gulp-recipe-autoprefixer.png?downloads=true

[depstat-url]: https://david-dm.org/PGS-dev/gulp-recipe-autoprefixer
[depstat-image]: http://img.shields.io/david/PGS-dev/gulp-recipe-autoprefixer.svg?style=flat