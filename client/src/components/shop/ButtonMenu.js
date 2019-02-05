import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Edit from '../buttons/Edit';

const alertTest = (id, text) => {
  return alert(`you clicked id ${id}, to ${text}`)
}

const ButtonMenu = (props) => {
  return (
    <>
      <button className="button-menu add" onClick={() => {alertTest(props.id, 'add to cart')}}>
        <FontAwesomeIcon icon="plus" />
      </button>
      <Edit id={props.id} />
      <button className="button-menu delete" onClick={() => {alertTest(props.id, 'delete')}}>
        <FontAwesomeIcon icon="trash" />
      </button>
    </>
  )
}

export default ButtonMenu