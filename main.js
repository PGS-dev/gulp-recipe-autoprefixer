'use strict';

/**
 * Css transforming with autoprefixer.
 * Connects to css transforming hooks.
 * Works well with recipes like [gulp-recipe-sass](https://github.com/PGS-dev/gulp-recipe-sass) or [gulp-recipe-css](https://github.com/PGS-dev/gulp-recipe-css).
 */
module.exports = {
    configReader: function ($, config) {
        var _ = $.lodash;

        if(_.isUndefined(config.order.autoprefixer)) {
            config.order.autoprefixer = 100;
        }

        var conf = _.merge({
            dev: true,
            dist: true
        }, config.autoprefixer);

        conf.versions = conf.versions || ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 9'];
        config.autoprefixer = conf;
        return config;
    },
    recipe: function ($, config) {
        var pipeDef = [config.order.autoprefixer, $.lazypipe().pipe($.autoprefixer, config.autoprefixer.versions)];
        return {
            pipes: {
                /**
                 * @hooks pipes.processCss*
                 * @hooks pipes.devProcessCss*
                 */
                processCss: config.autoprefixer.dist ? pipeDef : undefined,
                devProcessCss: config.autoprefixer.dev ? pipeDef : undefined
            }
        };
    }
};