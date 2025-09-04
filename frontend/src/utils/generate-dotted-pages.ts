export const RADIUS = 2;
export const generateDottedPages = (
  total: number,
  pageSize: number,
  page: number
) => {
  if (total <= 0 || pageSize <= 0 || page <= 0) {
    return [];
  }

  const pages: number[] = [];
  const finalPages: (number | string)[] = [];
  const totalPages = Math.ceil(total / pageSize);

  // If only one page or less, return appropriate result
  if (totalPages <= 1) {
    return totalPages === 1 ? [1] : [];
  }

  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }
  const dots = "...";
  for (let j = 0; j < pages.length; j++) {
    const lastIndex = pages.length - 1;
    const current = pages[j];
    const isFirstPage = current === 1;
    const isLastPage = current === pages[lastIndex];

    const lastItem = finalPages[finalPages.length - 1];

    const isWithinRadius = Math.abs(current - page) <= RADIUS;

    if (isFirstPage || isLastPage || isWithinRadius) {
      finalPages.push(current);
    } else if (lastItem !== dots) {
      finalPages.push(dots);
    }
  }
  return finalPages;
};
