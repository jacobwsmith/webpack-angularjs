/* eslint-env node, jasmine, protractor */
describe('Overview', function() {
  
  it('should have a title', function() {
    browser.get('http://localhost:4321');
    expect($('h1').getText()).toBe('Overview');
  });

});