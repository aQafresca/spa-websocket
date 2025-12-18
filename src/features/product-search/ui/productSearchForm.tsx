import { useForm } from '@tanstack/react-form';

import { ButtonElement } from '@/shared/components/button';
import { InputFieldElement } from '@/shared/components/fields/text-input';
import { ButtonText } from '@/shared/constants';

interface IProductSearchForm {
  label: string;
  placeholder: string;
  initialValue?: string;
  onSearch: (_value: string) => void;
}

export const ProductSearchForm = ({ label, placeholder, initialValue = '', onSearch }: IProductSearchForm) => {
  const form = useForm({
    defaultValues: {
      search: initialValue,
    },
    onSubmit: ({ value }) => {
      onSearch(value.search);
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
