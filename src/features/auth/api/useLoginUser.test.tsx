import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import React from 'react';
import { vi, it, expect } from 'vitest';

import { mockUser } from '@/shared/api/mocks';
import { tokenStorage } from '@/shared/lib/storage';

import { authService } from './auth.service';
import { useLoginUser } from './useLoginUser';

vi.mock('./auth.service');
vi.mock('@/shared/lib/storage');

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: {
      mutations: {
        retry: false,
      },
    },
  });

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

it('should set token on successful login', async () => {
  const mockResponse = {
    accessToken: 'new-secure-token',
    refreshToken: '...',
    ...mockUser,
  };

  const credentials = { username: 'john', password: '123' };

  vi.mocked(authService.login).mockResolvedValue(mockResponse);

  const { result } = renderHook(() => useLoginUser(), {
    wrapper: createWrapper(),
  });

  result.current.mutate(credentials);

  await waitFor(() => {
    expect(tokenStorage.set).toHaveBeenCalledWith('new-secure-token');
  });
});
