import type { IProducts } from '@/entities/products/model';

export const ProductDetailInfo = ({ description, images, brand, price, title, discountPercentage }: IProducts) => {
  return (
    <div>
      <img src={images[0]} alt={title} width={200} height={200} />
      <div>
        <h4>{brand}</h4>
        <ul>
          <li>
            <span>{description}</span>
          </li>
          <li>
            <span>{price}</span>
            <span>{discountPercentage}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};
