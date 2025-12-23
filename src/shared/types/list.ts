export interface IPaginatedListState<T> {
  items: T[];
  isLoading: boolean;
  isFetching: boolean;
  isError: boolean;
  currentPage: number;
  totalPages: number;
}

export interface IListViewState<T> extends IPaginatedListState<T> {
  handlePageChange: (page: number) => void;
  handleSearch: (query: string) => void;
}

export interface IListParams {
  page: number;
  search?: string;
}
