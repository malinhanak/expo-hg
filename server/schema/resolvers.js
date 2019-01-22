import { itemModel, userModel }  from './model';

export const resolvers = {
  Query: {
    getItems() {
      return itemModel.list()
    },
    getUsers() {
      return userModel.list()
    },
    findUser(source, { id }) {
      return userModel.find(id)
    }
  },
  Mutation: {
    createItem(source, args) {
      return itemModel.create(args)
    },
    updateItem(source, args) {
      return itemModel.update(args.id, args)
    },
    createUser(source, args) {
      return userModel.create(args)
    },
    updateUserInventory(source, args){
      return userModel.updateInventory(args.id, args)
    },
    deleteUser(source, { id }) {
      return userModel.delete(id)
    },
    deleteItem(source, { id }) {
      return itemModel.delete(id)
    }
  }
};