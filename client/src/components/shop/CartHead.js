import React, { Component } from 'react';

class Cart extends Component {
  	render() {
		return (
         <div className="shopping-cart-head">
            Varukorg ({this.props.qty})
         </div>
      )
  }  
}

export default Cart