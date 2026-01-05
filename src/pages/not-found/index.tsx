import { ButtonElement } from '@/shared/components/button';
import { ButtonText } from '@/shared/constants';
import { useHandleClose } from '@/shared/hooks';
import { ProductRoute } from '@/shared/routes';

export const NotFoundPage = () => {
  const handleClose = useHandleClose(ProductRoute.to);

  return (
    <div className={'flex flex-col flex-grow justify-center items-center gap-6'}>
      <h1 className={'text-4xl md:text-6xl'}>Page not found</h1>
      <h2>Error 404</h2>
      <ButtonElement size={'medium'} onClick={handleClose}>
        {ButtonText.BACK}
      </ButtonElement>
    </div>
  );
};
