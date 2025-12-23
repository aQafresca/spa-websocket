import type { IProducts } from '@/entities/products/model';
import { ProductCard } from '@/entities/products/ui/card.tsx';
import { useProductListRest } from '@/features/product-list/model/useProductListRest.ts';
import { Route } from '@/routes';
import { ListContainer } from '@/shared/components/list-container/listContainer.tsx';
import { SearchForm } from '@/shared/components/search-form';
import { useListParams } from '@/shared/hooks/useListParams.ts';

const HomePage = () => {
  const { page, search } = Route.useSearch();
  const navigate = Route.useNavigate();

  const listParams = useListParams({
    params: { page, search: search },
    onChange: (params) => navigate({ search: () => params }),
  });

  const state = useProductListRest({ page: listParams.page, search: listParams.search });

  return (
    <div>
      <SearchForm
        label={'products'}
        initialValue={listParams.search}
        placeholder={'enter product'}
        onSubmit={listParams.handleSearch}
      />
      <ListContainer<IProducts>
        state={{
          ...state,
          handlePageChange: listParams.handlePageChange,
          handleSearch: listParams.handleSearch,
        }}
        emptyMessage={`Product ${search} not found.`}
        renderItem={(product) => <ProductCard key={product.id} {...product} />}
      />
    </div>
  );
};

export default HomePage;
