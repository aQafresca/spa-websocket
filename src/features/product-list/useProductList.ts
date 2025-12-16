import { useNavigate } from '@tanstack/react-router';

import { useProducts } from '@/entities/products/api';
import { Route } from '@/routes';
import { LIMIT_PER_PAGE } from '@/shared/constants';

export const useProductList = (page: number) => {
  const navigate = useNavigate({ from: Route.fullPath });
  const { data } = useProducts(page, LIMIT_PER_PAGE);
  const totalItems = data?.total ?? 0;
  const totalPages = Math.ceil(totalItems / LIMIT_PER_PAGE);

  const handlePageChange = (newPage: number) => {
    void navigate({ search: { page: newPage } });
  };

  return { products: data?.products || [], currentPage: page, totalPages, handlePageChange };
};
