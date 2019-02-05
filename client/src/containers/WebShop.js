import React, { Component } from 'react';
import ShopTable from '../components/shop/ShopTable'
import { Query } from "react-apollo";
import { GET_ITEMS } from '../graphql/queries';
import { SUBSCRIBE_ITEM_UPDATED, SUBSCRIBE_ITEM_CREATED, SUBSCRIBE_ITEM_DELETED } from '../graphql/subscriptions';
import { subscribeToItemCreatedAndUpdated, subscribeToItemDeleted } from '../store'

class WebShop extends Component {  
  	render() {
			const { match, history, location } = this.props
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
					return (
						<div className="content-box">
							<h3 className="title cat-title">Kategorier</h3>
							<article className="category cat-1">
								<div className="category-name">Hästar</div>
							</article>
							<article className="category cat-2">
								<div className="category-name">Hästutrustning</div>
							</article>
							<article className="category cat-3">
								<div className="category-name">Ryttareutrustning</div>
							</article>
							<article className="category cat-4">
								<div className="category-name">Övrigt</div>
							</article>
							<h3 className="title shop-title">Webshop</h3>
							<ShopTable payload={items} router={{history, match, location}}  />
						</div>
					);
				}}
			</Query>
    	);
  	}
}

export default WebShop;
