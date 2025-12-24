import { GET_CHARACTERS } from '@/entities/characters/api/charactersQueries.ts';
import type { ICharactersApiResponse } from '@/entities/characters/module/types.ts';
import { gqlClient } from '@/shared/api/grapgqlClient.ts';

export interface IGetCharactersResponse {
  characters: ICharactersApiResponse;
}

export const charactersService = {
  getCharacters: async (page: number, name = '') => {
    const response = await gqlClient.request<IGetCharactersResponse>(GET_CHARACTERS, { page, name });

    return response.characters;
  },
};
