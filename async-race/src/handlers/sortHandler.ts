import { store } from '../constants';
import renderWinners from '../ui/renderWinners';

function sortHandler(): void {
  document.addEventListener('click', (event) => {
    const target = <HTMLTableCellElement>event.target;

    if (!target.classList.contains('table__heading')) return;

    const type = store.order;
    let typeSort;

    if (target.classList.contains('table__heading--wins')) {
      typeSort = 'wins';
    } else {
      typeSort = 'time';
    }

    if (type === 'ASC') {
      renderWinners(store.currentPageWinners, typeSort, 'DESC');
      store.order = 'DESC';
    } else {
      renderWinners(store.currentPageWinners, typeSort, 'ASC');
      store.order = 'ASC';
    }

    store.sort = typeSort;
  });
}

export default sortHandler;
