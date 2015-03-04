'use strict';

module.exports = function ($, config) {
    var _ = $.lodash;

    var conf = _.merge({
        order: 100,
        dev: true,
        dist: true
    }, config.autoprefixer);
    conf.versions = conf.versions || ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 9'];

    var pipeDef = [conf.order, $.lazypipe().pipe($.autoprefixer, conf.versions)];
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