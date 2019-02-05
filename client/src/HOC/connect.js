import React, { Component } from 'react';
import { Query } from "react-apollo";
import { GET_ITEMS } from '../graphql/queries';
import { SUBSCRIBE_ITEM_UPDATED, SUBSCRIBE_ITEM_CREATED, SUBSCRIBE_ITEM_DELETED } from '../graphql/subscriptions';
import { subscribeToItemCreatedAndUpdated, subscribeToItemDeleted } from '../store'

function connect(WrappedComponent) {
   return class extends Component {
      render() {
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
						return <WrappedComponent data={items} />
					}}
				</Query>
			 );
      }
   }
}

export default connect;