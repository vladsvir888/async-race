import { KEY_LS } from '../data';
import renderToggleButtons from '../ui/renderToggleButtons';
import toggleHiddenAttribute from '../utils/toggleHiddenAttribute';

function toWinnersHandler(): void {
  document.addEventListener('click', (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.classList.contains('js-to-winners-button')) return;

    localStorage.setItem(KEY_LS, 'winners');

    renderToggleButtons();
    toggleHiddenAttribute();
  });
}

export default toWinnersHandler;
