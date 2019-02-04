import React, { Component } from 'react';
import ShopTable from '../components/shop/ShopTable'
import { Query } from "react-apollo";
import { GET_ITEMS } from '../graphql/queries';
import { SUBSCRIBE_ITEM_UPDATED, SUBSCRIBE_ITEM_CREATED, SUBSCRIBE_ITEM_DELETED } from '../graphql/subscriptions';

class WebShop extends Component {
	subscribeItem = (subscription) => {
		return (prev, { subscriptionData }) => {
			if (!subscriptionData.data) return prev;
			const nextItem = subscriptionData.data[subscription];
			const prevItem = prev.getItems.filter((item) => item.id !== nextItem.id)
    		return Object.assign({}, prev, {
      		getItems: [nextItem, ...prevItem]
			});
		}
	}
	  
  	render() {
			const { match, history, location } = this.props
    	return (
			<Query query={GET_ITEMS}>
				{({ loading, error, data, subscribeToMore }) => {
					if (loading) return "Loading...";
					if (error) return `Error! ${error.message}`;

					subscribeToMore({
					document: SUBSCRIBE_ITEM_CREATED,
					updateQuery: this.subscribeItem('itemCreated')
					});

					subscribeToMore({
					document: SUBSCRIBE_ITEM_UPDATED,
					updateQuery: this.subscribeItem('itemUpdated')
					});

					subscribeToMore({
						document: SUBSCRIBE_ITEM_DELETED,
						updateQuery: (prev, { subscriptionData }) => {
							if (!subscriptionData.data) return prev;
							const itemList = prev.getItems.filter((item) => item.id !== subscriptionData.data.itemDeleted.id)
							return Object.assign({}, prev, {
								getItems: [...itemList]
							});
						}
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
