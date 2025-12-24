import { gql } from 'graphql-request';

export const GET_CHARACTERS = gql`
  query GetCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
      info {
        pages
        count
      }
      results {
        id
        name
        image
        status
      }
    }
  }
`;
