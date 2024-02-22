const { typeDefs, resolvers } = require('../../schemas');
const db = require('../../lib/mongodb');

import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from '@apollo/server';
const { authMiddleWare } = require('../../utils/auth');
console.log('authMiddleWare', authMiddleWare)

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => authMiddleWare({ req }),
});

const handler  = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
