import { createFileRoute, stripSearchParams } from '@tanstack/react-router';

import { searchCharactersSchema, defaultSearchValues } from '@/pages/graphql/search.schema.ts';
import { Loader } from '@/shared/components/loader';

export const Route = createFileRoute('/character/')({
  pendingComponent: Loader,
  validateSearch: searchCharactersSchema,
  search: {
    middlewares: [stripSearchParams(defaultSearchValues)],
  },
});
