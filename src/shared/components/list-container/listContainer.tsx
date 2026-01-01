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
  const showPagination = totalPages > 1 && !isLoading;

  if (isLoading) return <Loader />;

  return (
    <div className={'flex flex-col gap-6 justify-items-center items-center w-full'}>
      {isFetching && <Loader />}
      {showEmptyList && <EmptyList message={emptyMessage} />}
      {showItems && (
        <div className={'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full  justify-items-center'}>
          {items.map(renderItem)}
        </div>
      )}

      {showPagination && <Pagination currentPage={currentPage} total={totalPages} onChangePage={handlePageChange} />}
    </div>
  );
};
