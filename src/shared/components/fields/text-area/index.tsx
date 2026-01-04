import type { AnyFieldApi } from '@tanstack/react-form';

interface ITextareaField {
  field: AnyFieldApi;
  placeholder: string;
  className?: string;
}

export const TextareaField = ({ field, placeholder, className }: ITextareaField) => {
  const showError = field.state.meta.isTouched && field.state.meta.errors.length > 0;

  return (
    <div className={'w-full text-'}>
      <textarea
        name={field.name}
        onBlur={field.handleBlur}
        value={field.state.value}
        placeholder={placeholder}
        onChange={(e) => field.handleChange(e.target.value)}
        className={`px-4 py-2 w-full ${className}`}
      />

      <p className={'min-h-6 text-error px-2'}>{showError ? field.state.meta.errors[0].message : ' '}</p>
    </div>
  );
};
