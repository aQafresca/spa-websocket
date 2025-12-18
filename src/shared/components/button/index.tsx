import clsx from 'clsx';
import type { ButtonHTMLAttributes, FC } from 'react';

interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'x-small' | 'small' | 'medium' | 'large';
  variant?: 'primary' | 'secondary' | 'danger';
}

export const ButtonElement: FC<IProps> = ({
  size = 'medium',
  variant = 'primary',
  type = 'button',
  children,
  className,
  disabled,
  ...props
}) => {
  const sizeClasses = {
    'x-small': 'px-2 py-1 text-xs',
    small: 'px-3 py-1.5 text-sm',
    medium: 'px-4 py-2 text-base',
    large: 'px-6 py-3 text-lg',
  };

  const variantClasses = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-gray-400',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

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
