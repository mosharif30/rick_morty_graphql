import {
  ICharacter,
  IPageInfo,
  ICharactersResponse,
} from "./index";

describe("Interfaces", () => {
  describe("ICharacter", () => {
    it("should have the required properties", () => {
      const character: ICharacter = {
        id: "1",
        name: "John Doe",
        status: "Alive",
        image: "https://example.com/image.jpg",
        species: "Human",
        gender: "Male",
        location: {
          name: "Earth",
        },
      };

      expect(character.id).toEqual("1");
      expect(character.name).toEqual("John Doe");
      expect(character.status).toEqual("Alive");
      expect(character.image).toEqual("https://example.com/image.jpg");
      expect(character.species).toEqual("Human");
      expect(character.gender).toEqual("Male");
      expect(character.location.name).toEqual("Earth");
    });

    it("should allow optional 'type' property", () => {
      const character: ICharacter = {
        id: "1",
        name: "John Doe",
        status: "Alive",
        image: "https://example.com/image.jpg",
        species: "Human",
        gender: "Male",
        location: {
          name: "Earth",
        },
        type: "Main",
      };

      expect(character.type).toEqual("Main");
    });
  });

  describe("IPageInfo", () => {
    it("should have the required properties", () => {
      const pageInfo: IPageInfo = {
        count: 10,
        pages: 2,
        next: 2,
        prev: null,
      };

      expect(pageInfo.count).toEqual(10);
      expect(pageInfo.pages).toEqual(2);
      expect(pageInfo.next).toEqual(2);
      expect(pageInfo.prev).toBeNull();
    });
  });

  describe("ICharactersResponse", () => {
    it("should have the required properties", () => {
      const charactersResponse: ICharactersResponse = {
        info: {
          count: 10,
          pages: 2,
          next: 2,
          prev: null,
        },
        results: [
          {
            id: "1",
            name: "John Doe",
            status: "Alive",
            image: "https://example.com/image.jpg",
            species: "Human",
            gender: "Male",
            location: {
              name: "Earth",
            },
          },
        ],
      };

      expect(charactersResponse.info.count).toEqual(10);
      expect(charactersResponse.info.pages).toEqual(2);
      expect(charactersResponse.info.next).toEqual(2);
      expect(charactersResponse.info.prev).toBeNull();

      expect(charactersResponse.results.length).toEqual(1);
      expect(charactersResponse.results[0].name).toEqual("John Doe");
    });
  });
});
