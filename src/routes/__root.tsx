import { Outlet, createRootRoute } from '@tanstack/react-router';
import * as React from 'react';

import Footer from '@/shared/components/footer';
import Header from '@/shared/components/header';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Header />
      <Outlet />
      <Footer />
    </React.Fragment>
  );
}
