import { store } from '../data';
import GarageService from '../api/garageService';
import checkPaginationButtonsStatus from '../utils/checkPaginationButtonsStatus';
import getCarString from '../utils/getCarString';
import getControlPanelString from '../utils/getControlPanelString';
import getPaginationString from '../utils/getPaginationString';
import showError from '../utils/showError';
import checkTypeView from '../utils/checkTypeView';

function cleanGarage() {
  const garageWrapper = document.querySelector('.garage-wrapper');

  if (garageWrapper) garageWrapper.outerHTML = '';
}

async function getGarageString(page) {
  const limit = store.LIMIT_GARAGE;
  const paramsString = new URLSearchParams({
    _page: page,
    _limit: limit,
  }).toString();
  const { result, totalItems } = await GarageService.getCars(paramsString);
  const carsString = result.map((car) => getCarString(car)).join('');
  const [prev, next] = checkPaginationButtonsStatus(page, totalItems, limit);
  const isGarage = checkTypeView();

  return `
    <div class="garage-wrapper" ${isGarage !== 'garage' ? 'hidden' : ''}>
      ${getControlPanelString()}
      <h1>
        Garage
        (<span>${totalItems}</span>)
      </h1>
      <section class="garage">${carsString}</section>
      ${getPaginationString(prev, next, page)}
    </div>
  `;
}

async function renderGarage(page = store.currentPageGarage) {
  try {
    cleanGarage();

    const garageString = await getGarageString(page);

    document.body.insertAdjacentHTML('beforeend', garageString);
  } catch (error) {
    showError(error.message);
  }
}

export default renderGarage;
