import './overview.component.scss';
import overviewComponentTemplate from './overview.component.html';

let overviewComponent  = {
	bindings: {},
	controller: function () {
		this.img = require("./../../images/foo.jpg");
	},
	template: overviewComponentTemplate
};
export default overviewComponent;