import EngineService from '../api/engineService';
import { store } from '../data';

function startEngineHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-start-button')) return;

    const parent = target.parentElement;
    const parentWidth = parent.getBoundingClientRect().width;
    const { id } = parent.dataset;
    const result = await EngineService.switchCarEngine(id, 'started');
    const time = Math.round(result.distance / result.velocity);
    const car = parent.querySelector('.garage__car');
    const stopButton = parent.querySelector('.js-stop-button');
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

    store.carAnimation = animation;

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
