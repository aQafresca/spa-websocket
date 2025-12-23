import { useCharactersQuery } from '@/entities/characters/api/useCharactersQuery.ts';
import type { TCharacterCard } from '@/entities/characters/module/types.ts';
import { usePaginatedList } from '@/shared/hooks/usePaginatedList.ts';
import type { IListParams, IPaginatedListState } from '@/shared/types/list.ts';

export const useCharacterListGql = ({ page, search = '' }: IListParams): IPaginatedListState<TCharacterCard> => {
  const { data, isLoading, isError, isFetching } = useCharactersQuery(page, search);
  const totalPages = data?.info.pages ?? 0;

  return usePaginatedList({
    items: data?.results || [],
    page,
    isLoading,
    isError,
    isFetching,
    totalPages,
  });
};
