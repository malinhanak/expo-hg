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
    },
    findItem(source, {id}) {
      return itemModel.find(id)
    },
    findItemTwo(source, {id, name}) {
      return itemModel.findTwo(id, name)
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
    }
  }
};