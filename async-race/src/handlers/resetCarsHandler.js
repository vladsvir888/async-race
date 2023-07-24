import EngineService from '../api/engineService';

function resetCarsHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-reset-cars-button')) return;

    const items = [...document.querySelectorAll('.garage__item')];
    const promise = items.map((item) => EngineService.switchCarEngine(item.dataset.id, 'stopped'));

    await Promise.all(promise);

    items.forEach((item) => {
      const car = item.querySelector('.garage__car');
      car.getAnimations().forEach((animation) => animation.cancel());
    });
  });
}

export default resetCarsHandler;
