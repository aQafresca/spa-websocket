import { createFileRoute, redirect } from '@tanstack/react-router';

import { tokenStorage } from '@/shared/lib/storage';
import { ProductRoute } from '@/shared/routes';

export const Route = createFileRoute('/_guest')({
  beforeLoad: () => {
    const isAuth = !!tokenStorage.get();

    if (isAuth) {
      throw redirect({
        to: ProductRoute.to,
      });
    }
  },
});
