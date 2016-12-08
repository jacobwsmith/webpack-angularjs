/* eslint-env node, jasmine, protractor */
describe('Buttons', function() {
  
  it('should have a title', function() {
    browser.get('http://localhost:4321/styles/buttons');
    expect($('h1').getText()).toBe('Buttons');
  });

});