/* eslint-env node, jasmine, protractor */
describe('Forms', function() {
  
  it('should have a title', function() {
    browser.get('http://localhost:4321/styles/forms');
    expect($('h1').getText()).toBe('Forms');
  });

});