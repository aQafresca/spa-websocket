import type { AnyFieldApi } from '@tanstack/react-form';
import * as React from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

interface IFieldProps {
  field: AnyFieldApi;
  label: string;
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
    <div>
      <label htmlFor={field.name}>
        {label}
        <input
          name={field.name}
          onBlur={field.handleBlur}
          placeholder={placeholder}
          onChange={(e) => field.handleChange(e.target.value)}
          value={field.state.value ?? ''}
          type={isPassword && showPassword ? 'text' : type}
        />
        <p>{showError ? field.state.meta.errors[0] : ' '}</p>
        {isPassword && (
          <button type={'button'} onClick={togglePasswordVisibility}>
            {showError ? <FaEyeSlash /> : <FaEye />}
          </button>
        )}
      </label>
    </div>
  );
};
