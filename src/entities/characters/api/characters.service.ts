import { GET_CHARACTER_BY_ID, GET_CHARACTERS } from '@/entities/characters/api';
import type { ICharacterFull, ICharactersApiResponse } from '@/entities/characters/module';
import { gqlClient } from '@/shared/api';

interface IGetCharactersQueryResponse {
  characters: ICharactersApiResponse;
}
interface IGetCharacterQueryResponse {
  character: ICharacterFull;
}

export const charactersService = {
  getCharacters: async (page: number, name = '') => {
    const response = await gqlClient.request<IGetCharactersQueryResponse>(GET_CHARACTERS, { page, name });

    return response.characters;
  },

  getCharacterById: async (id: string) => {
    const response = await gqlClient.request<IGetCharacterQueryResponse>(GET_CHARACTER_BY_ID, { id });

    return response.character;
  },
};
