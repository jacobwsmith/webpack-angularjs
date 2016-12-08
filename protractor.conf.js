/*
*   http://www.protractortest.org
*
*   Seems you have to have Protractor install globally
*   TODO: is this true?
*
*   `npm install protractor -g `
*   `webdriver-manager update`
*
*/
var fileGlob = './e2e/**/*.spec.js';
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: [fileGlob],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    }
};