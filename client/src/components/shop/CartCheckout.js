import React, { Component } from 'react';

class CartCheckout extends Component {
  	render() {
		return (
         <div className="shopping-cart-checkout">
            <button className="checkout-buttom">
               Checkout ({this.props.total} HG)
            </button>
         </div>
      )
  }  
}

export default CartCheckout