import { createFileRoute, stripSearchParams } from '@tanstack/react-router';

import { GraphqlPage } from '@/pages/graphql';
import { searchCharactersSchema, defaultSearchValues } from '@/pages/graphql/search.schema.ts';

export const Route = createFileRoute('/character/')({
  component: GraphqlPage,
  validateSearch: searchCharactersSchema,
  search: {
    middlewares: [stripSearchParams(defaultSearchValues)],
  },
});
