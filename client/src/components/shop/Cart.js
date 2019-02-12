import React, { Component } from 'react';
import ButtonMenu from './ButtonMenu'

class Cart extends Component {
  	render() {
      const { cart } = this.props
      const getCart = cart.length >= 1 ? cart.map(product => {
         return (
            <div className="cart-item" key={product.EAN}>
               <div className="item-details">
                  <h3 style={{margin: '0 0 5px 0'}}>{product.name}</h3>
                  {product.price} HG
               </div>
               <div className="item-price">
                  <ButtonMenu id={product.EAN} qty={product.qty} increment={this.props.increment} decrement={this.props.decrement} />
               </div>
            </div>
         )
      }) : 'Din varukorg är tom'
		return (
         <div className="shopping-cart">
            {getCart}
         </div>
      )
   }  
}

export default Cart