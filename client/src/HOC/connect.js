import React, { Component } from 'react';
import { Query } from "react-apollo";
import { GET_ITEMS } from '../graphql/queries';
import { SUBSCRIBE_ITEM_UPDATED, SUBSCRIBE_ITEM_CREATED, SUBSCRIBE_ITEM_DELETED } from '../graphql/subscriptions';
import { subscribeToItemCreatedAndUpdated, subscribeToItemDeleted } from '../store'
import { handleShoppingCart } from '../store'

function connect(WrappedComponent) {
   return class extends Component {
		constructor(){
			super()
			const cart = handleShoppingCart.init()
			console.log('in connect', cart)
			const quantity = cart ? cart.reduce((a, b) => { return a + b.qty }, 0) : 0;
			this.state = {
				cart: cart || [],
				qty: quantity
			}
		}
		componentDidMount(){
			const newCart = handleShoppingCart.init()
			console.log('new cart', newCart)
			console.log('old cart', this.state.cart)
		}
      render() {
			const {qty, cart} = this.state;
			return (
				<Query query={GET_ITEMS}>
					{({ loading, error, data, subscribeToMore }) => {
						if (loading) return "Loading...";
						if (error) return `Error! ${error.message}`;
	
						subscribeToMore({
						document: SUBSCRIBE_ITEM_CREATED,
						updateQuery: subscribeToItemCreatedAndUpdated('itemCreated')
						});
	
						subscribeToMore({
						document: SUBSCRIBE_ITEM_UPDATED,
						updateQuery: subscribeToItemCreatedAndUpdated('itemUpdated')
						});
	
						subscribeToMore({
							document: SUBSCRIBE_ITEM_DELETED,
							updateQuery: subscribeToItemDeleted('itemDeleted')
						});
	
						const items = data.getItems
						return <WrappedComponent data={items} qty={qty} cart={cart} />
					}}
				</Query>
			 );
      }
   }
}

export default connect;