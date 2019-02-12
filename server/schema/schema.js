import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  enum ItemCategory {
    HORSE
    HORSE_GEAR
    RIDER_GEAR
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
    cart: [Cart]
    coin: Int
  }

  type Iventory {
    id: ID!
    EAN: String
    name: String
    category: ItemCategory
    qty: Int
  }

  type credentials {
    userId: String
    role: String
    credentials: String
  }

  input IventoryInput {
    id: ID!
    EAN: String
    name: String
    category: ItemCategory
    qty: Int
  }

  type Cart {
    EAN: String
    name: String
    price: Int
    qty: Int
  }

  input CartInput {
    EAN: String
    name: String
    price: Int
    qty: Int
  }

  type Query {
    getItems: [Item]
    getUsers: [User]
    findUser(id: ID!): User
    findItem(id: ID): Item
    searchForItem(category: String, name: String): [Item]
    findCart: Cart
  }

  type Mutation {
    createItem(EAN: String! name: String!, description: String, color: String quantity: Int, prize: Int, category: ItemCategory!): Item
    updateItem(id: ID!, EAN: String name: String, description: String, color: String quantity: Int, prize: Int, category: ItemCategory): Item
    createUser(fullName: String!, email: String!, inventory: [IventoryInput], coin: Int): User
    updateUserInventory(id: ID!, inventory: [IventoryInput]): User
    incrementUserCartItem(id: ID!, cart: CartInput!): User
    decrementUserCartItem(id: ID!, cart: CartInput!): User
    addUserCartItem(id: ID!, cart: CartInput!): User
    deleteUser(id: ID!): User
    deleteItem(id: ID!): Item
  }

  type Subscription {
    itemUpdated: Item
    itemCreated: Item
    itemDeleted: Item
    userUpdated: User
  }

`;