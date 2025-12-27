import { createFileRoute } from '@tanstack/react-router';

import { characterQueries } from '@/entities/characters/api';
import CharacterDetailPage from '@/pages/detail/character';
import { ErrorFallback } from '@/shared/components/error-fallback';
import { Loader } from '@/shared/components/loader';

export const Route = createFileRoute('/character/$characterId')({
  loader: ({ context: { queryClient }, params: { characterId } }) =>
    queryClient.ensureQueryData(characterQueries.detail(characterId)),
  pendingComponent: Loader,
  component: CharacterDetailPage,
  errorComponent: ({ error, reset }) => <ErrorFallback error={error} resetErrorBoundary={reset} />,
});
