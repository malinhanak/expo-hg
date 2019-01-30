import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  enum ItemCategory {
    HORSE
    RIDER
    MISC
  }

  type Item {
    id: ID
    EAN: String
    name: String
    description: String
    color: String
    quantity: Int
    prize: Int
    category: ItemCategory
  }

  type User {
    id: ID
    fullName: String
    email: String
    #stableId: String
    #horses: Int
    inventory: [Iventory]
    coin: Int
  }

  type Iventory {
    EAN: ID
    name: String
    category: ItemCategory
    quantity: Int
  }

  type credentials {
    userId: String
    role: String
    credentials: String
  }

  input IventoryInput {
    EAN: ID
    name: String
    category: ItemCategory
    quantity: Int
  }

  type Query {
    getItems: [Item]
    getUsers: [User]
    findUser(id: ID!): User
    findItem(id: ID): Item
    searchForItem(category: String, name: String): [Item]
  }

  type Mutation {
    createItem(EAN: String! name: String!, description: String, color: String quantity: Int, prize: Int, category: ItemCategory!): Item
    updateItem(id: ID!, EAN: String name: String, description: String, color: String quantity: Int, prize: Int, category: ItemCategory!): Item
    createUser(fullName: String!, email: String!, inventory: [IventoryInput], coin: Int): User
    updateUserInventory(id: ID!, inventory: [IventoryInput]): User
    deleteUser(id: ID!): User
    deleteItem(id: ID!): Item
  }

  type Subscription {
    itemUpdated: Item
    itemCreated: Item
    itemDeleted: Item
  }

`;