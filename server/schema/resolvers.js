import { itemModel, userModel }  from './model';
import pubsub, { EVENTS } from './subscriptions';

export const resolvers = {
  Subscription: {
    itemUpdated: {
      subscribe: () => pubsub.asyncIterator(EVENTS.ITEM.UPDATED),
    },
    itemCreated: {
      subscribe: () => pubsub.asyncIterator(EVENTS.ITEM.CREATED)
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
    }
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
    deleteUser: async (source, { id }) => {
      return await userModel.delete(id)
    },
    deleteItem: async (source, { id }) => {
      return await itemModel.delete(id)
      .catch((err) => {
        if(err.message === "NonExistingID"){
          throw new Error('The id you are trying to delete does not exist!')
        }
        throw new Error('Horrible error - run, run!!')

      })
    }
  }
};