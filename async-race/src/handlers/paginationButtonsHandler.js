import { store } from '../data';
import renderGarage from '../ui/renderGarage';
import renderWinners from '../ui/renderWinners';
import checkTypeView from '../utils/checkTypeView';

function paginationButtonsHandler() {
  document.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.matches('.js-prev-button, .js-next-button')) return;

    const value = checkTypeView();
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
