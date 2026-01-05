import { useForm } from '@tanstack/react-form';

import { messageFormSchema, messageDefaultValues } from '@/entities/chat/model';
import type { IMessageFormProps } from '@/entities/chat/model';
import { ButtonElement } from '@/shared/components/button';
import { TextareaField } from '@/shared/components/fields/text-area';
import { ButtonText } from '@/shared/constants';

export const MessageForm = ({ onSendMessage }: IMessageFormProps) => {
  const form = useForm({
    defaultValues: messageDefaultValues,
    validators: {
      onChange: messageFormSchema,
    },
    onSubmit: ({ value }) => {
      onSendMessage(value.message);
      form.reset();
    },
  });

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        e.stopPropagation();
        void form.handleSubmit();
      }}
      className={'flex items-start gap-2 w-full justify-between'}
    >
      <form.Field name={'message'}>
        {(field) => <TextareaField field={field} placeholder={'message'} className={'border resize-none rounded'} />}
      </form.Field>

      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit]) => (
          <div className={'h-full'}>
            <ButtonElement type={'submit'} variant={'outline'} size={'small'} disabled={!canSubmit}>
              {ButtonText.SEND}
            </ButtonElement>
          </div>
        )}
      />
    </form>
  );
};
