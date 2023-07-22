import { KEY_LS } from '../data';

function toggleHiddenAttribute() {
  const value = localStorage.getItem(KEY_LS);
  const garageWrapper = document.querySelector('.garage-wrapper');
  const winnersWrapper = document.querySelector('.winners-wrapper');

  if (!garageWrapper || !winnersWrapper) return;

  if (value === 'garage') {
    garageWrapper.removeAttribute('hidden');
    winnersWrapper.setAttribute('hidden', true);
  } else {
    garageWrapper.setAttribute('hidden', true);
    winnersWrapper.removeAttribute('hidden');
  }
}

export default toggleHiddenAttribute;
