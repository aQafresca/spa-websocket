import * as React from 'react';

interface IDetailLayout {
  title: string;
  children: React.ReactNode;
}

export const DetailLayout = ({ title, children }: IDetailLayout) => {
  return (
    <div>
      <h3>{title}</h3>
      {children}
    </div>
  );
};
