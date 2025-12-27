import { createFileRoute, stripSearchParams } from '@tanstack/react-router';

import { GraphqlPage } from '@/pages/graphql';
import { searchCharactersSchema } from '@/pages/graphql/search.shema.ts';
import { defaultSearchValues } from '@/pages/home/search.shema.ts';

export const Route = createFileRoute('/character/')({
  component: GraphqlPage,
  validateSearch: searchCharactersSchema,
  search: {
    middlewares: [stripSearchParams(defaultSearchValues)],
  },
});
