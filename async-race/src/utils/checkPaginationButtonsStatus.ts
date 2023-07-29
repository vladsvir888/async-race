function checkPaginationButtonsStatus(
  page: number,
  totalItems: number,
  limit: number,
): [boolean, boolean] {
  let prevDisabled;
  let nextDisabled;
  const isFirstPage = page === 1;
  const isLastPage = totalItems / (page * limit) <= 1;

  if (isFirstPage) {
    prevDisabled = true;
  } else {
    prevDisabled = false;
  }

  if (isLastPage) {
    nextDisabled = true;
  } else {
    nextDisabled = false;
  }

  return [prevDisabled, nextDisabled];
}

export default checkPaginationButtonsStatus;
