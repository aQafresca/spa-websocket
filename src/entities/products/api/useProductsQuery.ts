import { keepPreviousData, useQuery } from '@tanstack/react-query';

import type { IApiResponse } from '@/entities/products/model';

import { productsService } from './products.service.ts';

interface IUseProductsProps {
  limit: number;
  page: number;
  query?: string;
}

export const useProductsQuery = ({ page, limit, query }: IUseProductsProps) => {
  const skip = (page - 1) * limit;

  return useQuery<IApiResponse>({
    queryKey: ['products', { page, limit, query }],
    queryFn: ({ signal }) => productsService.getProducts({ limit, skip, query, signal }),
    placeholderData: keepPreviousData,
  });
};
