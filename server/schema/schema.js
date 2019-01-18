const { gql } = require('apollo-server-express');
// const User = require('./models');

const typeDefs = gql`
  type User {
    id: ID
    name: String
    age: Int
    email: String
    friends: [User]
  }

  type Query {
    users: String #[User]
  }
`;

const resolvers = {
  Query: {
    users() {
      return "there will be users here"
    }
  },
};

module.exports = {
  typeDefs,
  resolvers
};