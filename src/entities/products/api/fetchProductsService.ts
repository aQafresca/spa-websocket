import { api } from '@/shared/api';
import { UrlEndpoints } from '@/shared/constants';

import type { IApiResponse } from '../model';

export const fetchProducts = async (limit: number = 10, skip: number = 0) => {
  const response = await api.get<IApiResponse>(`${UrlEndpoints.PRODUCTS}?limit=${limit}&skip=${skip}`);

  return response.data;
};
