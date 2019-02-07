import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { handleShoppingCart } from '../../store'
// import Edit from '../buttons/Edit';


class ButtonMenu extends Component {
  	incrementCount = (id) => {
		console.log(id)
		return handleShoppingCart.increment(id)
	}
	decrementCount = (id) => {
		console.log(id)
		return handleShoppingCart.decrement(id)
	}
  	render() {
		return (
			<div className="button-menu">
				<button className="add" onClick={() => this.incrementCount(this.props.id)}>
					<FontAwesomeIcon icon="plus" />
				</button>
				{/* <Edit id={props.id} /> */}
				<input type="text" className="item-amount" value={this.props.qty} readOnly/>
				<button className="subtract" onClick={() => this.decrement(this.props.id)}>
					<FontAwesomeIcon icon="minus" />
				</button>
			</div>
		)
  }  
}

export default ButtonMenu