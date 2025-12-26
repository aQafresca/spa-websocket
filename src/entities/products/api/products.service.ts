import type { IApiResponse, IFetchProductsParams, IProducts } from '@/entities/products/model';
import { api } from '@/shared/api';
import { UrlEndpoints } from '@/shared/constants';

export const productsService = {
  getProducts: async ({ limit, skip, query }: IFetchProductsParams) => {
    const baseUrl = query ? `${UrlEndpoints.PRODUCTS}/search` : `${UrlEndpoints.PRODUCTS}`;
    const response = await api.get<IApiResponse>(baseUrl, { params: { limit, skip, q: query } });

    return response.data;
  },

  getProductById: async (id: string) => {
    const response = await api.get<IProducts>(`${UrlEndpoints.PRODUCTS}/${id}`);

    return response.data;
  },
};
