import { useForm } from '@tanstack/react-form';
import { useNavigate } from '@tanstack/react-router';

import { useLoginUser } from '@/features/auth/api';
import { loginFormDefaultValues, loginFormSchema } from '@/features/auth/model';
import { ButtonElement } from '@/shared/components/button';
import { InputFieldElement } from '@/shared/components/fields/text-input';
import { ButtonText } from '@/shared/constants';
import { LoginRoute, ProductRoute } from '@/shared/routes';

export const LoginForm = () => {
  const navigate = useNavigate();
  const search = LoginRoute.useSearch();
  const { mutate, error } = useLoginUser();

  const form = useForm({
    defaultValues: loginFormDefaultValues,
    validators: { onSubmit: loginFormSchema },

    onSubmit: ({ value }) => {
      mutate(value, {
        onSuccess: () => {
          const destination = search.redirect || ProductRoute.to;

          void navigate({ to: destination });
        },
      });
    },
  });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        void form.handleSubmit();
      }}
    >
      {error && <p>{error.message}</p>}
      <form.Field
        name="username"
        children={(field) => (
          <InputFieldElement field={field} label={'username'} placeholder={'example@gmail.com'} type={'text'} />
        )}
      />
      <form.Field
        name={'password'}
        children={(field) => (
          <InputFieldElement field={field} label={'password'} placeholder={'*******'} type={'password'} />
        )}
      />
      <form.Subscribe
        selector={(state) => [state.canSubmit, state.isSubmitting]}
        children={([canSubmit]) => (
          <ButtonElement type={'submit'} disabled={!canSubmit}>
            {ButtonText.SUBMIT}
          </ButtonElement>
        )}
      />
    </form>
  );
};
