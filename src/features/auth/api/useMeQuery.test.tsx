import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { renderHook, waitFor } from '@testing-library/react';
import React from 'react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

import { mockUser } from '@/shared/api/mocks';
import { tokenStorage } from '@/shared/lib/storage';

import { authService } from './auth.service';
import { useMeQuery } from './useMeQuery';

vi.mock('./auth.service');
vi.mock('@/shared/lib/storage');

const createWrapper = () => {
  const queryClient = new QueryClient({
    defaultOptions: { queries: { retry: false, refetchOnWindowFocus: false } },
  });

  return ({ children }: { children: React.ReactNode }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

describe('useMeQuery', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should fetch user data when token exists', async () => {
    vi.mocked(tokenStorage.get).mockReturnValue('fake-token');
    vi.mocked(authService.getCurrentUser).mockResolvedValue(mockUser);

    const { result } = renderHook(() => useMeQuery(), { wrapper: createWrapper() });

    await waitFor(() => {
      expect(result.current.data).toEqual(mockUser);
    });

    expect(result.current.data).toEqual(mockUser);
    expect(authService.getCurrentUser).toHaveBeenCalledTimes(1);
  });

  it('should not fetch user data when no token is present', async () => {
    vi.mocked(tokenStorage.get).mockReturnValue(null);

    renderHook(() => useMeQuery(), { wrapper: createWrapper() });

    await waitFor(() => {
      expect(authService.getCurrentUser).not.toHaveBeenCalled();
    });
  });
});
