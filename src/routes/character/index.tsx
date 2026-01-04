import { createFileRoute, stripSearchParams } from '@tanstack/react-router';

import { searchCharactersSchema, defaultSearchValues } from '@/pages/graphql/search.schema.ts';

export const Route = createFileRoute('/character/')({
  validateSearch: searchCharactersSchema,
  search: {
    middlewares: [stripSearchParams(defaultSearchValues)],
  },
});
