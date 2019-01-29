import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import { Query } from "react-apollo";
import { GET_ITEMS } from '../graphql/queries'

class WebShop extends Component {
  render() {
    return (
      	<Query query={GET_ITEMS}>
        		{({ loading, error, data }) => {
          	if (loading) return "Loading...";
          	if (error) return `Error! ${error.message}`;
    
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
