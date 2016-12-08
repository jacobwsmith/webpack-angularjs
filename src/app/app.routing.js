routes.$inject = ['$locationProvider', '$urlRouterProvider', '$stateProvider'];

export default function routes($locationProvider, $urlRouterProvider, $stateProvider) {

    $locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/error');

    // An array of state definitions
    var states = [
        { name: 'overview', url: '/', component: 'overviewComponent' },
        {
            name: 'error',
            url: '/error',
            template: '<error-component></error-component>',
            resolve: {
                loadTestComponent: ($q, $ocLazyLoad) => {
                    return $q((resolve) => {
                        // webpack require ensure
                        require.ensure([], () => {
                            let module = require('./+error/error.module.js');
                            $ocLazyLoad.load({ name: module.default.name });
                            resolve(module.default.component);
                        });
                    });
                }
            }
        },
        { name: 'styles', url: '/styles', component: 'stylesComponent' },
        { name: 'type', url: '/styles/type', component: 'typeComponent' },
        { name: 'grid', url: '/styles/grid', component: 'gridComponent' },
        { name: 'buttons', url: '/styles/buttons', component: 'buttonsComponent' },
        { name: 'tables', url: '/styles/tables', component: 'tablesComponent' },
        { name: 'forms', url: '/styles/forms', component: 'formsComponent' },
        { name: 'modals', url: '/styles/modals', component: 'modalsComponent' }
    ]
    // Loop over the state definitions and register them
    states.forEach(function (state) {
        $stateProvider.state(state);
    });

    
}