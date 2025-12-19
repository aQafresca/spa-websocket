import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';

import { handleGlobalError } from '@/app/handleQueryError.ts';

export const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: handleGlobalError,
  }),
  mutationCache: new MutationCache({
    onError: handleGlobalError,
  }),
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});
