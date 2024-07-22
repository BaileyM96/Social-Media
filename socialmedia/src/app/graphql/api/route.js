const { typeDefs, resolvers } = require('../../schemas');
const db = require('../../lib/mongodb');

import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from '@apollo/server';
const { authmiddleware } = require('../../utils/auth');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: authmiddleware,
});

const handler  = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
