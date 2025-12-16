import { ProductList } from '@/features/product-list/index.tsx';
import { useProductList } from '@/features/product-list/useProductList.ts';
import { Route } from '@/routes';

export const ProductListContainer = () => {
  const { page } = Route.useSearch();
  const { products, currentPage, totalPages, handlePageChange } = useProductList(page);

  return (
    <ProductList
      products={products}
      currentPage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
};
