import { createFileRoute, stripSearchParams } from '@tanstack/react-router';

import { defaultSearchValues, loginSearchSchema } from '@/pages/login/search.schema.ts';

export const Route = createFileRoute('/_guest/login')({
  validateSearch: loginSearchSchema,
  search: {
    middlewares: [stripSearchParams(defaultSearchValues)],
  },
});
