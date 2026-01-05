import { createFileRoute } from '@tanstack/react-router';

import { productQueries } from '@/entities/products/api';
import ProductDetailPage from '@/pages/detail/product';
import { ErrorFallback } from '@/shared/components/error-fallback';
import { Loader } from '@/shared/components/loader';

export const Route = createFileRoute('/product/$productId')({
  loader: ({ context: { queryClient }, params: { productId } }) =>
    queryClient.ensureQueryData(productQueries.detail(productId)),
  pendingComponent: Loader,
  component: ProductDetailPage,
  errorComponent: ({ error, reset }) => <ErrorFallback error={error} resetErrorBoundary={reset} />,
});
