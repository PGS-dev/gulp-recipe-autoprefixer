'use strict';

module.exports = function ($, config, sources) {
    var _ = $.lodash;

    var defVersions = ['> 1%', 'last 2 versions', 'Firefox ESR', 'Opera 12.1', 'ie 9'];
    var conf = _.merge({
        order: 100,
        dev: true,
        prod: true
    }, config.autoprefixer);
    conf.versions = conf.versions || defVersions;

    var pipeDef = [conf.order, $.lazypipe().pipe($.autoprefixer, conf.versions)];
    return {
        pipes: {
            processCss: conf.prod ? pipeDef : undefined,
            devProcessCss: conf.dev ? pipeDef : undefined
        }
    };
};