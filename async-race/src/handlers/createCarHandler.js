import garageService from '../api/garageService';
import renderGarage from '../ui/renderGarage';
import getColorAndNameFromInputs from '../utils/getColorAndNameFromInputs';

function createCarHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-create-button')) return;

    const car = getColorAndNameFromInputs(target);

    await garageService.createCar(car);

    renderGarage();
  });
}

export default createCarHandler;
