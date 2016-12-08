import './app.component.scss';
import appComponentTemplate from './app.component.html';

let appComponent  = {
	bindings: {},
	controller: function () {

		this.logo = require("./../images/logo.svg");
		this.isOpened = false;
		
		this.close = function(){
			this.isOpened = false;
		}
		this.open = function(){
			this.isOpened = true;
		}

	},
	template: appComponentTemplate
};
export default appComponent;