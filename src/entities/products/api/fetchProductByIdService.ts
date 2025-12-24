import type { IProducts } from '@/entities/products/model';
import { api } from '@/shared/api';
import { UrlEndpoints } from '@/shared/constants';

export const fetchProductsById = async (id: string) => {
  const response = await api.get<IProducts>(`${UrlEndpoints.PRODUCTS}/${id}`);

  return response.data;
};
