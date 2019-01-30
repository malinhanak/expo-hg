import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

class WebShop extends Component {
  getCategory = (item) => {
    let category = '';
    switch(item.category) {
      case 'RIDER':
        category = 'Ryttare'
        break;

      case 'HORSE':
        category = 'Häst'
        break;

      default:
        category = 'Övrigt'
    }
    return category
  }
  render() {
    const items = this.props.list.map((item) => {
      return (
        <TableRow key={item.id}>
          <TableCell>({item.id}) {item.name}</TableCell>
          <TableCell align="left">{item.color}</TableCell>
          <TableCell align="left">{item.description}</TableCell>
          <TableCell align="center">{item.quantity}</TableCell>
          <TableCell align="center">{item.prize}</TableCell>
           <TableCell align="right">{this.getCategory(item)}</TableCell>
       </TableRow>
       )
    });

    return items
  }
}

export default WebShop;
