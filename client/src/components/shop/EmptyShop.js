import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

const EmptyShop = (props) => {
	return (
      <TableRow>
         <TableCell align="center" colSpan="5">
            Där är inga artiklar i shoppen eller den valda kategorin.
         </TableCell>
      </TableRow>
	)
}

export default EmptyShop