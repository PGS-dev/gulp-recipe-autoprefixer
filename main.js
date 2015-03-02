'use strict';

module.exports = function ($, config, sources) {
    var _ = $.lodash;

    var conf = _.merge({
        versions: ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 9'],
        order: 100,
        dev: true,
        prod: true
    }, config.autoprefixer);

    var pipeDef = [conf.order, $.lazypipe().pipe($.autoprefixer, conf.versions)];
    return {
        pipes: {
            processCss: conf.prod ? pipeDef : undefined,
            devProcessCss: conf.dev ? pipeDef : undefined
        }
    };
};