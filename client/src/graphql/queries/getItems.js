import gql from "graphql-tag";

const GET_ITEMS = gql`
  query getItems {
    getItems {
      id
      name
      EAN
      description
      quantity
      prize
      category
    }
  }
`;

export default GET_ITEMS