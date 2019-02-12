import gql from "graphql-tag";

const INCREMENT_CART_ITEM = gql`
mutation incrementUserCartItem($id: ID!, $cart: CartInput!) {
   incrementUserCartItem(id: $id cart: $cart){
     id
     cart {
       EAN
       name
       qty
     }
   }
 }
 `;

export default INCREMENT_CART_ITEM