/* eslint-env node, jasmine, protractor */
describe('Tables', function() {
  
  it('should have a title', function() {
    browser.get('http://localhost:4321/styles/tables');
    expect($('h1').getText()).toBe('Tables');
  });

});