import { createFileRoute, redirect } from '@tanstack/react-router';

import { meQueries } from '@/features/auth/api';
import { REASON } from '@/shared/constants';
import { tokenStorage } from '@/shared/lib/storage';
import { LoginRoute } from '@/shared/routes';

export const Route = createFileRoute('/_auth')({
  beforeLoad: async ({ context, location }) => {
    if (!tokenStorage.get()) {
      throw redirect({
        to: LoginRoute.to,
        search: { redirect: location.href, reason: REASON.AUTH_REQUIRED },
      });
    }

    try {
      await context.queryClient.ensureQueryData(meQueries.details());
    } catch {
      tokenStorage.clear();
      throw redirect({
        to: LoginRoute.to,
        search: { redirect: location.href },
      });
    }
  },
});
