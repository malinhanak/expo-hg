import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import { client } from '../../store';
import { getItemCategory } from '../../store'
import { ADD_CART_ITEM } from '../../graphql/mutations'
import { GET_WEBSHOP_DATA } from '../../graphql/queries';

const styles = theme => ({
	firstCell: {
		padding: '10p'
	},
	cell: {
	  padding: '10px'
	},
 });

class WebShop extends Component {
	addToCart = (EAN, name, price) => {
		const payload = { EAN, name, price, qty: 1 }
		client.mutate({
			variables: { id: 1, cart: payload },
			mutation: ADD_CART_ITEM,
			refetchQueries: [{ query: GET_WEBSHOP_DATA }]
	  })
	  .then(result => result)
	  .catch(error => { console.log(error) });
	}
  render() {
		const { classes } = this.props;
    	const items = this.props.list.map((item) => {
      return (
        	<TableRow key={item.id}>
         	<TableCell className={classes.firstCell} style={{width: '45px'}}>
					<Avatar style={{marginRight: '5px'}}><ImageIcon /></Avatar>
          	</TableCell>
				 <TableCell className={classes.cell}>
					<div style={{display:'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
					<h3 style={{margin: '0 0 6px 0'}}>{item.name}</h3>
					Item id {item.id}, Item EAN {item.EAN}
					</div>
          	</TableCell>
				<TableCell className={classes.cell} align="left">{item.color}</TableCell>
				<TableCell className={classes.cell} align="center">{item.quantity}</TableCell>
				<TableCell className={classes.cell} align="center">{item.prize}</TableCell>
				<TableCell className={classes.cell} align="center">{getItemCategory(item)}</TableCell>
				<TableCell className={classes.cell} align="right">
					<button onClick={() => this.addToCart(item.EAN, item.name, item.prize)}>Lägg till</button>
				</TableCell>
       	</TableRow>
      )
   });
   return items
  }
}

export default withStyles(styles)(WebShop);
