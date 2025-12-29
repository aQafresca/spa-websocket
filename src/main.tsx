import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { GlobalErrorBoundary } from '@/app/providers/errorBoundaryProvider.tsx';
import { ToastProvider } from '@/app/providers/toastProvider.tsx';
import { queryClient } from '@/app/queryClient.ts';

import '@/shared/lib/zod';
import { App } from './App.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <GlobalErrorBoundary>
        <ToastProvider />
        <App />
      </GlobalErrorBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  </StrictMode>,
);
