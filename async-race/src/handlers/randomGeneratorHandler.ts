import GarageService from '../api/garageService';
import renderGarage from '../ui/renderGarage';
import getRandomCars from '../utils/getRandomCars';

function randomGeneratorHandler(): void {
  document.addEventListener('click', async (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.classList.contains('js-random-generate-button')) return;

    const cars = getRandomCars();
    const promiseCars = cars.map((car) => GarageService.createCar(car));

    await Promise.all(promiseCars);
    await renderGarage();
  });
}

export default randomGeneratorHandler;
