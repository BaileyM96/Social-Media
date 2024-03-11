import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
import fetch from 'cross-fetch';


const createApolloClient = () => new ApolloClient({
    link: new HttpLink({
    uri: 'http://localhost:3000/graphql/api', fetch,
    }),
    cache: new InMemoryCache(),
});

export const apolloClient = createApolloClient();