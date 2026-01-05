import { useCharactersQuery } from '@/entities/characters/api';
import type { ICharacterCard } from '@/entities/characters/module';
import { usePaginatedList } from '@/shared/hooks';
import type { IListParams, IPaginatedListState } from '@/shared/types';

export const useCharacterListGql = ({ page, search = '' }: IListParams): IPaginatedListState<ICharacterCard> => {
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
