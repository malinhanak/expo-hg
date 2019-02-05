import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Edit = (props) => {
  return (
   <Link className="button-menu edit" to={`/edit/${props.id}`}>
		<FontAwesomeIcon icon="pen" />
	</Link>
  )
}

export default Edit