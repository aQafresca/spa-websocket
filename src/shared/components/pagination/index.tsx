import { ButtonElement } from '@/shared/components/button';
import { DOTS } from '@/shared/constants';
import { getPaginationRange } from '@/shared/lib/utils/getPaginationRange.ts';

interface IPagination {
  currentPage: number;
  total: number;
  onChangePage: (page: number) => void;
}

export const Pagination = ({ currentPage, total, onChangePage }: IPagination) => {
  const totalPages = Math.max(total, 1);

  const pages = getPaginationRange({ currentPage, totalPages, siblingCount: 1 });

  const isPrevDisabled = currentPage <= 1;
  const isNextDisabled = currentPage >= totalPages;

  return (
    <div className={'flex gap-3'} aria-label="Pagination">
      <ButtonElement
        size={'x-small'}
        variant={'outline'}
        onClick={() => onChangePage(currentPage - 1)}
        disabled={isPrevDisabled}
        aria-label="Prev page"
        type="button"
      >
        {'<'}
      </ButtonElement>
      <div className={'flex gap-1'} aria-label="Pagination">
        {pages.map((page, index) =>
          page === DOTS ? (
            <span className={'px-2 py-1 text-xm'} key={`dots-${index}`}>
              {DOTS}
            </span>
          ) : (
            <ButtonElement
              variant={'outline'}
              size={'x-small'}
              key={page}
              type="button"
              disabled={page === currentPage}
              onClick={() => onChangePage(Number(page))}
            >
              {page}
            </ButtonElement>
          ),
        )}
      </div>
      <ButtonElement
        size={'x-small'}
        variant={'outline'}
        onClick={() => onChangePage(currentPage + 1)}
        disabled={isNextDisabled}
        aria-label="Next page"
        type="button"
      >
        {'>'}
      </ButtonElement>
    </div>
  );
};
