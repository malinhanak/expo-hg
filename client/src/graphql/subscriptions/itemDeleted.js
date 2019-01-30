import gql from "graphql-tag";

const SUBSCRIBE_ITEM_DELETED = gql`
  subscription itemDeleted {
    itemDeleted {
      id
    }
  }
`;

export default SUBSCRIBE_ITEM_DELETED