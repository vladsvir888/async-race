import EngineService from '../api/engineService';
import showMessage from '../utils/showMessage';

function stopEngineHandler(): void {
  document.addEventListener('click', async (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.classList.contains('js-stop-button')) return;

    const parent = <HTMLElement>target.parentElement;
    const { id } = parent.dataset;

    if (!id) {
      showMessage("Id doesn't exit", true);

      return;
    }

    const car = <HTMLElement>parent.querySelector('.garage__car');
    const startButton = <HTMLButtonElement>parent.querySelector('.js-start-button');

    await EngineService.switchCarEngine(id, 'stopped');

    car.getAnimations().forEach((animation) => animation.cancel());
    target.disabled = true;
    startButton.disabled = false;
  });
}

export default stopEngineHandler;
