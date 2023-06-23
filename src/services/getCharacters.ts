import { gql, GraphQLClient } from "graphql-request";
import { ICharactersResponse } from "../Interfaces";

const graphqlAPI = "https://rickandmortyapi.com/graphql";

const query = gql`
  query myq($page: Int!) {
    characters(page: $page) {
      info {
        count
        pages
        next
        prev
      }
      results {
        id
        name
        status
        image
        species
        location {
          name
        }
      }
    }
  }
`;

const client = new GraphQLClient(graphqlAPI);

// Retrieves characters from the GraphQL API based on the provided query key
const getCharacters = async ({
  queryKey,
}: {
  queryKey: (string | number)[];
}): Promise<ICharactersResponse> => {
  try {
    const variables = {
      page: queryKey[1], // Extract the page number from the query key
    };
    const { characters } = await client.request<{
      characters: ICharactersResponse;
    }>(query, variables);
    return characters;
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export default getCharacters;
