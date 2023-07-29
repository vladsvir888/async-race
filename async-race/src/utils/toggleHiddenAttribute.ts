import { KEY_LS } from '../data';
import showMessage from './showMessage';

function toggleHiddenAttribute(): void {
  const value = localStorage.getItem(KEY_LS);
  const garageWrapper = document.querySelector('.garage-wrapper');
  const winnersWrapper = document.querySelector('.winners-wrapper');

  if (!garageWrapper || !winnersWrapper) {
    showMessage("Some view doesn't exist", true);

    return;
  }

  if (value === 'garage') {
    garageWrapper.removeAttribute('hidden');
    winnersWrapper.setAttribute('hidden', '');
  } else {
    garageWrapper.setAttribute('hidden', '');
    winnersWrapper.removeAttribute('hidden');
  }
}

export default toggleHiddenAttribute;
