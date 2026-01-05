import { ButtonElement } from '@/shared/components/button';
import { ButtonText } from '@/shared/constants';
import { useHandleClose } from '@/shared/hooks';
import { ProductRoute } from '@/shared/routes';

interface IGlobalErrorBoundary {
  error: Error;
  resetErrorBoundary: () => void;
}

export function ErrorFallback({ error, resetErrorBoundary }: IGlobalErrorBoundary) {
  const handleClose = useHandleClose(ProductRoute.to);

  return (
    <div className={'flex flex-col flex-grow justify-center items-center gap-6'}>
      <h2>Ops! Something went wrong</h2>
      <pre>{error.message}</pre>

      <div className={'flex gap-2'}>
        <ButtonElement onClick={handleClose}>{ButtonText.BACK}</ButtonElement>
        <ButtonElement onClick={resetErrorBoundary} variant={'outline'}>
          {ButtonText.RETRY}
        </ButtonElement>
      </div>
    </div>
  );
}
