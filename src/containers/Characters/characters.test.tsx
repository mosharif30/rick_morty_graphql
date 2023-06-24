import { render, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Characters from "./Characters";
import "@testing-library/jest-dom/extend-expect";
jest.mock("react-query", () => ({
  useQuery: jest.fn(),
}));

describe("Characters component", () => {
  const mockCharacter = {
    id: 1,
    image: "https://example.com/character.jpg",
    name: "Test Character",
    status: "Alive",
    species: "Human",
    location: { name: "Earth" },
  };

  const mockData = {
    info: { pages: 5 },
    results: [mockCharacter],
  };

  beforeEach(() => {
    jest.clearAllMocks();
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    jest.spyOn(window, "scrollTo").mockImplementation(() => {});
    jest.requireMock("react-query").useQuery.mockReturnValue({
      data: mockData,
      status: "success",
    });
  });

  test("renders character information", async () => {
    const { getByText } = render(
      <MemoryRouter>
        <Characters />
      </MemoryRouter>
    );

    await waitFor(() => {
      const pageText = getByText("Page is 1");
      const characterName = getByText(mockCharacter.name);
      const characterStatusAndSpecies = getByText(
        `${mockCharacter.status} - ${mockCharacter.species}`
      );
      const pagination = getByText("1");

      expect(pageText).toBeInTheDocument();
      expect(characterName).toBeInTheDocument();
      expect(characterStatusAndSpecies).toBeInTheDocument();
      expect(pagination).toBeInTheDocument();
    });
  });
});
