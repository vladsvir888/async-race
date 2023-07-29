import EngineService from '../api/engineService';

function resetCarsHandler(): void {
  document.addEventListener('click', async (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.classList.contains('js-reset-cars-button')) return;

    const items = <HTMLElement[]>[...document.querySelectorAll('.garage__item')];
    const promise = items.map((item) => EngineService.switchCarEngine(<string>item.dataset.id, 'stopped'));

    await Promise.all(promise);

    items.forEach((item) => {
      const car = <HTMLElement>item.querySelector('.garage__car');
      car.getAnimations().forEach((animation) => animation.cancel());
    });
  });
}

export default resetCarsHandler;
