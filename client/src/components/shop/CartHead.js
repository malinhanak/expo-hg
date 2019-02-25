import React, { Component } from 'react';

class CartHead extends Component {
  	render() {
		return (
         <div className="shopping-cart-head">
            Varukorg ({this.props.qty})
         </div>
      )
  }  
}

export default CartHead