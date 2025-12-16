import { keepPreviousData, useQuery } from '@tanstack/react-query';

import { fetchProducts } from './fetchProductsService';
import type { IApiResponse } from '../model';

export const useProducts = (page: number, limit: number) => {
  const skip = (page - 1) * limit;

  return useQuery<IApiResponse>({
    queryKey: ['product', page, limit],
    queryFn: () => fetchProducts(limit, skip),
    placeholderData: keepPreviousData,
  });
};
