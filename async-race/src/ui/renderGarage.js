import getCars from '../api/getCars';
import { store } from '../data';
import checkPaginationButtonsStatus from '../utils/checkPaginationButtonsStatus';
import renderCar from './renderCar';
import renderPagination from './renderPagination';

async function renderGarage(page = store.currentPage) {
  const garageWrapper = document.querySelector('.garage-wrapper');

  if (garageWrapper) garageWrapper.outerHTML = '';

  try {
    const paramsString = new URLSearchParams({
      _page: page,
      _limit: store.LIMIT,
    }).toString();
    const { result, totalItems } = await getCars(paramsString);
    const carsString = result.map((car) => renderCar(car)).join('');
    const garageString = `
      <div class="garage-wrapper">
        <h1>
          Garage
          (<span>${totalItems}</span>)
        </h1>
        <section class="garage">${carsString}</section>
      </div>
    `;

    document.body.insertAdjacentHTML('beforeend', garageString);

    const [prev, next] = checkPaginationButtonsStatus(page, totalItems);

    renderPagination(prev, next);
  } catch (error) {
    //
  }
}

export default renderGarage;
