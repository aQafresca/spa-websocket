import { queryOptions, useSuspenseQuery } from '@tanstack/react-query';

import { charactersService } from './characters.service.ts';

export const characterQueries = {
  detail: (id: string) =>
    queryOptions({
      queryKey: ['character', id],
      queryFn: () => charactersService.getCharacterById(id),
      staleTime: 1000 * 60 * 2,
    }),
};

export const useCharacterById = (id: string) => {
  return useSuspenseQuery(characterQueries.detail(id));
};
