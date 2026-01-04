import { createLazyFileRoute } from '@tanstack/react-router';

import { GraphqlPage } from '@/pages/graphql';

export const Route = createLazyFileRoute('/character/')({
  component: GraphqlPage,
});
