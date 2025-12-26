import { useProductById } from '@/entities/products/api';
import { ProductDetailInfo } from '@/entities/products/ui';
import { DetailLayout } from '@/shared/components/detail-layout';
import { ProductDetailRoute } from '@/shared/routes';

const ProductDetailPage = () => {
  const { productId } = ProductDetailRoute.useParams();
  const { data } = useProductById(productId);

  return (
    <DetailLayout title={data.title}>
      <ProductDetailInfo {...data} />
    </DetailLayout>
  );
};

export default ProductDetailPage;
