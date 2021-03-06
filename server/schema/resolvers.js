import { itemModel, userModel, cartModel }  from './model';
import pubsub, { EVENTS } from './subscriptions';

export const resolvers = {
  Subscription: {
    itemUpdated: {
      subscribe: () => pubsub.asyncIterator(EVENTS.ITEM.UPDATED),
    },
    itemCreated: {
      subscribe: () => pubsub.asyncIterator(EVENTS.ITEM.CREATED)
    },
    itemDeleted: {
      subscribe: () => pubsub.asyncIterator(EVENTS.ITEM.DELETED)
    },
    userUpdated: {
      subscribe: () => pubsub.asyncIterator(EVENTS.USER.UPDATED),
    },
  },
  Query: {
    getItems: async () => {
      return await itemModel.list()
    },
    getUsers: async () => {
      return await userModel.list()
    },
    findUser: async (source, { id }) => {
      return await userModel.find(id)
    },
    findItem: async (source, {id}) => {
      return await itemModel.find(id)
    },
    searchForItem: async (source, {category, name}) => {
      return await itemModel.search(category, name)
    },
  },
  Mutation: {
    createItem: async (source, args) => {
      const item = await itemModel.create(args)
      pubsub.publish(EVENTS.ITEM.CREATED, {
        itemCreated: item });
      return item
    },
    updateItem: async (source, args) => {
      const item = await itemModel.update(args.id, args)
      pubsub.publish(EVENTS.ITEM.UPDATED, { 
        itemUpdated: item });
      return item
    },
    createUser: async (source, args) => {
      return await userModel.create(args)
    },
    updateUserInventory: async (source, args) => {
      return await userModel.updateInventory(args.id, args)
    },
    incrementUserCartItem: async (source, args) => {
      const userCart = await userModel.incrementCartItem(args.id, args.cart.EAN, args)
      pubsub.publish(EVENTS.USER.UPDATED, { 
        userUpdated: userCart });
      return userCart
    },
    decrementUserCartItem: async (source, args) => {
      const userCart = await userModel.decrementCartItem(args.id, args.cart.EAN, args)
      pubsub.publish(EVENTS.USER.UPDATED, { 
        userUpdated: userCart });
      return userCart
    },
    addUserCartItem: async (source, args) => {
      const userCart = await userModel.addCartItem(args.id, args.cart.EAN, args)
      pubsub.publish(EVENTS.USER.UPDATED, { 
        userUpdated: userCart });
      return userCart
    },
    deleteUser: async (source, { id }) => {
      return await userModel.delete(id)
    },
    deleteItem: async (source, { id }) => {
      const item = itemModel.delete(id)
      pubsub.publish(EVENTS.ITEM.DELETED, {
        itemDeleted: item });
      return await item
      .catch((err) => {
        if(err.message === "NonExistingID"){
          throw new Error('The id you are trying to delete does not exist!')
        }
        throw new Error('Horrible error - run, run!!')
      })
    }
  },
};