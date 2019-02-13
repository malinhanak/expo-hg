import gql from "graphql-tag";

const ADD_CART_ITEM = gql`
mutation addUserCartItem($id: ID!, $cart: CartInput!) {
   addUserCartItem(id: $id cart: $cart){
		id
		cart {
			EAN
			name
			qty
			price
		}
   }
 }
 `;

export default ADD_CART_ITEM