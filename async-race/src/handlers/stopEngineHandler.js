import EngineService from '../api/engineService';

function stopEngineHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-stop-button')) return;

    const parent = target.parentElement;
    const { id } = parent.dataset;
    const car = parent.querySelector('.garage__car');
    const startButton = parent.querySelector('.js-start-button');

    await EngineService.switchCarEngine(id, 'stopped');

    car.getAnimations().forEach((animation) => animation.cancel());
    target.disabled = true;
    startButton.disabled = false;
  });
}

export default stopEngineHandler;
