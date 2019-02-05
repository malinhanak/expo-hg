import React, { Component } from 'react';
import ShopTable from '../components/shop/ShopTable'
import connect from '../HOC/connect';

class WebShop extends Component {  
  	render() {
			const { match, history, location } = this.props
    	return (
						<div className="content-box">
							<h3 className="title cat-title">Kategorier</h3>
							<article className="category cat-1">
								<div className="category-name">Hästar</div>
							</article>
							<article className="category cat-2">
								<div className="category-name">Hästutrustning</div>
							</article>
							<article className="category cat-3">
								<div className="category-name">Ryttareutrustning</div>
							</article>
							<article className="category cat-4">
								<div className="category-name">Övrigt</div>
							</article>
							<h3 className="title shop-title">Webshop</h3>
							<ShopTable payload={this.props.data} router={{history, match, location}}  />
						</div>
    	);
  	}
}

export default connect(WebShop);
