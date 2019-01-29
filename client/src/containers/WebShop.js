import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Query } from "react-apollo";
import { GET_ITEMS } from '../graphql/queries'
import SUBSCRIBE_ITEM_UPDATE from '../graphql/subscriptions/itemUpdated'
import SUBSCRIBE_ITEM_CREATED from '../graphql/subscriptions/itemCreated'

class WebShop extends Component {
  checkExistingId = (prev, existing) => {
    const prevItem = prev.getItems.filter((item) => item.id !== existing.id)
    return Object.assign({}, prev, {
      getItems: [existing, ...prevItem]
      }
    );
  }
  render() {
    return (
      	<Query query={GET_ITEMS}>
        		{({ loading, error, data, subscribeToMore }) => {
          	if (loading) return "Loading...";
          	if (error) return `Error! ${error.message}`;

            subscribeToMore({
              document: SUBSCRIBE_ITEM_CREATED,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const newItem = subscriptionData.data.itemCreated;
                return this.checkExistingId(prev, newItem)
              }
            });

            subscribeToMore({
              document: SUBSCRIBE_ITEM_UPDATE,
              updateQuery: (prev, { subscriptionData }) => {
                if (!subscriptionData.data) return prev;
                const updatedItem = subscriptionData.data.itemUpdated;
                return this.checkExistingId(prev, updatedItem)
              },
            });
    
          	const items = data.getItems.map((item) => {
              let Cat = '';
              if(item.category === 'RIDER'){Cat = 'Ryttare'}
              else if (item.category === 'HORSE'){Cat = 'Häst'}
              else { Cat = 'Övrigt'}
            	return (
                <TableRow key={item.EAN}>
              		<TableCell>{item.name}</TableCell>
						      <TableCell align="left">{item.color}</TableCell>
                  <TableCell align="left">{item.description}</TableCell>
                  <TableCell align="center">{item.quantity}</TableCell>
            		  <TableCell align="center">{item.prize}</TableCell>
               	  <TableCell align="right">{Cat}</TableCell>
               </TableRow>
               )
            });
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
                {items ? items : 'Shoppen är tyvärr tom'}
              </TableBody>
            </Table>
          );
        }}
      </Query>
    );
  }
}

export default WebShop;
