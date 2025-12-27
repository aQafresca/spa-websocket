import type { QueryClient } from '@tanstack/react-query';
import { Outlet, createRootRouteWithContext } from '@tanstack/react-router';
import * as React from 'react';

import { NotFoundPage } from '@/pages/not-found';
import Footer from '@/shared/components/footer';
import Header from '@/shared/components/header';

interface IMyRouterContext {
  queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<IMyRouterContext>()({
  component: RootLayout,
  notFoundComponent: NotFoundPage,
});

function RootLayout() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
