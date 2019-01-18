const userModel = require('./models');

const resolvers = {
  Query: {
    users() {
      return userModel.list()
    }
  },
};

module.exports = resolvers;