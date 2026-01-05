import { Link } from '@tanstack/react-router';

import type { IProductCardProps } from '@/entities/products/model';
import { StarRating } from '@/shared/components/rating';
import { ProductCardLabel } from '@/shared/constants';
import { calculateDiscountedPrice } from '@/shared/lib/utils';
import { ProductDetailRoute } from '@/shared/routes';

import { PriceDisplay } from './priceDisplay.tsx';

export const ProductCard = ({ product, isPriority }: IProductCardProps) => {
  const { id, price, title, rating, discountPercentage, images } = product;
  const finalPrice = calculateDiscountedPrice(price, discountPercentage);
  const hasDiscount = discountPercentage > 0;

  return (
    <Link
      className={
        'relative w-[300px] h-[450px] border border-primary rounded-md transition-transform duration-200 hover:scale-105'
      }
      to={ProductDetailRoute.to}
      params={{ productId: String(id) }}
      preload={'intent'}
    >
      {hasDiscount && (
        <div className={'flex flex-col leading-none absolute bg-red-500 top-4 right-0 text-center px-4 py-1'}>
          <span>sale</span>
          <span>{Math.round(discountPercentage)} %</span>
        </div>
      )}
      <img
        src={images[0]}
        alt={title}
        width={300}
        height={280}
        fetchPriority={isPriority ? 'high' : 'auto'}
        loading={isPriority ? 'eager' : 'lazy'}
        className="w-[300px] h-[280px] object-cover"
      />
      <ul className={'flex flex-col gap-3 p-3'}>
        <li>
          <h3 className={'text-center'}>{title}</h3>
        </li>
        <li className={'flex justify-around gap-2 text-lg'}>
          <PriceDisplay price={price} hasDiscount={hasDiscount} finalPrice={finalPrice} />
        </li>
        <li className={'flex gap-3 mx-auto'}>
          <span>{ProductCardLabel.rating}</span>
          <StarRating rating={rating} />
        </li>
      </ul>
    </Link>
  );
};
