interface IPaginatedListArgs<T> {
  items: T[];
  page: number;
  totalPages: number;
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
}

export const usePaginatedList = <T>({
  items,
  page,
  totalPages,
  isLoading,
  isFetching,
  isError,
}: IPaginatedListArgs<T>) => {
  return {
    items,
    currentPage: page,
    totalPages,
    isLoading,
    isFetching,
    isError,
  };
};
