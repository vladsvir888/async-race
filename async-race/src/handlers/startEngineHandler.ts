import EngineService from '../api/engineService';
import showMessage from '../utils/showMessage';

function startEngineHandler(): void {
  document.addEventListener('click', async (event) => {
    const target = <HTMLButtonElement>event.target;

    if (!target.classList.contains('js-start-button')) return;

    const parent = <HTMLElement>target.parentElement;
    const parentWidth = parent.getBoundingClientRect().width;
    const { id } = parent.dataset;

    if (!id) {
      showMessage("Id doesn't exist", true);

      return;
    }

    const result = await EngineService.switchCarEngine(id, 'started');
    const time = Math.round(result.distance / result.velocity);
    const car = <HTMLElement>parent.querySelector('.garage__car');
    const stopButton = <HTMLButtonElement>parent.querySelector('.js-stop-button');
    const carWidth = car.getBoundingClientRect().width;

    target.disabled = true;
    stopButton.disabled = false;

    const animation = car.animate(
      [
        { transform: 'translateX(0px)' },
        { transform: `translateX(calc(${parentWidth}px - ${carWidth}px))` },
      ],
      {
        duration: time,
        fill: 'forwards',
      },
    );

    try {
      await EngineService.switchCarEngine(id, 'drive');
    } catch (error) {
      animation.pause();
    } finally {
      target.disabled = false;
      stopButton.disabled = true;
    }
  });
}

export default startEngineHandler;
