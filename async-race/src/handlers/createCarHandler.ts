import GarageService from '../api/garageService';
import renderGarage from '../ui/renderGarage';
import getColorAndNameCarFromInputs from '../utils/getColorAndNameCarFromInputs';
import showMessage from '../utils/showMessage';

function createCarHandler(): void {
  document.addEventListener('click', async (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.classList.contains('js-create-button')) return;

    const car = getColorAndNameCarFromInputs(target);

    if (!car) {
      showMessage('Enter text into the input to create car', true);

      return;
    }

    await GarageService.createCar(car);

    renderGarage();
  });
}

export default createCarHandler;
