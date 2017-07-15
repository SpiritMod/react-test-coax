import React, { Component } from 'react';
import Rating from 'react-rating';

export default class Row extends Component {
	render () {
		const {
			id,
			name,
			price,
			rating,
			type
		} = this.props.row;

		return(
			<tr data-type={type}>
				<td>{name}</td>
				<td>
					<Rating
						className="field-rating"
						initialRate={rating}
						readonly
						empty="fa fa-star-o fa-2x orange"
						full="fa fa-star fa-2x orange" />
				</td>
				<td>{price}</td>
			</tr>
		)
	}
} 
