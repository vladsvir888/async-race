function checkPaginationButtonsStatus(
  page: number,
  totalItems: number,
  limit: number,
): [boolean, boolean] {
  const isFirstPage = page === 1;
  const isLastPage = totalItems / (page * limit) <= 1;

  return [isFirstPage, isLastPage];
}

export default checkPaginationButtonsStatus;
