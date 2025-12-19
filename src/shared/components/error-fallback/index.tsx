import { ButtonElement } from '@/shared/components/button';
import { ButtonText } from '@/shared/constants';

interface IGlobalErrorBoundary {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorFallback({ error, resetErrorBoundary }: IGlobalErrorBoundary) {
  return (
    <div>
      <h2>Ops! Something went wrong</h2>
      <pre>{error.message}</pre>
      <ButtonElement onClick={resetErrorBoundary}>{ButtonText.RETRY}</ButtonElement>
    </div>
  );
}
