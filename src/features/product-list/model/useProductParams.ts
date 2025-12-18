import { useNavigate } from '@tanstack/react-router';

import { Route } from '@/routes';

export const useProductParams = () => {
  const navigate = useNavigate({ from: Route.fullPath });
  const { page, search } = Route.useSearch();

  const handlePageChange = (newPage: number) => {
    void navigate({ search: (prev) => ({ ...prev, page: newPage }) });
  };

  const handleSearch = (newQuery: string) => {
    void navigate({
      search: (prev) => ({ ...prev, search: newQuery || undefined, page: 1 }),
    });
  };

  return { page, search, handleSearch, handlePageChange };
};
