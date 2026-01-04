import type { AnyFieldApi } from '@tanstack/react-form';
import * as React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface IFieldProps {
  field: AnyFieldApi;
  label?: string;
  placeholder: string;
  type: 'text' | 'password';
}

export const InputFieldElement: React.FC<IFieldProps> = ({ label, placeholder, field, type }: IFieldProps) => {
  const [showPassword, setShowPassword] = React.useState(false);
  const isPassword = type === 'password';
  const showError = field.state.meta.isTouched && field.state.meta.errors.length > 0;

  const togglePasswordVisibility: () => void = (): void => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className={'flex flex-col gap-1 w-full'}>
      <label className={'flex min-h-6 px-2 text-primary items-end'} htmlFor={field.name}>
        {label}
      </label>
      <div className={'relative flex flex-col gap-1 w-full'}>
        <input
          className={'outline-0 w-full border border-amber-50 rounded-md px-3 py-2 focus:border-accent'}
          id={field.name}
          name={field.name}
          onBlur={field.handleBlur}
          placeholder={placeholder}
          onChange={(e) => field.handleChange(e.target.value)}
          value={field.state.value ?? ''}
          type={isPassword && showPassword ? 'text' : type}
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}
        />
        <p className={'min-h-6 text-error px-2'}>{showError ? field.state.meta.errors[0].message : ' '}</p>
        {isPassword && (
          <button className={'absolute right-3 top-3'} type={'button'} onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </div>
    </div>
  );
};
