const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');

const { typeDefs, resolvers } = require('./schema/schema')

const app = express();
app.use(cors());

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app, path: '/graphql' });

app.listen({ port: 8000 }, () => {
  console.log('Apollo Server on http://localhost:8000/graphql');
});