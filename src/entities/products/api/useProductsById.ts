import { useQuery } from '@tanstack/react-query';

import type { IProductCard } from '../model';
import { fetchProductsById } from './fetchProductByIdService.ts';

export const useProductsById = (id: string) => {
  return useQuery<IProductCard>({
    queryKey: ['productId', id],
    queryFn: () => fetchProductsById(id),
    enabled: !!id,
  });
};
