import axios from 'axios';
import dbConfig  from '../../config';

const baseURL =  dbConfig.dbPath;

class User {
	constructor() {
		this.api = axios.create({
			baseURL
		})
	}
	list() {
		return this.api.get('/users')
		.then(res => res.data)
	}
	find(id) {
		return this.api.get(`/users/${id}`)
		.then((res) => res.data)
	}
	findItem(id, EAN) {
		return this.api.get(`/users/${id}`)
		.then((res) => {
			return res.data.cart.filter((item) => item.EAN === EAN)
		})
		.catch((error) => console.log(error))
	}
	create(data) {
		return this.api.post('/users', data)
		.then(res => res.data)
	}
	update(id, data) {
		return this.api.patch(`/users/${id}`, data)
		.then(res => res.data)
	}
	delete(id) {
		return this.api.delete(`/users/${id}`)
		.then(() => {id})
	}
	updateInventory(id, data) {
		return this.api.get(`/users/${id}`)
		.then((articles) => {
			let inventory = articles.data.inventory;
			inventory = [...inventory, data.inventory]
			data.inventory = inventory
			return this.api.patch(`/users/${id}`, data)
			.then(res => res.data)
		})
	}
	/*
	 * Adds a item to cart,
	 * 
	 * Adds a new item to cart - modified data-parameter with new object.
	 * 
	 * @param id - id of user
	 * @param ean - id of item
	 * @param data - complete data object passed from the resolvers.
	 * 
	 * @returns Promise resolved with patched cart.
	 */
	addCartItem(id, EAN, data) {
		return this.findItem(id, EAN)
		.then((res) => {
			if (res.length === 0) {
				return this.api.get(`/users/${id}`)
				.then((articles) => {
					data.cart = [...articles.data.cart, data.cart]
					return this.api.patch(`/users/${id}`, data)
				})
				.then(res => res.data)
			} else {
				return this.incrementCartItem(id, EAN, data)
			}
		})
	}
	incrementCartItem(id, itemId, data) {
		return this.api.get(`/users/${id}`)
		.then((items) => {
			items.data.cart.filter(item => item.EAN === itemId).map(item => {
				item.qty = item.qty +1
				return item
			})
			data = items.data
			return this.api.patch(`/users/${id}`, data)
			.then(res => res.data)
		})
	}
	decrementCartItem(id, itemId, data) {
		return this.api.get(`/users/${id}`)
		.then((items) => {
			items.data.cart.filter(item => item.EAN === itemId).forEach(item => {
				// Updating internal key in object.
				item.qty = item.qty -1
			});
			
			items.data.cart = items.data.cart.filter((item) => item.qty >= 1)

			// Reassigning data-parameter with result. 
			data = items.data
			return this.api.patch(`/users/${id}`, data)
			.then(res => res.data)
		})
	}
}

export default new User()