import gql from "graphql-tag";

const SUBSCRIBE_ITEM_CREATED = gql`
  subscription itemCreated {
    itemCreated {
      id
      EAN
      name
      description
      color
      quantity
      prize
      category
    }
  }
`;

export default SUBSCRIBE_ITEM_CREATED