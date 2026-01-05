import { useMutation, useQueryClient } from '@tanstack/react-query';

import { meQueries } from '@/features/auth/api/useMeQuery.ts';
import type { IAuthRequest } from '@/features/auth/model';
import { tokenStorage } from '@/shared/lib/storage';

import { authService } from './auth.service.ts';

export const useLoginUser = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['auth-login'],
    mutationFn: (credentials: IAuthRequest) => authService.login(credentials),
    onSuccess: (data) => {
      tokenStorage.set(data.accessToken);
      void queryClient.invalidateQueries(meQueries.details());
    },
  });
};
