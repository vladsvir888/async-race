import { store } from '../constants';
import GarageService from '../api/garageService';
import checkPaginationButtonsStatus from '../utils/checkPaginationButtonsStatus';
import getCarString from '../utils/getCarString';
import getControlPanelString from '../utils/getControlPanelString';
import getPaginationString from '../utils/getPaginationString';
import showMessage from '../utils/showMessage';
import getTypeView from '../utils/getTypeView';

function removeAllCars(): void {
  const garageWrapper = document.querySelector('.garage-wrapper');

  if (garageWrapper) garageWrapper.outerHTML = '';
}

async function getGarageString(page: number): Promise<string> {
  const limit = store.LIMIT_GARAGE;
  const paramsString = new URLSearchParams({
    _page: page.toString(),
    _limit: limit.toString(),
  }).toString();
  const { result, totalItems } = await GarageService.getCars(paramsString);
  const carsString = result.map((car) => getCarString(car)).join('');
  const [prev, next] = checkPaginationButtonsStatus(page, totalItems, limit);
  const isGarage = getTypeView();

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

async function renderGarage(page = store.currentPageGarage): Promise<void> {
  try {
    removeAllCars();

    const garageString = await getGarageString(page);

    document.body.insertAdjacentHTML('beforeend', garageString);
  } catch (error) {
    if (error instanceof Error) {
      showMessage(error.message);
    }
  }
}

export default renderGarage;
