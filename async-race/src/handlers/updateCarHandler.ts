import GarageService from '../api/garageService';
import { store } from '../constants';
import renderGarage from '../ui/renderGarage';
import renderWinners from '../ui/renderWinners';
import getColorAndNameCarFromInputs from '../utils/getColorAndNameCarFromInputs';
import showMessage from '../utils/showMessage';

function updateCarHandler(): void {
  document.addEventListener('click', async (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.classList.contains('js-update-button')) return;

    const car = getColorAndNameCarFromInputs(target);

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
