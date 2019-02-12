import gql from "graphql-tag";

const GET_WEBSHOP_DATA = gql`
  query getWebshopData {
    getItems {
      id
      name
      EAN
      description
      color
      quantity
      prize
      category
    }

    findUser(id: 1) {
      id
      fullName
      inventory {
        EAN
        name
      }
      cart {
        EAN
        name
        price
        qty
      }
    }
  }
`;

export default GET_WEBSHOP_DATA