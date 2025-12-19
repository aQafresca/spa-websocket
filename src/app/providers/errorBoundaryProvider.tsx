import { useQueryErrorResetBoundary } from '@tanstack/react-query';
import * as React from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { ErrorFallback } from '@/shared/components/error-fallback';

export function GlobalErrorBoundary({ children }: { children: React.ReactNode }) {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={reset}>
      {children}
    </ErrorBoundary>
  );
}
