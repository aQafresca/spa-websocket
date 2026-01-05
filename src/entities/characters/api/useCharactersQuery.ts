import { keepPreviousData, useQuery } from '@tanstack/react-query';

import type { ICharactersApiResponse } from '@/entities/characters/module';

import { charactersService } from './characters.service.ts';

export const useCharactersQuery = (page: number, search: string) => {
  return useQuery<ICharactersApiResponse>({
    queryKey: ['characters', page, search],
    queryFn: () => charactersService.getCharacters(page, search),
    placeholderData: keepPreviousData,
  });
};
