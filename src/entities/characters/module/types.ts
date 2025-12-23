export interface ICharacterFull {
  id: number;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
}

export interface ICharacterApiResponse {
  character: ICharacterFull;
}

export interface Info {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}

export interface ICharactersApiResponse {
  info: Info;
  results: ICharacterFull[];
}

export type TCharacterCard = Pick<ICharacterFull, 'id' | 'name' | 'status' | 'species' | 'gender' | 'image'>;
