import type { IProducts } from '@/entities/products/model';

export const ProductCard = (params: IProducts) => {
  return (
    <div>
      <img src={params.images[0]} alt={params.title} width={200} height={200} />
      <h3>{params.title}</h3>
      <p>{params.price}</p>
      <p>{params.discountPercentage}</p>
    </div>
  );
};
