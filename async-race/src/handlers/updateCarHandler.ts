import GarageService from '../api/garageService';
import { store } from '../data';
import renderGarage from '../ui/renderGarage';
import renderWinners from '../ui/renderWinners';
import getColorAndNameFromInputs from '../utils/getColorAndNameFromInputs';
import showMessage from '../utils/showMessage';

function updateCarHandler(): void {
  document.addEventListener('click', async (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.classList.contains('js-update-button')) return;

    const car = getColorAndNameFromInputs(target);

    if (!car) {
      showMessage("Car doesn't exist", true);

      return;
    }

    await GarageService.updateCar(store.idCar, car);

    renderGarage();
    renderWinners();
  });
}

export default updateCarHandler;
