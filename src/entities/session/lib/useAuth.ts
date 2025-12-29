import { useMeQuery } from '@/features/auth/api';
import { tokenStorage } from '@/shared/lib/storage';

export const useAuth = () => {
  const { data: user } = useMeQuery();
  const token = tokenStorage.get();
  const isAuth = !!token && !!user;

  return {
    user,
    isAuth,
  };
};
