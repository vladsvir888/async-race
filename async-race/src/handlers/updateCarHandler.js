import garageService from '../api/garageService';
import winnersService from '../api/winnersService';
import renderGarage from '../ui/renderGarage';
import renderWinners from '../ui/renderWinners';
import getColorAndNameFromInputs from '../utils/getColorAndNameFromInputs';

function updateCarHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-update-button')) return;

    const car = getColorAndNameFromInputs(target);

    await garageService.updateCar(target.dataset.id, car);
    await winnersService.updateWinner(target.dataset.id, {
      wins: target.dataset.wins,
      time: target.dataset.time,
      ...car,
    });

    renderGarage();
    renderWinners();
  });
}

export default updateCarHandler;
