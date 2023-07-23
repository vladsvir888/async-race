import { store } from '../data';
import winnersService from '../api/winnersService';
import garageService from '../api/garageService';
import checkPaginationButtonsStatus from '../utils/checkPaginationButtonsStatus';
import getWinnerString from '../utils/getWinnerString';
import getPaginationString from '../utils/getPaginationString';
import showError from '../utils/showError';
import checkTypeView from '../utils/checkTypeView';

function cleanWinners() {
  const winnersWrapper = document.querySelector('.winners-wrapper');

  if (winnersWrapper) winnersWrapper.outerHTML = '';
}

async function getWinnersString(page, sort, order) {
  const limit = store.LIMIT_WINNERS;
  const paramsString = new URLSearchParams({
    _page: page,
    _limit: limit,
    _sort: sort,
    _order: order,
  }).toString();
  const { result, totalItems } = await winnersService.getWinners(paramsString);
  const promiseResult = result.map(async (winner) => {
    const car = await garageService.getCar(winner.id);
    const newCar = {
      time: winner.time,
      wins: winner.wins,
      ...car,
    };

    return newCar;
  });
  const winners = await Promise.all(promiseResult);
  const winnersString = winners.map((winner, index) => getWinnerString(winner, index)).join('');
  const [prev, next] = checkPaginationButtonsStatus(page, totalItems, limit);
  const isWinners = checkTypeView();

  return `
    <div class="winners-wrapper" ${isWinners !== 'winners' ? 'hidden' : ''}>
      <h1>
        Winners
        (<span>${totalItems}</span>)
      </h1>
      <div class="table-wrap">
        <table class="table">
          <thead>
            <tr>
              <th>
                Number
              </th>
              <th>
                Car
              </th>
              <th>
                Name
              </th>
              <th class="table__heading table__heading--wins">
              Wins
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12" height="12"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
              </th>
              <th class="table__heading table__heading--time">
                Best time (seconds)
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="12" height="12"><path d="M3.9 54.9C10.5 40.9 24.5 32 40 32H472c15.5 0 29.5 8.9 36.1 22.9s4.6 30.5-5.2 42.5L320 320.9V448c0 12.1-6.8 23.2-17.7 28.6s-23.8 4.3-33.5-3l-64-48c-8.1-6-12.8-15.5-12.8-25.6V320.9L9 97.3C-.7 85.4-2.8 68.8 3.9 54.9z"/></svg>
              </th>
            </tr>
          </thead>
          <tbody>
            ${winnersString}
          </tbody>
        </table>
      </div>
      ${getPaginationString(prev, next, page)}
    </div>
  `;
}

async function renderWinners(
  page = store.currentPageWinners,
  sort = store.sort,
  order = store.order,
) {
  try {
    cleanWinners();

    const tableString = await getWinnersString(page, sort, order);

    document.body.insertAdjacentHTML('beforeend', tableString);
  } catch (error) {
    showError(error.message);
  }
}

export default renderWinners;
