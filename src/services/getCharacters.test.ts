import getCharacters from "./getCharacters";

describe("getCharacters", () => {
  it("fetches characters from the GraphQL API", async () => {
    const mockCharactersResponse = {
      characters: {
        info: { count: 826, pages: 42, next: 2, prev: null },
        results: [
          {
            id: "1",
            name: "Rick Sanchez",
            status: "Alive",
            image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
            species: "Human",
            location: { name: "Citadel of Ricks" },
          },
          {
            id: "2",
            name: "Morty Smith",
            status: "Alive",
            image: "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
            species: "Human",
            location: { name: "Citadel of Ricks" },
          },
          {
            id: "3",
            name: "Summer Smith",
            status: "Alive",
            image: "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
            species: "Human",
            location: { name: "Earth (Replacement Dimension)" },
          },
          {
            id: "4",
            name: "Beth Smith",
            status: "Alive",
            image: "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
            species: "Human",
            location: { name: "Earth (Replacement Dimension)" },
          },
          {
            id: "5",
            name: "Jerry Smith",
            status: "Alive",
            image: "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
            species: "Human",
            location: { name: "Earth (Replacement Dimension)" },
          },
          {
            id: "6",
            name: "Abadango Cluster Princess",
            status: "Alive",
            image: "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
            species: "Alien",
            location: { name: "Abadango" },
          },
          {
            id: "7",
            name: "Abradolf Lincler",
            status: "unknown",
            image: "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
            species: "Human",
            location: { name: "Testicle Monster Dimension" },
          },
          {
            id: "8",
            name: "Adjudicator Rick",
            status: "Dead",
            image: "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
            species: "Human",
            location: { name: "Citadel of Ricks" },
          },
          {
            id: "9",
            name: "Agency Director",
            status: "Dead",
            image: "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
            species: "Human",
            location: { name: "Earth (Replacement Dimension)" },
          },
          {
            id: "10",
            name: "Alan Rails",
            status: "Dead",
            image: "https://rickandmortyapi.com/api/character/avatar/10.jpeg",
            species: "Human",
            location: { name: "Worldender's lair" },
          },
          {
            id: "11",
            name: "Albert Einstein",
            status: "Dead",
            image: "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
            species: "Human",
            location: { name: "Earth (Replacement Dimension)" },
          },
          {
            id: "12",
            name: "Alexander",
            status: "Dead",
            image: "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
            species: "Human",
            location: { name: "Anatomy Park" },
          },
          {
            id: "13",
            name: "Alien Googah",
            status: "unknown",
            image: "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
            species: "Alien",
            location: { name: "Earth (Replacement Dimension)" },
          },
          {
            id: "14",
            name: "Alien Morty",
            status: "unknown",
            image: "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
            species: "Alien",
            location: { name: "Citadel of Ricks" },
          },
          {
            id: "15",
            name: "Alien Rick",
            status: "unknown",
            image: "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
            species: "Alien",
            location: { name: "Citadel of Ricks" },
          },
          {
            id: "16",
            name: "Amish Cyborg",
            status: "Dead",
            image: "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
            species: "Alien",
            location: { name: "Earth (Replacement Dimension)" },
          },
          {
            id: "17",
            name: "Annie",
            status: "Alive",
            image: "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
            species: "Human",
            location: { name: "Anatomy Park" },
          },
          {
            id: "18",
            name: "Antenna Morty",
            status: "Alive",
            image: "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
            species: "Human",
            location: { name: "Citadel of Ricks" },
          },
          {
            id: "19",
            name: "Antenna Rick",
            status: "unknown",
            image: "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
            species: "Human",
            location: { name: "unknown" },
          },
          {
            id: "20",
            name: "Ants in my Eyes Johnson",
            status: "unknown",
            image: "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
            species: "Human",
            location: { name: "Interdimensional Cable" },
          },
        ],
      },
    };

    // Mocking the GraphQLClient request function
    jest.mock("graphql-request", () => ({
      gql: jest.fn(),
      GraphQLClient: jest.fn().mockImplementation(() => ({
        request: jest.fn().mockResolvedValue(mockCharactersResponse),
      })),
    }));

    const page = 1;
    const queryKey = ["characters", page];
    const result = await getCharacters({ queryKey });

    expect(result).toEqual(mockCharactersResponse.characters);
  });
});
