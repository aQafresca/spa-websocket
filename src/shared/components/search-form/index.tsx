import { useForm } from '@tanstack/react-form';

import { ButtonElement } from '@/shared/components/button';
import { InputFieldElement } from '@/shared/components/fields/text-input';
import { ButtonText } from '@/shared/constants';

interface ISearchFormProps {
  placeholder: string;
  initialValue?: string;
  onSubmit: (value: string) => void;
}

export const SearchForm = ({ placeholder, initialValue = '', onSubmit }: ISearchFormProps) => {
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
      className={'flex gap-3 w-full max-w-lg items-center'}
      onSubmit={(e) => {
        e.preventDefault();
        void form.handleSubmit();
      }}
    >
      <form.Field name={'search'}>
        {(field) => <InputFieldElement field={field} placeholder={placeholder} type={'text'} />}
      </form.Field>

      <ButtonElement size={'small'} variant={'outline'} type="submit">
        {ButtonText.SEARCH}
      </ButtonElement>
    </form>
  );
};
