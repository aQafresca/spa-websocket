import type { IProductCard } from '@/entities/products/model';
import { ProductCard } from '@/entities/products/ui/card.tsx';
import { Pagination } from '@/shared/components/pagination';

interface IProductList {
  products: IProductCard[];
  currentPage: number;
  totalPages: number;
  onPageChange: (_page: number) => void;
}

export const ProductList = ({ products, currentPage, totalPages, onPageChange }: IProductList) => {
  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}

      <Pagination currentPage={currentPage} total={totalPages} onChangePage={onPageChange} />
    </div>
  );
};
