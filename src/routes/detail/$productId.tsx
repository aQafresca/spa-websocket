import DetailPage from '@pages/detail';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/detail/$productId')({
  component: RouteComponent,
});

function RouteComponent() {
  const { productId } = Route.useParams();

  return <DetailPage productId={productId} />;
}
