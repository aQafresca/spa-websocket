import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'x-small' | 'small' | 'medium' | 'large';
  variant?: 'contained' | 'outline' | 'accent';
}

const sizeClasses = {
  'x-small': 'h-[25px] w-[25px] text-xs',
  small: 'px-3 py-1.5 text-sm w-full max-w-[100px]',
  medium: 'px-4 py-2 text-base w-full max-w-[200px]',
  large: 'px-6 py-3 text-lg w-full max-w-[300px]',
};

const variantClasses = {
  contained: 'bg-primary text-white hover:brightness-90 focus:ring-accent',
  outline:
    'bg-transparent text-white border hover:brightness-90 hover:border-accent hover:text-accent focus:ring-accent',
  accent: 'bg-accent text-dark hover:brightness-90 focus:ring-red-500',
};

export const ButtonElement: FC<IProps> = ({
  size = 'medium',
  variant = 'contained',
  type = 'button',
  children,
  className,
  disabled,
  ...props
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      {...props}
      className={clsx(
        'rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed',
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};
