import GarageService from '../api/garageService';
import WinnersService from '../api/winnersService';
import renderGarage from '../ui/renderGarage';
import renderWinners from '../ui/renderWinners';
import getColorAndNameFromInputs from '../utils/getColorAndNameFromInputs';

function updateCarHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-update-button')) return;

    const car = getColorAndNameFromInputs(target);
    await GarageService.updateCar(target.dataset.id, car);

    const winner = {
      wins: target.dataset.wins,
      time: target.dataset.time,
      ...car,
    };
    await WinnersService.updateWinner(target.dataset.id, winner);

    renderGarage();
    renderWinners();
  });
}

export default updateCarHandler;
