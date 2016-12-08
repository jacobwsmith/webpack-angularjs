import modalComponentTemplate from './modal.component.html';

let modalComponent = {
    bindings: {
        resolve: '<',
        close: '&',
        dismiss: '&'
    },
    template: modalComponentTemplate,
    // controller: function ($uibModalInstance, items) {
    controller: function () {
        
        var $ctrl = this;
        // $ctrl.items = items;

        // $ctrl.$onInit = function () {
        //     $ctrl.items = $ctrl.resolve.items;
        //     $ctrl.selected = {
        //         item: $ctrl.items[0]
        //     };
        // };

        $ctrl.ok = function () {
            // $ctrl.close({ $value: $ctrl.selected.item });
            $ctrl.dismiss({ $value: 'cancel' });
        };

        $ctrl.cancel = function () {
            $ctrl.dismiss({ $value: 'cancel' });
        };
    }
};

export default modalComponent;