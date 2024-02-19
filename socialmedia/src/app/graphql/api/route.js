const { typeDefs, resolvers } = require('../../schemas');
const db = require('../../lib/mongodb');

import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from '@apollo/server';
const { Auth } = require('../../utils/auth');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: Auth
});

const handler  = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
