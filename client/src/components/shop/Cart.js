import React, { Component } from 'react';
import ButtonMenu from './ButtonMenu'

class Cart extends Component {
  	render() {
      const cart = this.props.cart.map(product => {
         return (
            <div className="cart-item" key={product.EAN}>
               <div className="item-details">
                  <h3 style={{margin: '0 0 5px 0'}}>{product.name}</h3>
                  {product.price} HG
               </div>
               <div className="item-price">
                  <ButtonMenu id={product.EAN} qty={product.qty} />
               </div>
            </div>
         )
      })
		return (
         <div className="shopping-cart">
            {cart}
         </div>
      )
   }  
}

export default Cart