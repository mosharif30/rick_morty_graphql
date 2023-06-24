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
      type
      gender
      location {
        name
      }
    }
  }
`;

const getSingleCharacter = async ({
  queryKey,
}: {
  queryKey: (string | undefined)[];
}): Promise<ICharacter> => {
  try {
    if (!queryKey || !queryKey[1]) {
      throw new Error(
        "Invalid queryKey. Expected an array with ID as the second element."
      );
    }

    const variables = {
      id: queryKey[1],
    };

    const client = new GraphQLClient(graphqlAPI);

    const { charactersByIds } = await client.request<{
      charactersByIds: ICharacter[];
    }>(query, variables);

    return charactersByIds[0];
  } catch (error) {
    console.error("Error fetching character:", error);
    throw new Error("Failed to fetch character.");
  }
};

export default getSingleCharacter;
