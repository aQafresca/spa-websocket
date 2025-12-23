import type { IListParams } from '@/shared/types/list.ts';

interface IUseListParams {
  params: IListParams;
  onChange: (params: IListParams) => void;
}

export const useListParams = ({ params, onChange }: IUseListParams) => {
  const handlePageChange = (page: number) => {
    onChange({ ...params, page });
  };

  const handleSearch = (newQuery: string) => {
    onChange({ page: 1, search: newQuery || undefined });
  };

  return { page: params.page, search: params.search, handleSearch, handlePageChange };
};
