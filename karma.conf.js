// UNIT TESTS
// const webpack = require('webpack');
const webpackEnv = { test: true };
const webpackConfig = require('./webpack.config.js')(webpackEnv);
const testGlob = './src/app/**/*.spec.js';
const srcGlob = './src/app/**/*!(spec|stub).js';

// Set the environment
process.env.BABEL_ENV = 'test';

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            './node_modules/angular/angular.js',
            './node_modules/angular-mocks/angular-mocks.js',
            testGlob,
            srcGlob
        ],
        preprocessors: {
            [testGlob]: ['webpack'],
            [srcGlob]: ['webpack']
        },
        webpack: webpackConfig,
        webpackMiddleware: { noInfo: true },
        exclude: [
            './src/app/app.module.js' // Removing the app's entry point from the tests
        ],
        reporters: ['progress', 'coverage'],
        coverageReporter: {
            reporters: [
                { type: 'lcov', dir: 'coverage/', subdir: '.' },
                { type: 'json', dir: 'coverage/', subdir: '.' },
                { type: 'text-summary' },
            ],
        },
        autoWatch: false,
        browsers: ['Firefox'],
        plugins: [
            'karma-jasmine',
            'karma-firefox-launcher',
            'karma-webpack',
            'karma-coverage'
        ],
        singleRun: true,
        concurrency: Infinity
    });
};


// var path = require('path');
// var webpackConfig = require('./../../webpack.config.js');
// var entry = path.resolve(webpackConfig.context, webpackConfig.entry); //accessing [0] because there are mutli entry points for webpack hot loader
// var preprocessors = {}; 
// preprocessors[entry] = ['webpack'];
// preprocessors['**/*.html'] = ['ng-html2js'];

// module.exports = function(config) {
//   config.set({

//     // base path that will be used to resolve all patterns (eg. files, exclude)
//     basePath: '',

//     // frameworks to use
//     // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
//     frameworks: ['mocha', 'chai'],

//     // list of files / patterns to load in the browser
//     files: [entry],
//     webpack: webpackConfig,

//     // list of files to exclude
//     exclude: [],

//     // test results reporter to use
//     // possible values: 'dots', 'progress'
//     // available reporters: https://npmjs.org/browse/keyword/karma-reporter
//     reporters: ['progress'],

//     preprocessors: preprocessors,

//     // web server port
//     port: 9876,

//     // enable / disable colors in the output (reporters and logs)
//     colors: true,

//     // level of logging
//     // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
//     logLevel: config.LOG_INFO,


//     // enable / disable watching file and executing tests whenever any file changes
//     autoWatch: true,

//     ngHtml2JsPreprocessor: { 
//         stripPrefix: 'app/components/', 
//         moduleName: 'my.templates' 
//     },

//     reporters: ['mocha'],

//     // start these browsers
//     // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
//     browsers: ['Chrome'],

//     // Continuous Integration mode
//     // if true, Karma captures browsers, runs the tests and exits
//     singleRun: false,

//     plugins: [
//         require('karma-webpack'),
//         'karma-chai',
//         'karma-mocha',
//         'karma-chrome-launcher',
//         'karma-ng-html2js-preprocessor',
//         'karma-mocha-reporter'
//     ]

//   });
// }