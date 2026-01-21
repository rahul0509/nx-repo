import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

const typeDefs = require('./schema/actor');
const resolvers = require('./api/resolvers/index');

const server = new ApolloServer({ typeDefs, resolvers });

(async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });

  console.log(`Server ready at: ${url}`);
})();

// import express from 'express';
// // import * as cors from 'cors';
// const app = express();

// // app.use(cors());

// const host = process.env.HOST ?? 'localhost';
// const port = process.env.PORT ? Number(process.env.PORT) : 3000;

// app.use((req, res, next) => {
//   res.setHeader('Content-Type', 'application/json');
//   next();
// });

// app.get('/test', (req, res) => {
//   res.json({ message: 'Hello API' });
// });

// app.listen(port, host, () => {
//   console.log(`[ ready ] http://${host}:${port}`);
// });
