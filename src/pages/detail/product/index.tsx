import { useProductById } from '@/entities/products/api';
import { ProductDetailInfo } from '@/entities/products/ui';
import { DetailLayout } from '@/shared/components/detail-layout';
import { useHandleClose } from '@/shared/hooks';
import { ProductRoute, ProductDetailRoute } from '@/shared/routes';

const ProductDetailPage = () => {
  const { productId } = ProductDetailRoute.useParams();
  const { data } = useProductById(productId);

  const handleClose = useHandleClose(ProductRoute.to);

  return (
    <DetailLayout onClose={handleClose} title={data.title}>
      <ProductDetailInfo {...data} />
    </DetailLayout>
  );
};

export default ProductDetailPage;
