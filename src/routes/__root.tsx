import type { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';

import { NotFoundPage } from '@/pages/not-found';
import Footer from '@/shared/components/footer';
import Header from '@/widgets/header/ui/header.tsx';

interface IMyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<IMyRouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

function RootLayout() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className={'container mx-auto p-5 flex-grow flex flex-col'}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
