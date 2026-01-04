import type { IProducts } from '@/entities/products/model';
import { ProductCard } from '@/entities/products/ui';
import { useProductListRest } from '@/features/product-list/model/useProductListRest.ts';
import { ListContainer } from '@/shared/components/list-container/listContainer.tsx';
import { SearchForm } from '@/shared/components/search-form';
import { useListParams } from '@/shared/hooks';
import { ProductRoute } from '@/shared/routes';

const HomePage = () => {
  const { page, search } = ProductRoute.useSearch();
  const navigate = ProductRoute.useNavigate();

  const listParams = useListParams({
    params: { page, search: search },
    onChange: (params) => navigate({ search: () => params }),
  });

  const state = useProductListRest({ page: listParams.page, search: listParams.search });

  return (
    <div className={'flex flex-col gap-3 items-center justify-center w-full'}>
      <SearchForm initialValue={listParams.search} placeholder={'enter product'} onSubmit={listParams.handleSearch} />
      <ListContainer<IProducts>
        state={{
          ...state,
          handlePageChange: listParams.handlePageChange,
          handleSearch: listParams.handleSearch,
        }}
        emptyMessage={`Product ${search} not found.`}
        renderItem={(product) => {
          const index = state.items.indexOf(product);

          return <ProductCard key={product.id} product={product} isPriority={index === 0} />;
        }}
      />
    </div>
  );
};

export default HomePage;
