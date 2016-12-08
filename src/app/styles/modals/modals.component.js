import template from './modals.component.html';

class controller {
	constructor($uibModal) {
		"ngInject";

		this.$uibModal = $uibModal;
		this.title = 'Modal';
		this.items = ['item1', 'item2', 'item3']
	}

	open() {
		var self = this;
		var modalInstance = this.$uibModal.open({
			animation: true,
			component: 'modalComponent',
			resolve: {
				items: function () {
					return self.items;
				}
			}
		});

		modalInstance.result.then(function (selectedItem) {
			this.selected = selectedItem;
		}, function () {
			// $log.info('modal-component dismissed at: ' + new Date());
			// console.log('modal-component dismissed at: ' + new Date());
		});
	}
}

export default {
	controller,
	template,
};