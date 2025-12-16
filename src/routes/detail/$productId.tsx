import { createFileRoute } from '@tanstack/react-router';

import DetailPage from '@/pages/detail';

export const Route = createFileRoute('/detail/$productId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { productId } = Route.useParams();

  return <DetailPage productId={productId} />;
}
