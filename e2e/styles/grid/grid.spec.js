/* eslint-env node, jasmine, protractor */
describe('Grid', function() {
  
  it('should have a title', function() {
    browser.get('http://localhost:4321/styles/grid');
    expect($('h1').getText()).toBe('Grid');
  });

});