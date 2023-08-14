import getTypeView from '../utils/getTypeView';

function renderToggleButtons(): void {
  const value = getTypeView();
  const buttonsWrapper = document.querySelector('.toggle-buttons');

  if (buttonsWrapper) buttonsWrapper.outerHTML = '';

  document.body.insertAdjacentHTML('afterbegin', `
    <div class="toggle-buttons">
      <button class="button button--primary js-to-garage-button" ${value === 'garage' ? 'disabled' : ''}>To garage</button>
      <button class="button button--primary js-to-winners-button" ${value === 'winners' ? 'disabled' : ''}>To winners</button>
    </div>
  `);
}

export default renderToggleButtons;
