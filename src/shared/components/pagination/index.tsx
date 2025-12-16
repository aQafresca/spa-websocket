import { DOTS } from '@/shared/constants';
import { getPaginationRange } from '@/shared/lib/utils/getPaginationRange.ts';

interface IPagination {
  currentPage: number;
  total: number;
  onChangePage: (_page: number) => void;
}

export const Pagination = ({ currentPage, total, onChangePage }: IPagination) => {
  const totalPages = Math.max(total, 1);

  const pages = getPaginationRange({ currentPage, totalPages, siblingCount: 1 });

  const isPrevDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  return (
    <div aria-label="Pagination">
      <button
        onClick={() => onChangePage(currentPage - 1)}
        disabled={isPrevDisabled}
        aria-label="Prev page"
        type="button"
      >
        prev
      </button>
      <div>
        {pages.map((page, index) =>
          page === DOTS ? (
            <span key={`dots-${index}`}>{DOTS}</span>
          ) : (
            <button key={page} type="button" disabled={page === currentPage} onClick={() => onChangePage(Number(page))}>
              {page}
            </button>
          ),
        )}
      </div>
      <button
        onClick={() => onChangePage(currentPage + 1)}
        disabled={isNextDisabled}
        aria-label="Next page"
        type="button"
      >
        next
      </button>
    </div>
  );
};
