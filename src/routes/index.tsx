import { createFileRoute, stripSearchParams } from '@tanstack/react-router';

import HomePage from '@/pages/home';
import { defaultSearchValues, searchProductsSchema } from '@/pages/home/search.schema.ts';

export const Route = createFileRoute('/')({
  component: HomePage,
  validateSearch: searchProductsSchema,
  search: {
    middlewares: [stripSearchParams(defaultSearchValues)],
  },
});
