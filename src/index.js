//importar ApolloServer
const { ApolloServer } = require('apollo-server-express');

//Import express
const express = require('express');

const cors = require('cors');

//Importar types y resolvers
const typeDefs = require('./types/typeDefs');
const resolvers = require('./resolvers/resolvers');

async function startApolloserver(typeDefs, resolvers) {

  //Agregar typeDefs y resolver 
  const server = new ApolloServer({ typeDefs, resolvers });

  await server.start();
  const app = express();

  //Habilitar Cors
  app.use(cors());

  server.applyMiddleware({
    app,
    path: '/'
  })

  await new Promise(resolve => app.listen({ port: 4000 }, resolve));
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);

}

startApolloserver(typeDefs, resolvers);

