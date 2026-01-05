import { useProductsQuery } from '@/entities/products/api';
import type { IProducts } from '@/entities/products/model';
import { LIMIT_PER_PAGE } from '@/shared/constants';
import { usePaginatedList } from '@/shared/hooks/usePaginatedList.ts';
import type { IPaginatedListState } from '@/shared/types/list.ts';
import type { IListParams } from '@/shared/types/list.ts';

export const useProductListRest = ({ page, search }: IListParams): IPaginatedListState<IProducts> => {
  const { data, isLoading, isError, isFetching } = useProductsQuery({ page, limit: LIMIT_PER_PAGE, query: search });
  const totalItems = data?.total ?? 0;
  const totalPages = Math.ceil(totalItems / LIMIT_PER_PAGE);

  return usePaginatedList<IProducts>({
    items: data?.products || [],
    page,
    isLoading,
    isError,
    isFetching,
    totalPages,
  });
};
