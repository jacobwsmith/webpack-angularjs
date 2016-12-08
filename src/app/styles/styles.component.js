let stylesComponent  = {
	controller: function () {
		this.title = 'Styles';
	},
	template: `
		<div class="container-fluid">
			<div class="row">
				<div class="col-lg-12">
					<h1>{{$ctrl.title}}</h1>
					<p>Leveraging the css framework Bootstrap. Adding and customizing bootstrap modules "as we need them" with scss as our preprossor.</p>
				</div>
			</div>
		</div>
	`
};
export default stylesComponent;