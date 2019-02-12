import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { client } from '../../store';
import { GET_WEBSHOP_DATA } from '../../graphql/queries';
import { INCREMENT_CART_ITEM, DECREMENT_CART_ITEM } from '../../graphql/mutations'

class ButtonMenu extends Component {
  	incrementCount = (EAN) => {
		client.mutate({
			variables: { id: 1, cart: { EAN } },
			mutation: INCREMENT_CART_ITEM,
			refetchQueries: [{ query: GET_WEBSHOP_DATA }]
	  })
	  .then(result => result)
	  .catch(error => { console.log(error) });
	}
	decrementCount = (EAN) => {
		client.mutate({
			variables: { id: 1, cart: { EAN } },
			mutation: DECREMENT_CART_ITEM,
			refetchQueries: [{ query: GET_WEBSHOP_DATA }]
			
	  })
	  .then(result => result)
	  .catch(error => { console.log(error) });
	}
  	render() {
		const { id, qty } = this.props
		return (
			<div className="button-menu">
				<button className="add" onClick={() => this.incrementCount(id)}>
					<FontAwesomeIcon icon="plus" />
				</button>
				<input type="text" className="item-amount" value={qty} readOnly/>
				<button className="subtract" onClick={() => this.decrementCount(id)}>
					<FontAwesomeIcon icon="minus" />
				</button>
			</div>
		)
  	}  
}

export default ButtonMenu