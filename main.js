'use strict';

/**
 * Css transforming with autoprefixer.
 * Connects to css transforming hooks.
 * Works well with recipes like [gulp-recipe-sass](https://github.com/PGS-dev/gulp-recipe-sass) or [gulp-recipe-css](https://github.com/PGS-dev/gulp-recipe-css).
 */
module.exports = function ($, config) {
    var _ = $.lodash;

    var order = config.order.autoprefixer;
    if(_.isUndefined(order)) {
        order = 100;
    }

    var conf = _.merge({
        dev: true,
        dist: true
    }, config.autoprefixer);
    conf.versions = conf.versions || ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 9'];

    var pipeDef = [order, $.lazypipe().pipe($.autoprefixer, conf.versions)];
    return {
        pipes: {
            /**
             * @hooks pipes.processCss*
             * @hooks pipes.devProcessCss*
             */
            processCss: conf.dist ? pipeDef : undefined,
            devProcessCss: conf.dev ? pipeDef : undefined
        }
    };
};