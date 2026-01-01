import * as React from 'react';

import { ButtonElement } from '@/shared/components/button';
import { ButtonText } from '@/shared/constants';

interface IDetailLayout {
  title: string;
  children: React.ReactNode;
  onClose: () => void;
}

export const DetailLayout = ({ title, children, onClose }: IDetailLayout) => {
  return (
    <div className={'flex flex-grow flex-col items-center justify-center gap-4'}>
      <h3 className={'border-b-2 border-gray-light text-center'}>{title}</h3>
      {children}
      <ButtonElement size={'medium'} onClick={onClose}>
        {ButtonText.CLOSE}
      </ButtonElement>
    </div>
  );
};
