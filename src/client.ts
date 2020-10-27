import { ApolloClient, InMemoryCache } from '@apollo/client';

export const client = new ApolloClient({
  uri: 'http://homework.nextbil.com/graphql',
  cache: new InMemoryCache()
});