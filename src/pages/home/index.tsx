import { useProductListRest } from '@/features/product-list/model/useProductListRest.ts';
import { ProductListContainer } from '@/features/product-list/ui/productListContainer.tsx';
import { Route } from '@/routes';

const HomePage = () => {
  const { search } = Route.useSearch();

  const restState = useProductListRest();

  return (
    <div>
      <ProductListContainer state={restState} search={search} />
    </div>
  );
};

export default HomePage;
