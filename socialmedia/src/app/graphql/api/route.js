const { typeDefs, resolvers } = require('../../schemas');
const db = require('../../lib/mongodb');

import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from '@apollo/server';

const server = new ApolloServer({
    typeDefs,
    resolvers,
});
console.log('resolveres', resolvers);
console.log('typeDefs', typeDefs);

const handler  = startServerAndCreateNextHandler(server);

export { handler as GET, handler as POST };
