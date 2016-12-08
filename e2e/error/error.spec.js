/* eslint-env node, jasmine, protractor */
describe('Error', function() {
  
  it('should have a title', function() {
    browser.get('http://localhost:4321/foo');
    expect($('h1').getText()).toBe('Error');
  });

});