import { DOTS } from '@/shared/constants';

interface IRangeProps {
  currentPage: number;
  totalPages: number;
  siblingCount: number;
}

const range = (start: number, end: number) => Array.from({ length: end - start + 1 }, (_, i) => start + i);

const FIRST_LAST_PAGE_COUNT = 1;
const ELLIPSIS_COUNT = 1;
const SIDE_PAGE_BLOCK_SIZE = 3;

export const getPaginationRange = ({ currentPage, totalPages, siblingCount }: IRangeProps): (number | string)[] => {
  const paginationDisplayCount = siblingCount * 2 + FIRST_LAST_PAGE_COUNT * 2 + ELLIPSIS_COUNT * 2 + 1;

  if (totalPages <= paginationDisplayCount) {
    return range(1, totalPages);
  }

  const left = Math.max(currentPage - siblingCount, FIRST_LAST_PAGE_COUNT);
  const right = Math.min(currentPage + siblingCount, totalPages);

  const showLeftDots = left > FIRST_LAST_PAGE_COUNT + 1;
  const showRightDots = right < totalPages - FIRST_LAST_PAGE_COUNT;

  if (!showLeftDots && showRightDots) {
    const leftRangeEnd = SIDE_PAGE_BLOCK_SIZE + siblingCount * 2;

    return [...range(FIRST_LAST_PAGE_COUNT, leftRangeEnd), DOTS, totalPages];
  }

  if (showLeftDots && !showRightDots) {
    const rightRangeStart = totalPages - (SIDE_PAGE_BLOCK_SIZE + siblingCount * 2) + FIRST_LAST_PAGE_COUNT;

    return [FIRST_LAST_PAGE_COUNT, DOTS, ...range(rightRangeStart, totalPages)];
  }

  return [FIRST_LAST_PAGE_COUNT, DOTS, ...range(left, right), DOTS, totalPages];
};
