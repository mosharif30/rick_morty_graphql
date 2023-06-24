import { render } from "@testing-library/react";
import CharacterCard from "./CharacterCard";
import "@testing-library/jest-dom/extend-expect";

describe("Character component", () => {
  const mockCharacter = {
    id: "1",
    gender: "male",
    image: "https://example.com/character.jpg",
    name: "Test Character",
    status: "Alive",
    species: "Human",
    location: { name: "Earth" },
  };

  test("renders character information", () => {
    const { getByAltText, getByText } = render(
      <CharacterCard character={mockCharacter} />
    );

    const characterImage = getByAltText(mockCharacter.name);
    const characterName = getByText(mockCharacter.name);
    const characterStatusAndSpecies = getByText(
      `${mockCharacter.status} - ${mockCharacter.species}`
    );
    const characterLastSeenLocationLabel = getByText("Last seen on");
    const characterLastSeenLocation = getByText(mockCharacter.location.name);

    expect(characterImage).toBeInTheDocument();
    expect(characterName).toBeInTheDocument();
    expect(characterStatusAndSpecies).toBeInTheDocument();
    expect(characterLastSeenLocationLabel).toBeInTheDocument();
    expect(characterLastSeenLocation).toBeInTheDocument();
  });
});
