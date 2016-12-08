/* eslint-env node, jasmine */
/* global angular */

import appComponent from './app.component.js';

describe('app.component', function () {

    describe('controller', function () {
        let ctrl;

        beforeEach(function () {
            ctrl = new appComponent.controller();
        });

        it('should pass smoke test', () => {
            expect(true).toBe(true);
        });

        it('should have a togglable opened flag for the nav', () => {
            expect(ctrl.isOpened).toBeDefined();
            expect(ctrl.open).toBeDefined();
            expect(ctrl.close).toBeDefined();
            expect(ctrl.isOpened).toBe(false);
            ctrl.open();
            expect(ctrl.isOpened).toBe(true);
            ctrl.close();
            expect(ctrl.isOpened).toBe(false);
        });
    });

    describe('template', function () {
        let $scope;
        let $element;

        beforeEach(() => {
            angular.module('test', []).component('appComponent', appComponent);
            angular.mock.module('test');
        });

        beforeEach(angular.mock.inject($injector => {
            $scope = $injector.get('$rootScope').$new(true);
            $element = $injector.get('$compile')(angular.element('<app-component><app-component>'))($scope);
            $scope.$digest();
        }));

        it('should pass smoke test', () => {
            expect(true).toBeTruthy();         
        });

        it('should toggle nav', () => {
            // TODO: perhaps a ng-hide/ng-show would be better?...
            // so we are not relying on a custom style
            var nav = angular.element($element[0].querySelector('.guide__nav'));
            var icon = angular.element($element[0].querySelector('.guide__menu__icon'));
            expect(nav.hasClass('guide__nav-show')).toBe(false);
            icon.triggerHandler('click');
            $scope.$digest();
            expect(nav.hasClass('guide__nav-show')).toBe(true);
            nav.triggerHandler('click');
            $scope.$digest();
            expect(nav.hasClass('guide__nav-show')).toBe(false);
        });

    });

});