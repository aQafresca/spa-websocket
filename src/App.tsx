import { createRouter, RouterProvider } from '@tanstack/react-router';

import { queryClient } from '@/app/queryClient.ts';
import { routeTree } from '@/routeTree.gen.ts';

const router = createRouter({
  routeTree,
  context: { queryClient: queryClient },
  defaultPreload: 'intent',
  defaultPreloadDelay: 300,
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export function App() {
  return <RouterProvider router={router} />;
}
