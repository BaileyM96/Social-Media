import { ApolloProvider } from '@apollo/client';
import client from '../apolloClient'; 
import Page from './signup/page';

function MyApp() {
  return (
    <ApolloProvider client={client}>
      <Page />
    </ApolloProvider>
  );
}

export default MyApp;
