import { keepPreviousData, useQuery } from '@tanstack/react-query';

import type { IApiResponse } from '@/entities/products/model';

import { fetchProducts } from './fetchProductsService.ts';

interface IUseProductsProps {
  limit: number;
  page: number;
  query?: string;
}

export const useProductsQuery = ({ page, limit, query }: IUseProductsProps) => {
  const skip = (page - 1) * limit;

  return useQuery<IApiResponse>({
    queryKey: ['product', { page, limit, query }],
    queryFn: () => fetchProducts({ limit, skip, query }),
    placeholderData: keepPreviousData,
    staleTime: 1000 * 60 * 2,
  });
};
