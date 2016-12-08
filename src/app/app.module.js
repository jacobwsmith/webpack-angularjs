
// Having problems, workaround for now
// import 'font-awesome-sass-loader';
require("style-loader!css-loader!sass-loader!./../../node_modules/font-awesome-sass-loader/font-awesome-sass-styles.loader!./../../node_modules/font-awesome-sass-loader/font-awesome-sass.config.js");

import './../styles/entry.scss';

import angular from 'angular';
import uirouter from 'angular-ui-router';
import oclazyLoad from 'oclazyload';
import modal from 'angular-ui-bootstrap/src/modal';
import angularanimate from 'angular-animate';
import angulartouch from 'angular-touch';

import routing from './app.routing.js';
import appComponent from './app.component.js';
import overviewComponent from './overview/overview.component.js';
import stylesComponent from './styles/styles.component.js';
import typeComponent from './styles/type/type.component.js';
import gridComponent from './styles/grid/grid.component.js';
import buttonsComponent from './styles/buttons/buttons.component.js';
import tablesComponent from './styles/tables/tables.component.js';
import formsComponent from './styles/forms/forms.component.js';
import modalsComponent from './styles/modals/modals.component.js';
import modalComponent from './styles/modals/modal.component.js';

// Define the app
angular.module('app', [uirouter, oclazyLoad, modal, angularanimate, angulartouch])
    .config(routing)
	.component('appComponent', appComponent)
    .component('overviewComponent', overviewComponent)
    .component('stylesComponent', stylesComponent)
    .component('typeComponent', typeComponent)
    .component('gridComponent', gridComponent)
    .component('buttonsComponent', buttonsComponent)
    .component('tablesComponent', tablesComponent)
    .component('formsComponent', formsComponent)
    .component('modalsComponent', modalsComponent)
    .component('modalComponent', modalComponent)

// Bootstrap the app
angular.element(document).ready(function () {
	angular.bootstrap(document, ['app']);
});