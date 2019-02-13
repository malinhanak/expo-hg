import React, { Component } from 'react';
import { Query } from "react-apollo";
import { GET_WEBSHOP_DATA } from '../graphql/queries';
import { SUBSCRIBE_ITEM_UPDATED, SUBSCRIBE_ITEM_CREATED, SUBSCRIBE_ITEM_DELETED, SUBSCRIBE_USER_UPDATED } from '../graphql/subscriptions';
import { subscribeToItemCreatedAndUpdated, subscribeToItemDeleted, subscribeToUserChanges } from '../store'

function connect(WrappedComponent) {
   return class extends Component {
      render() {
			return (
				<Query query={GET_WEBSHOP_DATA}>
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
						document: SUBSCRIBE_USER_UPDATED,
						updateQuery: subscribeToUserChanges()
						});
	
						subscribeToMore({
							document: SUBSCRIBE_ITEM_DELETED,
							updateQuery: subscribeToItemDeleted('itemDeleted')
						});
	
						const items = data.getItems
						const user = data.findUser
						return <WrappedComponent {...this.props} data={items} user={user} />
					}}
				</Query>
			 );
      }
   }
}

export default connect;