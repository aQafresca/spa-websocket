import * as React from 'react';

import { EmptyList } from '@/shared/components/empty-list';
import { Loader } from '@/shared/components/loader';
import { Pagination } from '@/shared/components/pagination';
import type { IListViewState } from '@/shared/types/list.ts';

interface IListContainerProps<T> {
  state: IListViewState<T>;
  renderItem: (item: T) => React.ReactNode;
  emptyMessage: string;
}

export const ListContainer = <T,>({ state, renderItem, emptyMessage }: IListContainerProps<T>) => {
  const { items, isFetching, isError, isLoading, currentPage, totalPages, handlePageChange } = state;

  const hasError = isError && !isLoading;
  const hasNoResults = !isLoading && !isFetching && items.length === 0;
  const showEmptyList = hasNoResults || hasError;
  const showItems = !isLoading && !showEmptyList;

  if (isLoading) return <Loader />;

  return (
    <>
      {isFetching && <Loader />}
      {showEmptyList && <EmptyList message={emptyMessage} />}
      {showItems && items.map(renderItem)}

      <Pagination currentPage={currentPage} total={totalPages} onChangePage={handlePageChange} />
    </>
  );
};
