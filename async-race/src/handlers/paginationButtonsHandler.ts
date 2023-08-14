import { store } from '../constants';
import renderGarage from '../ui/renderGarage';
import renderWinners from '../ui/renderWinners';
import getTypeView from '../utils/getTypeView';

function paginationButtonsHandler(): void {
  document.addEventListener('click', (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.matches('.js-prev-button, .js-next-button')) return;

    const value = getTypeView();
    let pageDirection = 1;

    if (target.classList.contains('js-prev-button')) {
      pageDirection = -1;
    }

    if (value === 'garage') {
      renderGarage(store.currentPageGarage += pageDirection);
    } else {
      renderWinners(store.currentPageWinners += pageDirection);
    }
  });
}

export default paginationButtonsHandler;
