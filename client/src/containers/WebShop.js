import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItem from '../components/shop/ListItem'
import { Query } from "react-apollo";
import { GET_ITEMS } from '../graphql/queries'
import { SUBSCRIBE_ITEM_UPDATED, SUBSCRIBE_ITEM_CREATED, SUBSCRIBE_ITEM_DELETED } from '../graphql/subscriptions'

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
					const listItem = <ListItem list={items}  />
					return (
						<Table className="table-style">
						<TableHead>
							<TableRow>
								<TableCell>Namn</TableCell>
								<TableCell align="left">Color</TableCell>
								<TableCell align="left">Beskrivning</TableCell>
								<TableCell align="center">Lagersaldo</TableCell>
								<TableCell align="center">Pris</TableCell>
								<TableCell align="right">Kategori</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{items ? listItem : 'Shoppen är tyvärr tom'}
						</TableBody>
						</Table>
					);
				}}
			</Query>
    	);
  	}
}

export default WebShop;
