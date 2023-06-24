/**
 * Represents a character.
 */
export interface ICharacter {
  id: string;
  name: string;
  status: string;
  image: string;
  species: string;
  type?: string;
  gender: string;
  location: {
    name: string;
  };
}

/**
 * Represents pagination information for characters.
 */
export interface IPageInfo {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
}

/**
 * Represents a response containing characters and pagination information.
 */
export interface ICharactersResponse {
  info: IPageInfo;
  results: ICharacter[];
}
