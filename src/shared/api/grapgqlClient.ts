import { GraphQLClient } from 'graphql-request';

const GQL_ENDPOINT = 'https://rickandmortyapi.com/graphql';

export const gqlClient = new GraphQLClient(GQL_ENDPOINT);
