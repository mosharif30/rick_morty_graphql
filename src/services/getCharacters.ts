import { request, gql } from "graphql-request";
const getCharacters = async ({
  queryKey,
}: {
  queryKey: (string | number)[];
}) => {
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
        }
      }
    }
  `;
  console.log(queryKey);

  const variables = {
    page: queryKey[1],
  };
  const result = await request<any>(graphqlAPI, query, variables);
  return result.characters;
};
export default getCharacters;
