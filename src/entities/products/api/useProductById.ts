import { queryOptions, useSuspenseQuery } from '@tanstack/react-query'; // Добавьте импорт

import { productsService } from './products.service.ts';

export const productQueries = {
  detail: (id: string) =>
    queryOptions({
      queryKey: ['product', id],
      queryFn: () => productsService.getProductById(id),
    }),
};

export const useProductById = (id: string) => {
  return useSuspenseQuery(productQueries.detail(id));
};
