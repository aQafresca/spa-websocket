import { Link } from '@tanstack/react-router';

import type { IProducts } from '@/entities/products/model';
import { ProductDetailRoute } from '@/shared/routes';

export const ProductCard = ({ id, price, title, discountPercentage, images }: IProducts) => {
  return (
    <Link to={ProductDetailRoute.to} params={{ productId: String(id) }} preload={'intent'}>
      <img src={images[0]} alt={title} loading="lazy" width={'300px'} height={'280px'} />
      <h3>{title}</h3>
      <p>{price}</p>
      <p>{discountPercentage}</p>
    </Link>
  );
};
