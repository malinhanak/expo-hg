import gql from "graphql-tag";

const GET_ITEM = gql`
  query findItem($id: ID) {
    findItem(id: $id) {
      id
      name
      EAN
      description
      color
      quantity
      prize
      category
    }
  }
`;

export default GET_ITEM