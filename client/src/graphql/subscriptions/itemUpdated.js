import gql from "graphql-tag";

const SUBSCRIBE_ITEM_UPDATE = gql`
  subscription itemUpdated {
    itemUpdated {
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

export default SUBSCRIBE_ITEM_UPDATE