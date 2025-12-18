import { createFileRoute, stripSearchParams } from '@tanstack/react-router';

import HomePage from '@/pages/home';
import { defaultSearchValues } from '@/pages/home/search.shema.ts';
import { searchProductsSchema } from '@/pages/home/search.shema.ts';

export const Route = createFileRoute('/')({
  component: RouteComponent,
  validateSearch: searchProductsSchema,
  search: {
    middlewares: [stripSearchParams(defaultSearchValues)],
  },
});

function RouteComponent() {
  return <HomePage />;
}
