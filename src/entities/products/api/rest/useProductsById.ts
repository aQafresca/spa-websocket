import { useQuery } from '@tanstack/react-query';

import type { IProducts } from '@/entities/products/model';

import { fetchProductsById } from './fetchProductByIdService.ts';

export const useProductsById = (id: string) => {
  return useQuery<IProducts>({
    queryKey: ['productId', id],
    queryFn: () => fetchProductsById(id),
    enabled: !!id,
  });
};
