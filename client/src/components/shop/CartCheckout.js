import React, { Component } from 'react';

class CartCheckout extends Component {
   handleCheckout = () => {
      return alert(`${this.props.total} will be withdrawed from your account.`)
   }
  	render() {
      const {coins, total} = this.props
      const checkCoins = coins < total
      console.log('coins', coins)
      console.log('total', total)
		return (
         <div className="shopping-cart-checkout">
            <button className="checkout-buttom" onClick={() => this.handleCheckout()} disabled={checkCoins || total === 0 ? true : false} >
               Checkout ({total} HG)
            </button>
            <div className="checkout-warning">{checkCoins ? 'Beloppet överskrider dina tillgångar' : ''}</div>
         </div>
      )
  }  
}

export default CartCheckout