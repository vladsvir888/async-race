import { KEY_LS } from '../data';
import renderToggleButtons from '../ui/renderToggleButtons';
import toggleHiddenAttribute from '../utils/toggleHiddenAttribute';

function toGarageHandler() {
  document.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.classList.contains('js-to-garage-button')) return;

    localStorage.setItem(KEY_LS, 'garage');

    renderToggleButtons();
    toggleHiddenAttribute();
  });
}

export default toGarageHandler;
