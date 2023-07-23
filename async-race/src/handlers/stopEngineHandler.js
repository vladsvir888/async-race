import EngineService from '../api/engineService';
import { store } from '../data';

function stopEngineHandler() {
  document.addEventListener('click', async (event) => {
    const { target } = event;

    if (!target.classList.contains('js-stop-button')) return;

    const parent = target.parentElement;
    const { id } = parent.dataset;
    const startButton = parent.querySelector('.js-start-button');

    try {
      await EngineService.switchCarEngine(id, 'stopped');
    } finally {
      store.carAnimation.cancel();
      target.disabled = true;
      startButton.disabled = false;
    }
  });
}

export default stopEngineHandler;
