import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'; // Добавьте импорт

import { productsService } from './products.service.ts';

export const productQueries = {
  detail: (id: string) =>
    queryOptions({
      queryKey: ['product', id],
      queryFn: () => productsService.getProductById(id),
      staleTime: 1000 * 60 * 2,
    }),
};

export const useProductById = (id: string) => {
  return useSuspenseQuery(productQueries.detail(id));
};
