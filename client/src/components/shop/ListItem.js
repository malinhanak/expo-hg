import React, { Component } from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import ButtonMenu from './ButtonMenu'
import { getItemCategory } from '../../store'

class WebShop extends Component {
  render() {
    	const items = this.props.list.map((item) => {
      return (
        	<TableRow key={item.id}>
         	<TableCell style={{width: '45px', paddingRight: '10px'}}>
					<Avatar style={{marginRight: '5px'}}><ImageIcon /></Avatar>
          	</TableCell>
				 <TableCell style={{paddingLeft: '5px'}}>
					<div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
					<h3 style={{margin: '0 0 6px 0'}}>{item.name}</h3>
					Item id {item.id}
					</div>
          	</TableCell>
				<TableCell align="left">{item.color}</TableCell>
				<TableCell align="center">{item.quantity}</TableCell>
				<TableCell align="center">{item.prize}</TableCell>
				<TableCell align="center">{getItemCategory(item)}</TableCell>
				<TableCell align="right">
					<ButtonMenu id={item.id} />
				</TableCell>
       	</TableRow>
      )
   });
   return items
  }
}

export default WebShop;
