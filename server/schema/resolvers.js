import { itemModel, userModel }  from './model';

export const resolvers = {
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
      return await itemModel.create(args)
    },
    updateItem: async (source, args) => {
      return await itemModel.update(args.id, args)
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
        if(err === "invalidId"){
          console.log(err, "The id is invalid")
          throw new Error('The id is invalid')
        }
      })
    }
  }
};