export interface IProducts {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: string[];
}

export interface IApiResponse {
  products: IProducts[];
  total: number;
  skip: number;
  limit: number;
}

export interface IFetchProductsParams {
  limit: number;
  skip: number;
  query?: string;
}
