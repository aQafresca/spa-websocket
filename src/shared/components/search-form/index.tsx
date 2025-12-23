import { useForm } from '@tanstack/react-form';

import { ButtonElement } from '@/shared/components/button';
import { InputFieldElement } from '@/shared/components/fields/text-input';
import { ButtonText } from '@/shared/constants';

interface ISearchFormProps {
  label: string;
  placeholder: string;
  initialValue?: string;
  onSubmit: (value: string) => void;
}

export const SearchForm = ({ label, placeholder, initialValue = '', onSubmit }: ISearchFormProps) => {
  const form = useForm({
    defaultValues: {
      search: initialValue,
    },
    onSubmit: ({ value }) => {
      onSubmit(value.search);
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        void form.handleSubmit();
      }}
    >
      <form.Field name={'search'}>
        {(field) => <InputFieldElement field={field} label={label} placeholder={placeholder} type={'text'} />}
      </form.Field>

      <ButtonElement type="submit">{ButtonText.SEARCH}</ButtonElement>
    </form>
  );
};
