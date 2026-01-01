import type { IProducts } from '@/entities/products/model';
import { StarRating } from '@/shared/components/rating';
import { calculateDiscountedPrice } from '@/shared/lib/utils';

import { PriceDisplay } from './priceDisplay.tsx';

export const ProductDetailInfo = ({
  description,
  images,
  brand,
  price,
  title,
  rating,
  discountPercentage,
  stock,
}: IProducts) => {
  const finalPrice = calculateDiscountedPrice(price, discountPercentage);
  const hasDiscount = discountPercentage > 0;

  return (
    <div className={'flex flex-col gap-6 items-center sm:flex-row sm:items-center'}>
      <div className={'flex flex-col items-center justify-between w-ful'}>
        <img className={'w-[300px]'} src={images[0]} alt={title} loading={'lazy'} width={300} height={250} />
        <StarRating rating={rating} />
      </div>
      <ul className={'flex flex-col gap-3'}>
        <li className={'flex gap-3'}>
          <span>stock</span>
          <span className={'text-gray-400'}>{stock}</span>
        </li>
        <li>
          <p className={'rounded bg-gray-light p-2'}>{description}</p>
        </li>
        <li className={'flex items-center gap-3'}>
          <h4>{brand}</h4>
          <PriceDisplay price={price} finalPrice={finalPrice} hasDiscount={hasDiscount} />
        </li>
      </ul>
    </div>
  );
};
