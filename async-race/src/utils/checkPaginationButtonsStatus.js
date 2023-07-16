import { store } from '../data';

function checkPaginationButtonsStatus(page, totalItems) {
  let prevDisabled;
  let nextDisabled;
  const pageCount = Math.ceil(totalItems / store.LIMIT);

  if (page === 1) {
    prevDisabled = true;
  } else {
    prevDisabled = false;
  }

  if (pageCount === store.currentPage) {
    nextDisabled = true;
  } else {
    nextDisabled = false;
  }

  return [prevDisabled, nextDisabled];
}

export default checkPaginationButtonsStatus;
