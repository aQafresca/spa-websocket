import { LoginForm } from '@/features/auth/ui';
import { REASON } from '@/shared/constants';
import { LoginRoute } from '@/shared/routes';

const LoginPage = () => {
  const { reason } = LoginRoute.useSearch();

  return (
    <div className={'flex flex-grow flex-col items-center justify-center gap-6'}>
      {reason === REASON.AUTH_REQUIRED && (
        <div className={'mx-auto text-error'}>Please sign in to access the CHAT page</div>
      )}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
