import { createFileRoute, stripSearchParams } from '@tanstack/react-router';

import HomePage from '@/pages/home';
import { searchProductsSchema } from '@/pages/home/search.shema.ts';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  validateSearch: searchProductsSchema,
  search: {
    middlewares: [stripSearchParams({ page: 1 })],
  },
});

function RouteComponent() {
  return <HomePage />;
}
