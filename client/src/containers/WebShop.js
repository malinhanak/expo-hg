import React, { Component } from 'react';
import ShopTable from '../components/shop/ShopTable'
import Category from '../components/shop/Category'
import connect from '../HOC/connect';
import Cart from '../components/shop/Cart';
import CartHead from '../components/shop/CartHead';

class WebShop extends Component {
	state = {
		category: ''
	}
	handleStateCategory = (category) => this.setState({ category })

	resetStore = () => this.setState({ category: '' })

	sortItemByCategory = (data) => data.filter((list) => {
		if(this.state.category === '') return data
		return list.category === this.state.category
	})
	
  	render() {
		  const {data, user} = this.props
		  if (!data && !user) {
			  return null;
		  }
		  const calculateQty = user ? user.cart.reduce((a, b) => { return a + b.qty }, 0) : 0;
		  const calculatePrice = user ? user.cart.reduce((a, b) => { return a + b.price }, 0) : 0;
		  const userCart = user ? user.cart: ''
    	return (
			<div className="content-box">
				<CartHead qty={calculateQty}/>
				<Cart cart={userCart} total={calculatePrice} />
				<div className="shop-categories">
					<h3>Kategorier:</h3>
					<Category class={'cat-1'} title={'Hästar'} cat={'HORSE'} sort={this.handleStateCategory} />
					<Category class={'cat-2'} title={'Hästutrustning'} cat={'HORSE_GEAR'} sort={this.handleStateCategory} />
					<Category class={'cat-3'} title={'Ryttareutrustning'} cat={'RIDER_GEAR'} sort={this.handleStateCategory} />
					<Category class={'cat-4'} title={'Övrigt'} cat={'MISC'} sort={this.handleStateCategory} />
					<Category class={'cat-5'} title={'Okategoriserat'} cat={''} sort={this.resetStore} />
				</div>
				
				<ShopTable payload={this.sortItemByCategory(data)}  />
			</div>
    	);
  	}
}

export default connect(WebShop);
