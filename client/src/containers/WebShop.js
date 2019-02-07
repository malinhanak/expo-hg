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
    	return (
			<div className="content-box">
				<CartHead qty={this.props.qty}/>
				<Cart cart={this.props.cart} />
				<div className="shop-categories">
					<h3>Kategorier:</h3>
					<Category class={'cat-1'} title={'Hästar'} cat={'HORSE'} sort={this.handleStateCategory} />
					<Category class={'cat-2'} title={'Hästutrustning'} cat={'HORSE_GEAR'} sort={this.handleStateCategory} />
					<Category class={'cat-3'} title={'Ryttareutrustning'} cat={'RIDER_GEAR'} sort={this.handleStateCategory} />
					<Category class={'cat-4'} title={'Övrigt'} cat={'MISC'} sort={this.handleStateCategory} />
					<Category class={'cat-5'} title={'Okategoriserat'} cat={''} sort={this.resetStore} />
				</div>
				
				<ShopTable payload={this.sortItemByCategory(this.props.data)}  />
			</div>
    	);
  	}
}

export default connect(WebShop);
