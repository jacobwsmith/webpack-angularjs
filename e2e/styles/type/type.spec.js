/* eslint-env node, jasmine, protractor */
describe('Tables', function() {
  
  it('should have a title', function() {
    browser.get('http://localhost:4321/styles/type');
    expect($('h1').getText()).toBe('Type');
  });

});