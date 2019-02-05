import React, { Component } from 'react';
import ShopTable from '../components/shop/ShopTable'
import Category from '../components/shop/Category'
import connect from '../HOC/connect';

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
				<h3 className="title cat-title">Kategorier</h3>
				<Category class={'cat-1'} title={'Hästar'} cat={'HORSE'} sort={this.handleStateCategory} />
				<Category class={'cat-2'} title={'Hästutrustning'} cat={'HORSE_GEAR'} sort={this.handleStateCategory} />
				<Category class={'cat-3'} title={'Ryttareutrustning'} cat={'RIDER_GEAR'} sort={this.handleStateCategory} />
				<Category class={'cat-4'} title={'Övrigt'} cat={'MISC'} sort={this.handleStateCategory} />
				<Category class={'cat-5'} title={'Okategoriserat'} sort={this.resetStore} />
				<h3 className="title shop-title">Webshop</h3>
				<ShopTable payload={this.sortItemByCategory(this.props.data)}  />
			</div>
    	);
  	}
}

export default connect(WebShop);
