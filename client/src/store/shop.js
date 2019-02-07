
export const getItemCategory = (item) => {
  let category = '';
  switch(item.category) {
    case 'RIDER_GEAR':
      category = 'Ryttarutrustning'
      break;
    case 'HORSE':
      category = 'Häst'
      break;
    case 'HORSE_GEAR':
      category = 'Hästutrustning'
      break;
    default:
      category = 'Övrigt'
  }
  return category
}

export const handleShoppingCart = {
	KEY: 'randomUserShoppingCart',
	cartContents: [],
	init(){
		let cartItems = localStorage.getItem(handleShoppingCart.KEY)
		const fakeContent = [
			{EAN: '121341', name: 'Ridhjälm', qty: 1, price: 20},
			{EAN: 'njh3588', name: 'Benskydd', qty: 1, price: 90},
		]

		if(cartItems) return handleShoppingCart.cartContents = JSON.parse(cartItems)

		handleShoppingCart.cartContents = fakeContent
		handleShoppingCart.getItemCategory()
	},
	async getItemCategory(){
		let cartItems = JSON.stringify(handleShoppingCart.cartContents);
		await localStorage.setItem(handleShoppingCart.KEY, cartItems);
	},
	find(id){
		return handleShoppingCart.cartContents.filter(item => item.id === id);
	},
	add(id, item){
		const checkForExistingId = handleShoppingCart.find(id)
		if(checkForExistingId) return handleShoppingCart.increase(id, 1);
		handleShoppingCart.cartContents.push(item);
		handleShoppingCart.getItemCategory();
	},
	remove(id){
		handleShoppingCart.cartContents = handleShoppingCart.cartContents.filter(item => item.id !== id);
		handleShoppingCart.getItemCategory();
	},
	increment(id){
		console.log('shop.js (+)', id)
		handleShoppingCart.cartContents = handleShoppingCart.cartContents.map(item=>{
			if(item.id === id) return item.qty = item.qty++;
			return item;
	  	});
	  handleShoppingCart.getItemCategory();
	},
	decrement(id){
		console.log('shop.js (-)', id)
		handleShoppingCart.cartContents = handleShoppingCart.cartContents.map(item=>{
			if(item.id === id) return item.qty = item.qty--;
			return item;
		});
		handleShoppingCart.cartContents.forEach(async item=>{
			if(item.id === id && item.qty === 0) return await handleShoppingCart.remove(id);
	  	});
	  	handleShoppingCart.getItemCategory();
	},
	sort(){
		// maybe later
	},
	checkout(){
		handleShoppingCart.cartContents = [];
		handleShoppingCart.sync()
	}
}