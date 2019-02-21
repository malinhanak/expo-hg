import express  from 'express';
import { ApolloServer } from 'apollo-server-express';
import cors from 'cors';
import http from 'http';
import { typeDefs } from './schema/schema';
import { resolvers } from './schema/resolvers';

const app = express();

var corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true
};

app.use('*', cors(corsOptions));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

server.applyMiddleware({ app });

const httpServer = http.createServer(app);
server.installSubscriptionHandlers(httpServer);

httpServer.listen({ port: 8000 }, () => {
  console.log(`Apollo Server on http://localhost:8000${server.graphqlPath}`);
  console.log(`Subscriptions on ws://localhost:8000${server.subscriptionsPath}`);
});