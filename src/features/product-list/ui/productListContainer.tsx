import type { IProductListViewState } from '@/entities/products/model';
import { ProductList } from '@/features/product-list/ui/productList.tsx';
import { ProductSearchForm } from '@/features/product-search/ui/productSearchForm.tsx';
import { EmptyList } from '@/shared/components/empty-list';
import { Loader } from '@/shared/components/loader';

interface IProps {
  state: IProductListViewState;
  search: string;
}

export const ProductListContainer = ({ state, search }: IProps) => {
  const { products, isFetching, isError, isLoading, currentPage, totalPages, handlePageChange, handleSearch } = state;

  const hasError = isError && !isLoading;
  const hasNoResults = !isLoading && !isFetching && products.length === 0;
  const showEmptyList = hasNoResults || hasError;
  const showProducts = !isLoading && !showEmptyList;

  return (
    <>
      <ProductSearchForm
        label={'product'}
        placeholder={'enter product'}
        onSearch={handleSearch}
        initialValue={search}
      />

      {isFetching && <Loader />}
      {showEmptyList && <EmptyList message={`Product "${search}"`} />}
      {showProducts && (
        <ProductList
          products={products}
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};
