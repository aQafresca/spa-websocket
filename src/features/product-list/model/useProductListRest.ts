import { useProductsQuery } from '@/entities/products/api/rest';
import type { IProductListViewState } from '@/entities/products/model';
import { useProductParams } from '@/features/product-list/model/useProductParams.ts';
import { LIMIT_PER_PAGE } from '@/shared/constants';

export const useProductListRest = (): IProductListViewState => {
  const { search, handleSearch, page, handlePageChange } = useProductParams();

  const { data, isLoading, isError, isFetching } = useProductsQuery({ page, limit: LIMIT_PER_PAGE, query: search });
  const totalItems = data?.total ?? 0;
  const totalPages = Math.ceil(totalItems / LIMIT_PER_PAGE);

  return {
    products: data?.products || [],
    isLoading,
    isError,
    isFetching,
    currentPage: page,
    totalPages,
    handleSearch,
    handlePageChange,
  };
};
