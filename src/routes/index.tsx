import { createFileRoute, stripSearchParams } from '@tanstack/react-router';

import HomePage from '@/pages/home';
import { defaultSearchValues, searchProductsSchema } from '@/pages/home/search.schema.ts';
import { Loader } from '@/shared/components/loader';

export const Route = createFileRoute('/')({
  pendingComponent: Loader,
  component: HomePage,
  validateSearch: searchProductsSchema,
  search: {
    middlewares: [stripSearchParams(defaultSearchValues)],
  },
});
