import { useQueryClient } from '@tanstack/react-query';
import { useNavigate, useRouter } from '@tanstack/react-router';

import { tokenStorage } from '@/shared/lib/storage';
import { LoginRoute } from '@/shared/routes';

export const useLogout = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const navigate = useNavigate();

  const logout = async () => {
    tokenStorage.clear();

    await queryClient.resetQueries({ queryKey: ['auth-me'] });

    await router.invalidate();

    await navigate({
      to: LoginRoute.to,
      search: { redirect: '' },
    });
  };

  return { logout };
};
