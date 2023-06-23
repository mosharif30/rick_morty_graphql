import { gql, GraphQLClient } from "graphql-request";
import { ICharacter } from "../Interfaces";

const graphqlAPI = "https://rickandmortyapi.com/graphql";

const query = gql`
  query myq($id: [ID!]!) {
    charactersByIds(ids: $id) {
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
`;

const client = new GraphQLClient(graphqlAPI);

// Retrieves characters from the GraphQL API based on the provided query key
const getSingleCharacter = async ({
  queryKey,
}: {
  queryKey: (string | undefined)[];
}): Promise<ICharacter> => {
  try {
    const variables = {
      id: queryKey[1], // Extract the page number from the query key
    };

    const { charactersByIds } = await client.request<{
      charactersByIds: ICharacter[];
    }>(query, variables);

    return charactersByIds[0];
  } catch (error) {
    console.error("Error fetching characters:", error);
    throw error;
  }
};

export default getSingleCharacter;
