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

async function getWinnersString(page) {
  const limit = store.LIMIT_WINNERS;
  const paramsString = new URLSearchParams({
    _page: page,
    _limit: limit,
  }).toString();
  const { result, totalItems } = await winnersService.getWinners(paramsString);
  const resultAfterTransform = result.map(async (winner) => {
    const car = await garageService.getCar(winner.id);
    const newCar = {
      time: winner.time,
      wins: winner.wins,
      ...car,
    };

    return newCar;
  });
  const winners = await Promise.all(resultAfterTransform);
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
              <th>
                Wins
              </th>
              <th>
                Best time (seconds)
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

async function renderWinners(page = store.currentPageWinners) {
  try {
    cleanWinners();

    const tableString = await getWinnersString(page);

    document.body.insertAdjacentHTML('beforeend', tableString);
  } catch (error) {
    showError(error.message);
  }
}

export default renderWinners;
