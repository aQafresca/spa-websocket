import { queryOptions, useQuery } from '@tanstack/react-query';

import { authService } from '@/features/auth/api/auth.service.ts';
import { tokenStorage } from '@/shared/lib/storage';

export const meQueries = {
  details: () =>
    queryOptions({
      queryKey: ['auth-me'],
      queryFn: () => authService.getCurrentUser(),
      retry: false,
    }),
};

export const useMeQuery = () => {
  const token = tokenStorage.get();

  return useQuery({ ...meQueries.details(), enabled: !!token });
};
