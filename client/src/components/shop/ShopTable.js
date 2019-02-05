import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import ListItem from './ListItem';
import EmptyShop from './EmptyShop'

class ShopTable extends Component {
  	render() {
		const list = this.props.payload
      const listItem = <ListItem list={list}  />
    	return (
			<Table className="table-style">
				<TableHead>
					<TableRow>
						<TableCell colSpan="2">Namn</TableCell>
						<TableCell align="left">Färg</TableCell>
						<TableCell align="center">Lagersaldo</TableCell>
						<TableCell align="center">Pris</TableCell>
						<TableCell align="center">Kategori</TableCell>
						<TableCell align="right">buttons</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{list.length > 0 ? listItem : <EmptyShop />}
				</TableBody>
			</Table>
      );
  	}
}

export default ShopTable;
