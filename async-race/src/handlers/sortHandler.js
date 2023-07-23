import { store } from '../data';
import renderWinners from '../ui/renderWinners';

function handle(sort) {
  const type = store.order;

  if (type === 'ASC') {
    renderWinners(store.currentPageWinners, sort, 'DESC');
    store.order = 'DESC';
  } else {
    renderWinners(store.currentPageWinners, sort, 'ASC');
    store.order = 'ASC';
  }

  store.sort = sort;
}

function sortHandler() {
  document.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.classList.contains('table__heading')) return;

    if (target.classList.contains('table__heading--wins')) {
      handle('wins');
    }

    if (target.classList.contains('table__heading--time')) {
      handle('time');
    }
  });
}

export default sortHandler;
