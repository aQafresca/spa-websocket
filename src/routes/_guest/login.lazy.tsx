import { createLazyFileRoute } from '@tanstack/react-router';

import LoginPage from '@/pages/login';

export const Route = createLazyFileRoute('/_guest/login')({
  component: LoginPage,
});
