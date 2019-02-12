import gql from "graphql-tag";

const DECREMENT_CART_ITEM = gql`
mutation decrementUserCartItem($id: ID!, $cart: CartInput!) {
   decrementUserCartItem(id: $id cart: $cart){
     id
     cart {
       EAN
       name
       qty
     }
   }
 }
 `;

export default DECREMENT_CART_ITEM