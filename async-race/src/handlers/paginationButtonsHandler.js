import { store } from '../data';
import renderGarage from '../ui/renderGarage';

function paginationButtonsHandler() {
  const prevButton = document.querySelector('.js-prev-button');
  const nextButton = document.querySelector('.js-next-button');

  prevButton?.addEventListener('click', () => {
    renderGarage(store.currentPage -= 1);
  });

  nextButton?.addEventListener('click', () => {
    renderGarage(store.currentPage += 1);
  });
}

export default paginationButtonsHandler;
