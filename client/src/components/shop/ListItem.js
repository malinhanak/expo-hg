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
    // if(item.category === 'RIDER'){Cat = 'Ryttare'}
    // else if (item.category === 'HORSE'){Cat = 'Häst'}
    // else { Cat = 'Övrigt'}
    return category
  }
  render() {
    const items = this.props.list.map((item) => {
      return (
        <TableRow key={item.EAN}>
          <TableCell>{item.name}</TableCell>
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
