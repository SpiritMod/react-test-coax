
const ProductTable = React.createClass({
	// propTypes: {
	//   data: React.PropTypes.array.isRequired
	// },

	render() {
		const data = this.props.data;
		const rowTemplate = data.map((item, index) => {
			return (
				<ProductItem key={index} data={item}/>
			);
		});

		return (
			<table className="table product-table">
				<ProductTableHead />
				<tbody>
				{rowTemplate}
				</tbody>
			</table>
		);
	}
});

const ProductTableHead = React.createClass({
	render() {
		return (
			<thead>
			<tr>
				<th><span className="glyphicon glyphicon-edit" aria-hidden="true"></span></th>
				<th>Product Name</th>
				<th>Rating</th>
				<th>Price</th>
			</tr>
			</thead>
		);
	}
});

const ProductItem = React.createClass({
	// propTypes: {
	//   data: React.PropTypes.shape({
	//     0: React.PropTypes.number.isRequired,
	//     1: React.PropTypes.string.isRequired,
	//     2: React.PropTypes.string.isRequired,
	//     3: React.PropTypes.number.isRequired,
	//     4: React.PropTypes.string.isRequired,
	//   })
	// },

	render() {
		var data = this.props.data;
		//console.log(data[0]);
		return (
			<tr key={data[0]}>
				<td>{data[0]}</td>
				<td>{data[1]}</td>
				<td>{data[2]}</td>
				<td>{data[3]}</td>
			</tr>
		);
	}
});


const App = React.createClass({
	render: function () {
		return (
			<div className="app">
				<div className="container">
					<div className="row">
						<div className="col-lg-12">
							<ProductTable data={dataProducts} />
						</div>
					</div>
				</div>
			</div>
		);
	}
});


ReactDOM.render(<App />, document.getElementById('root'));
