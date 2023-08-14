import EngineService from '../api/engineService';

function cancelCarsRacingHandler(): void {
  document.addEventListener('click', async (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.classList.contains('js-reset-cars-button')) return;

    const cars = <HTMLElement[]>[...document.querySelectorAll('.garage__item')];

    await Promise.all(cars.map((car) => EngineService.switchCarEngine(<string>car.dataset.id, 'stopped')));

    cars.forEach((item) => {
      const car = <HTMLElement>item.querySelector('.garage__car');
      car.getAnimations().forEach((animation) => animation.cancel());
    });
  });
}

export default cancelCarsRacingHandler;
