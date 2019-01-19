const { gql } = require('apollo-server-express');
import itemModel  from './models';

export const typeDefs = gql`

  enum ItemCategory {
    HORSE
    RIDER
    MISC
  }

  type Item {
    id: ID
    name: String
    description: String
    quantity: Int
    prize: Int
    category: ItemCategory
  }

  type Query {
    items: [Item]
  }
`;

export const resolvers = {
  Query: {
    items() {
      return itemModel.list()
    }
  },
};