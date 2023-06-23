export interface ICharacter {
  id: string;
  name: string;
  status: string;
  image: string;
  species: string;
  location: {
    name: string;
  };
}

export interface IPageInfo {
  count: number;
  pages: number;
  next: number | null;
  prev: number | null;
}

export interface ICharactersResponse {
  info: IPageInfo;
  results: ICharacter[];
}
