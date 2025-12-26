export interface ICharacterCard {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
}

export interface ICharacterFull {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
  origin: {
    id: number;
    name: string;
  };
  location: {
    id: number;
    name: string;
  };
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ICharactersApiResponse {
  info: Info;
  results: ICharacterCard[];
}
