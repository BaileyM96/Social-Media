import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServer } from "@apollo/server";
import { typeDefs, resolvers } from '../../../../../../Backend/Schemas/index';

//CREATE Apollo server instance
const server = new ApolloServer({
    typeDefs,
    resolvers,
});

//CREATE Next.js request handler
const handler = startServerAndCreateNextHandler(server);
//EXPORT GET, and POST route handlers
export { handler as GET, handler as POST };