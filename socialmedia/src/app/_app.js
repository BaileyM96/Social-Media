import { ApolloProvider } from '@apollo/client';
import { apolloClient } from './utils/mutations';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp;
