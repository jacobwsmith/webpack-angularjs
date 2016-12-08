let typeComponent  = {
	controller: function () {
		this.title = 'Type';
	},
	template: `
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12">
					<h1>{{$ctrl.title}}</h1>
					<h2>h2 Some More</h2>
					<h3>h3 Some More</h3>
					<h4>h4 Some More</h4>
					<h5>h5 Some More</h5>
					<h6>h6 Some More</h6>
					<p>
						Paragraph with some more text
					</p>
					<p><a href="http://v4-alpha.getbootstrap.com/content/reboot/#approach" target="_blank">Bootstrap Type Documentation</a></p>
				</div>
			</div>
		</div>
	`
};
export default typeComponent;