/* eslint-env node, jasmine */
/* global angular */

import buttonsComponent from './buttons.component.js';

describe('buttons.component', function () {

    describe('template', function () {
        let $scope;
        let $element;

        beforeEach(() => {
            angular.module('test', []).component('buttonsComponent', buttonsComponent);
            angular.mock.module('test');
        });

        beforeEach(angular.mock.inject($injector => {
            $scope = $injector.get('$rootScope').$new(true);
            $element = $injector.get('$compile')(angular.element('<buttons-component><buttons-component>'))($scope);
            $scope.$digest();
        }));

        it('should pass smoke test', () => {
            expect(true).toBeTruthy();         
        });

        it('should have a title', () => {
            expect($element.find('h1').text()).toBe('Buttons');
        });

    });

});