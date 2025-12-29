import { LoginForm } from '@/features/auth/ui';
import { REASON } from '@/shared/constants';
import { LoginRoute } from '@/shared/routes';

const LoginPage = () => {
  const { reason } = LoginRoute.useSearch();

  return (
    <div>
      {reason === REASON.AUTH_REQUIRED && <div>Please sign in to access the CHAT page</div>}
      <LoginForm />
    </div>
  );
};

export default LoginPage;
