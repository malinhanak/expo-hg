const { gql } = require('apollo-server-express');
import itemModel  from './models';

export const typeDefs = gql`
  type Item {
    id: ID
    name: String
    age: Int
    email: String
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