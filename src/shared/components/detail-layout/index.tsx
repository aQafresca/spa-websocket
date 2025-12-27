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
    <div>
      <h3>{title}</h3>
      {children}
      <ButtonElement onClick={onClose}>{ButtonText.CLOSE}</ButtonElement>
    </div>
  );
};
