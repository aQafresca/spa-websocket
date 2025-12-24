import { createFileRoute, stripSearchParams } from '@tanstack/react-router';

import { GraphqlPage } from '@/pages/graphql';
import { searchCharactersSchema } from '@/pages/graphql/search.shema.ts';
import { defaultSearchValues } from '@/pages/home/search.shema.ts';

export const Route = createFileRoute('/graphql')({
  component: RouteComponent,
  validateSearch: searchCharactersSchema,
  search: {
    middlewares: [stripSearchParams(defaultSearchValues)],
  },
});

function RouteComponent() {
  return <GraphqlPage />;
}
