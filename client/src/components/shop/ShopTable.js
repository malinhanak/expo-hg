import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import ListItem from './ListItem';

class ShopTable extends Component {
  	render() {
    	console.log('my props', this.props.router)
      const listItem = <ListItem list={this.props.payload}  />
    	return (
        <Table className="table-style">
        <TableHead>
          <TableRow>
            <TableCell>Namn</TableCell>
            <TableCell align="left">Färg</TableCell>
            <TableCell align="center">Lagersaldo</TableCell>
            <TableCell align="center">Pris</TableCell>
            <TableCell align="right">Kategori</TableCell>
            <TableCell align="right">buttons</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {this.props.payload ? listItem : <TableCell align="center" colSpan="5">Shoppen är tom!</TableCell>}
        </TableBody>
        </Table>
      );
  	}
}

export default ShopTable;
