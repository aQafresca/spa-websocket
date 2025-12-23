import { keepPreviousData, useQuery } from '@tanstack/react-query';

import type { ICharactersApiResponse } from '@/entities/characters/module/types.ts';

import { charactersService } from './characters.service.ts';

export const useCharactersQuery = (page: number, search: string) => {
  return useQuery<ICharactersApiResponse>({
    queryKey: ['character-gql', page, search],
    queryFn: () => charactersService.getCharacters(page, search),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 2,
  });
};
