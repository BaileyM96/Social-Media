import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

//Initialize a new apollo client instance
const createApolloClient = () => new ApolloClient({
    link: new HttpLink({
    uri: 'http://localhost:3000/graphql',
    }),
    cache: new InMemoryCache(),
});

export const apolloClient = createApolloClient();