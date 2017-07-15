import React, { Component } from 'react';

import Row from './../components/Row';
import Filter from './../components/Filter';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataArray: this.props.data,
			activeSort: '',
			sortAsc: false
		};
		this.filterFields = Object.keys(this.props.data.reduce((type, product) => {type[product.type] = product.type; return type;}, {}));
	};

	handleThClick = (th, event) => {
		this.setState({
			activeSort: th,
			sortAsc: (this.state.activeSort === th) ? !this.state.sortAsc : this.state.sortAsc
		});
	};

	filterUpdate = (arr) => {
		let filteredArr;
		const { data } = this.props;
		let newData = [];

		if (arr.length === 0) {
			return (
				this.setState({
					dataArray: data,
				})
			);
		}

		for (let i = 0; i < arr.length; i++) {
			filteredArr = data.filter(type => type.type.toLowerCase().indexOf(arr[i].toLowerCase()) >= 0);
			newData = newData.concat(filteredArr);
		}

		return (
			this.setState({
				dataArray: newData,
			})
		);
	};

	sortRows = (a, b) => {
		const statusActiveSort = this.state.sortAsc;
		const sortParam = this.state.activeSort.toLowerCase();
		const sortNumber = statusActiveSort ? b[sortParam] - a[sortParam] : a[sortParam] - b[sortParam];

		switch(sortParam) {
			case 'id':
				return sortNumber;
				break;
			case 'name':
				let firstStr = a[sortParam].toLowerCase();
				let secondStr = b[sortParam].toLowerCase();

				return (statusActiveSort ? this.compare(secondStr, firstStr) : this.compare(firstStr, secondStr));
				break;
			case 'rating':
				return sortNumber;
				break;
			case 'price':
				let first = Number(a[sortParam].slice(1));
				let second = Number(b[sortParam].slice(1));

				return statusActiveSort ? second - first : first - second;
				break;
			default:
				return false;
				break;
		}
	};

	compare = (a,b) => {
		if (a < b)
			return -1;
		if (a > b)
			return 1;
		return 0;
	};

	render() {
		const thead = ['Name', 'Rating', 'Price'];
		const { data } = this.props;

		const productRow = this.state.dataArray.sort(this.sortRows.bind(this)).map((row, i) => <Row key={i} row={row}/>);

		const headTh = thead.map((label, index) => {
			const isSelected = (label.toLowerCase() === this.state.activeSort.toLowerCase());
			const arrowDirection = (isSelected ? (this.state.sortAsc ? "is--asc" : "is--desc") : "");
			const classes = `th ${isSelected ? ` is--active ${arrowDirection}` : ""}`;
			return (
				<th key={index} className={classes} onClick={this.handleThClick.bind(this, label)}>{label}</th>
			);
		});

		return (
			<div>
				<main>
					<div className="container">
						<div className="row main-row">
							<div className="col-lg-3">
								<Filter data={this.filterFields} filterStr={this.state.filterStr} filterUpdate={this.filterUpdate.bind(this)} />
							</div>
							<div className="col-lg-9">
								<div className="block-table">
									<table>
										<thead>
											<tr>
												{headTh}
											</tr>
										</thead>
										<tbody>
											{productRow}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		)
	}
}