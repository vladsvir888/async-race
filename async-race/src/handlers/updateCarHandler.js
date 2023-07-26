import GarageService from '../api/garageService';
import renderGarage from '../ui/renderGarage';
import renderWinners from '../ui/renderWinners';
import getColorAndNameFromInputs from '../utils/getColorAndNameFromInputs';

function updateCarHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-update-button')) return;

    const car = getColorAndNameFromInputs(target);
    await GarageService.updateCar(target.dataset.id, car);

    renderGarage();
    renderWinners();
  });
}

export default updateCarHandler;
